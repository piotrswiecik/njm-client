import Stripe from "stripe";
import { revalidateTag } from "next/cache";
import { getOrderById } from "@/api/cart";
import {
	type StatusEnum,
	type OrderDetailsFragment,
} from "@/graphql/generated/graphql";
import { setOrderStatus } from "@/api/mutations/setOrderStatus";
import OrderCard from "@/ui/molecules/OrderCard";

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

	const shipping = 0;
	const paymentStatus = stripeCheckoutSession.payment_status.toUpperCase();

	return (
		<>
			<div className="flex flex-col">
				<h1 className="mb-6 text-2xl font-bold">
					Thank you for your order! It will be on its way soon!
				</h1>
				<OrderCard
					orderDetails={orderDetails}
					subtotal={(stripeCheckoutSession.amount_subtotal || 0) / 100}
					shipping={shipping}
					total={(stripeCheckoutSession.amount_total || 0) / 100}
					paymentStatus={paymentStatus}
				/>
			</div>
		</>
	);
};

export default OrderSuccessPage;
