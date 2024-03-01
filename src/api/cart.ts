"use server";

import { cookies } from "next/headers";
import { queryGraphql } from "@/api/queryGraphql";
import {
	OrderAddToDocument,
	OrderCreateDocument,
	type OrderDetailsFragment,
	OrderGetByIdDocument,
	type VariantEnum,
	type DefaultOrderResponse,
	OrderRemoveFromDocument,
	OrderDeleteAllFromDocument,
} from "@/graphql/generated/graphql";

/**
 * Try to fetch existing cart by cookie id via graphql query.
 * @param cartId cart id stored as client side cookie.
 * @returns
 */
export const getCart = async (
	cartId: string,
): Promise<OrderDetailsFragment | null> => {
	try {
		const { order } = await queryGraphql({
			query: OrderGetByIdDocument,
			variables: {
				orderId: cartId,
			},
			next: {
				tags: ["cart", "order"],
			},
		});
		if (!order) {
			return null;
		}
		return { ...order, orderItems: order.orderItems ? order.orderItems : [] };
		// FIXME: no error boundary set for this
	} catch (err) {
		throw new Error("Failed to get cart");
	}
};

/**
 * Create a new cart via graphql mutation.
 */
const createCart = async (): Promise<DefaultOrderResponse> => {
	try {
		// FIXME: no error boundary set for this
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
		return {
			id: createOrder.id,
		};
	} catch (err) {
		throw new Error("Failed to create cart");
	}
};

/**
 * Get existing cart from backend based on cookie id or create a new cart and set cookie.
 */
export const getOrCreateCart = async (): Promise<OrderDetailsFragment> => {
	const cartId = cookies().get("cartId")?.value;
	if (cartId) {
		const cart = await getCart(cartId);
		if (cart) {
			console.log(`cart found & fetched: ${cart.id}`);
			return cart;
		}
	}

	const { id: newCartId } = await createCart();
	if (!newCartId) {
		// FIXME: no error boundary set for this
		throw new Error("Failed to create cart");
	}
	cookies().set("cartId", newCartId);
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
	await new Promise((resolve) => setTimeout(resolve, 1000));

	const cart = await getOrCreateCart();

	if (!cart) {
		// TODO: set error boundary
		throw new Error("Failed to get or create cart");
	}

	console.log("ok got cart");
	console.log(cart);

	console.log(`product to be added: ${id}, variant: ${variant}`);

	// this can be used by app / local storage to reconcile and sync cart state with server
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
	} catch (err) {
		// TODO: set error boundary
		throw new Error("Failed to add item to cart");
	}
};

/**
 * Remove item from existing cart via graphql mutation.
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
	await new Promise((resolve) => setTimeout(resolve, 1000));
	try {
		console.log("removing item from cart");
		console.log(`fetching cart: ${cartId}	`);
		const cart = await getCart(cartId);
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
	console.log("deleted");
};
