"use server";

import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";
import { queryGraphql } from "@/api/queryGraphql";
import {
	OrderAddToDocument,
	OrderCreateDocument,
	type OrderDetailsFragment,
	OrderGetByIdDocument,
	type VariantEnum,
	type DefaultIdResponse,
	OrderRemoveFromDocument,
	OrderDeleteAllFromDocument,
} from "@/graphql/generated/graphql";

/**
 * Fetch order / cart by database id via graphql query.
 * @param orderId order uuid as in db.
 * @returns order or null.
 */
export const getOrderById = async (
	orderId: string,
): Promise<OrderDetailsFragment | null> => {
	const { order } = await queryGraphql({
		query: OrderGetByIdDocument,
		variables: {
			orderId: orderId,
		},
		next: {
			tags: ["cart", "order"],
		},
	});
	if (!order) return null;
	return order;
};

/**
 * Get existing cart based on client cookie ("cartId"). Note that this is a dynamic function from Nextjs perspetive.
 * @param cartId cart id stored as client side cookie.
 * @returns cart (order with "CART" status) or null.
 */
export const getCart = async (): Promise<OrderDetailsFragment | null> => {
	const cartId = cookies().get("cartId")?.value;
	if (!cartId) {
		return null;
	}
	const order = await getOrderById(cartId);
	if (!order) {
		console.log("no existing order found");
		return null;
	}
	return { ...order, orderItems: order.orderItems ? order.orderItems : [] };
};

/**
 * Create a new cart (empty order with "CART" status) via graphql mutation.
 * Set client side cookie with new cart id.
 * Note that this is a dynamic function from Nextjs perspetive.
 * @returns new cart id to be stored as cookie.
 */
const createCart = async (): Promise<DefaultIdResponse> => {
		console.log("creating new cart");
		const { createOrder } = await queryGraphql({
			query: OrderCreateDocument,
			variables: {
				// FIXME: hardcoded for testing
				userId: "dbe0705a-87d0-4c11-9432-f55895360016",
			},
			next: {
				tags: ["cart", "order"],
			},
		});
		cookies().set("cartId", createOrder.id);
		return {
			id: createOrder.id,
		};
};

/**
 * Helper method. Try to get existing cart based on cookie id or create a new one.
 * @returns cart full representation (order with "CART" status).
 */
export const getOrCreateCart = async (): Promise<OrderDetailsFragment> => {
	const cart = await getCart();
	if (cart) {
		console.log(`cart found & fetched: ${cart.id}`);
		return cart;
	}

	const { id: newCartId } = await createCart();
	if (!newCartId) {
		throw new Error("Failed to create cart");
	}
	console.log(`new cart created: ${newCartId}`);
	return {
		id: newCartId,
		orderItems: [],
		// FIXME: hardcoded for testing
		user: { id: "dbe0705a-87d0-4c11-9432-f55895360016" },
		status: "CART",
		total: 0,
	};
};

/**
 * Main action to add item to cart via graphql mutation.
 * Revalidates "cart" and "order" tags after successful operation.
 * @param id product id to be added.
 * @param variant variant of the product to be added.
 */
export const addOrIncreaseItem = async ({
	variant,
	id,
}: {
	variant: VariantEnum;
	id: string;
}) => {
	// delay for testing
	// await new Promise((resolve) => setTimeout(resolve, 1000));

	const cart = await getOrCreateCart();

	if (!cart) {
		// TODO: set error boundary
		throw new Error("Failed to get or create cart");
	}

	console.log("ok got cart");
	console.log(cart);

	console.log(`product to be added: ${id}, variant: ${variant}`);

	try {
		const { addToOrder }: { addToOrder: OrderDetailsFragment } =
			await queryGraphql({
				query: OrderAddToDocument,
				variables: {
					to: cart.id,
					product: id,
					variant: variant,
				},
				next: {
					tags: ["cart", "order"],
				},
			});
		console.log("ok, added to cart");
		console.log(addToOrder);
		revalidateTag("cart");
	} catch (err) {
		// TODO: set error boundary
		throw new Error("Failed to add item to cart");
	}
};

/**
 * Remove item from existing cart via graphql mutation.
 * Revalidates "cart" and "order" tags after successful operation.
 * @param cartId
 * @param variant
 * @param productId
 */
export const decreaseItem = async ({
	variant,
	cartId,
	productId,
}: {
	variant: VariantEnum;
	cartId: string;
	productId: string;
}) => {
	// delay for testing
	// await new Promise((resolve) => setTimeout(resolve, 1000));
	try {
		console.log("removing item from cart");
		console.log(`fetching cart: ${cartId}	`);
		const cart = await getCart();
		console.log("cart fetch result");
		console.log(cart);
		if (!cart) return;
		await queryGraphql({
			query: OrderRemoveFromDocument,
			variables: {
				from: cart.id,
				product: productId,
				variant: variant,
			},
			next: {
				tags: ["cart", "order"],
			},
		});
		revalidateTag("cart");
	} catch (err) {
		throw new Error("removeItemFromCart failed");
	}
};

export const deleteItem = async ({
	variant,
	cartId,
	productId,
}: {
	variant: VariantEnum;
	cartId: string;
	productId: string;
}) => {
	console.log("deleting item from cart");
	await queryGraphql({
		query: OrderDeleteAllFromDocument,
		variables: {
			from: cartId,
			product: productId,
			variant: variant,
		},
		next: {
			tags: ["cart", "order"],
		},
	});
	revalidateTag("cart");
	console.log("deleted");
};
