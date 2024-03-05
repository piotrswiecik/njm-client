import Stripe from "stripe";
import { revalidateTag } from "next/cache";
import { getOrderById } from "@/api/cart";
import {
	type StatusEnum,
	type OrderDetailsFragment,
} from "@/graphql/generated/graphql";
import { setOrderStatus } from "@/api/queries/setOrderStatus";

const OrderSuccessPage = async ({
	searchParams,
}: {
	searchParams: { session_id: string };
}) => {
	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Stripe setup error - no STRIPE_SECRET_KEY found");
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-10-16",
		typescript: true,
	});

	const stripeCheckoutSession = await stripe.checkout.sessions.retrieve(
		searchParams.session_id,
	);

	if (
		!stripeCheckoutSession ||
		stripeCheckoutSession.object !== "checkout.session"
	) {
		throw new Error("Invalid stripe session");
	}

	let orderDetails: OrderDetailsFragment | null = null;
	if (stripeCheckoutSession.metadata?.orderId) {
		orderDetails = await getOrderById(stripeCheckoutSession.metadata?.orderId);
		let status: StatusEnum = "CART";
		switch (stripeCheckoutSession.payment_status) {
			case "paid":
				status = "AWAIT_SHIP" as StatusEnum;
				break;
			// TODO: handle other statuses later as needed
			default:
				status = "CART" as StatusEnum;
		}
		await setOrderStatus({
			id: stripeCheckoutSession.metadata?.orderId,
			status: status,
		});
		revalidateTag("cart");
	}

	const ccy = stripeCheckoutSession.currency?.toUpperCase() || "USD";

	return (
		<>
			<div className="flex flex-col">
				<h1>Thank you for your order! It will be on its way soon!</h1>
				<div className="flex flex-col rounded-lg bg-slate-50 shadow-sm">
					<h2>Order summary:</h2>
					<div className="flex flex-row">
						<div>
							Payment status:{" "}
							{stripeCheckoutSession.payment_status.toUpperCase()}
						</div>
						<div>Placeholder for shipping data</div>
					</div>
					<div>
						<ul>
							<li>
								Subtotal: {stripeCheckoutSession.amount_subtotal} {ccy}
							</li>
							<li>
								Shipping:{" "}
								{stripeCheckoutSession.shipping_cost?.amount_total || 0} {ccy}
							</li>
							<li>
								Total: {stripeCheckoutSession.amount_total} {ccy}
							</li>
						</ul>
					</div>
					{orderDetails && (
						<div>
							<h3>Items:</h3>
							<ul>
								{orderDetails.orderItems?.map((item) => (
									<li key={item.id}>
										{item.quantity} x {item.variant.product.title}
									</li>
								))}
							</ul>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default OrderSuccessPage;
