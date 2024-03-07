"use server";

import { redirect } from "next/navigation";
import Stripe from "stripe";
import { cookies } from "next/headers";
import { type OrderDetailsFragment } from "@/graphql/generated/graphql";

/**
 * Server action used to handle order payment.
 * @param order full representation of order content including nested user id.
 */
export const handleOrderPaymentAction = async ({
	order,
}: {
	order: OrderDetailsFragment;
}) => {
	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Stripe setup error - no STRIPE_SECRET_KEY found");
	}

	if (!process.env.STRIPE_CANCEL_URL || !process.env.STRIPE_SUCCESS_URL) {
		throw new Error("Stripe setup error - no STRIPE_CANCEL_URL or STRIPE_SUCCESS_URL found");
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-10-16",
		typescript: true,
	});

	// defensive - this shouldn't be theoretically possible because button is disabled for empty carts
	if (!order.orderItems) {
		throw new Error("Order has no items");
	}

	const session = await stripe.checkout.sessions.create({
		// any arbitrary data specific to this order
		metadata: {
			orderId: order.id,
			userId: order.user.id,
		},
		line_items: order.orderItems.map((item) => ({
			quantity: item.quantity,
			price_data: {
				currency: "usd",
				unit_amount: item.variant.price * 100,
				product_data: {
					name: `${item.variant.product.artist.name} - ${item.variant.product.title}`,
					description: `${item.variant.product.title} ${item.variant.name}`,
					images: [item.variant.product.coverImageUrl],
				},
			},
		})),
		mode: "payment",
		cancel_url: process.env.STRIPE_CANCEL_URL,
		success_url: `${process.env.STRIPE_SUCCESS_URL}`,
	});

	if (session.url) {
		cookies().set("cartId", "");
		redirect(session.url);
		// handling order status change in backend is handled by stripe webhook
	}
};
