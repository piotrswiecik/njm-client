import { cookies } from "next/headers";
import { queryGraphql } from "@/api/queryGraphql";
import {
	OrderAddToDocument,
	OrderCreateDocument,
	type OrderDetailsFragment,
	OrderGetByIdDocument,
	type VariantEnum,
} from "@/graphql/generated/graphql";

/**
 * Try to fetch existing cart by cookie id via graphql query.
 * @param cartId cart id stored as client side cookie.
 * @returns
 */
const getCart = async (cartId: string) => {
	"use server";
	try {
		const { order } = await queryGraphql(OrderGetByIdDocument, {
			orderId: cartId,
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
const createCart = async () => {
	"use server";
	try {
		// FIXME: no error boundary set for this
		const { createOrder } = await queryGraphql(OrderCreateDocument, {
			// FIXME: hardcoded for testing
			userId: "dbe0705a-87d0-4c11-9432-f55895360016",
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
const getOrCreateCart = async () => {
	"use server";

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
	};
};

/**
 * Main action to add item to cart via graphql mutation.
 * @param data product id and variant name received from React form.
 */
export const addItemToCart = async (data: FormData) => {
	"use server";
	const formVariant = data.get("variant") as string | null;
	if (!formVariant) {
		// TODO: handle this in ui
		throw new Error("No variant selected");
	}

	const formProductId = data.get("productId") as string | null;
	if (!formProductId) {
		// TODO: handle this in ui
		throw new Error("Missing product id");
	}

	const cart = await getOrCreateCart();

	if (!cart) {
		// TODO: set error boundary
		throw new Error("Failed to get or create cart");
	}

	console.log("ok got cart");
	console.log(cart);

	console.log(`product to be added: ${formProductId}, variant: ${formVariant}`);

	// this can be used by app / local storage to reconcile and sync cart state with server
	try {
		const { addToOrder }: { addToOrder: OrderDetailsFragment } =
			await queryGraphql(OrderAddToDocument, {
				to: cart.id,
				product: formProductId,
				// TODO: maybe some form of validation later on
				variant: formVariant as VariantEnum,
			});
		console.log("ok, added to cart");
		console.log(addToOrder);
	} catch (err) {
		// TODO: set error boundary
		throw new Error("Failed to add item to cart");
	}
};
