import { type NextRequest } from "next/server";
import Stripe from "stripe";
import { setOrderStatus } from "@/api/mutations/setOrderStatus";

// TODO: do this properly, maybe with stripe-event-types lib
type StripePayload = {
	id: string;
	payment_status: string;
	metadata?: {
		orderId?: string;
		userId?: string;
	};
};

export async function POST(request: NextRequest): Promise<Response> {
	if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_WEBHOOK_SECRET) {
		return new Response(null, { status: 500 });
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-10-16",
		typescript: true,
	});

	const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

	const sig = request.headers.get("stripe-signature");

	if (!sig) {
		return new Response(null, { status: 400 });
	}

	let event;
	try {
		event = stripe.webhooks.constructEvent(
			await request.text(),
			sig,
			endpointSecret,
		);
	} catch (err) {
		return new Response(null, { status: 400 });
	}

	console.log("event:");
	console.log(event);

	if (event.object === "event") {
		const payload = event.data.object as StripePayload; // FIXME: hack!
		console.log("payload:");
		console.log(payload);

    if (!payload.metadata?.orderId) {
      // TODO: handle error
      return new Response(null, { status: 400 });
    }

		await setOrderStatus({
			id: payload.metadata.orderId,
			status: payload.payment_status === "paid" ? "AWAIT_SHIP" : "CART",
		});

		return new Response(null, { status: 200 });
	}

	return new Response(null, { status: 200 });
}
