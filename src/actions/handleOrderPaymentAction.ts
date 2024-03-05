"use server";

import { redirect } from "next/navigation";
import Stripe from "stripe";
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
	console.log("Order payment action");
	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Stripe setup error - no STRIPE_SECRET_KEY found");
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
		cancel_url: "http://localhost:3000/cart/cancelled",
		success_url: `http://localhost:3000/cart/success?session_id={CHECKOUT_SESSION_ID}`,
	});

	if (session.url) {
		redirect(session.url);
	}
};
