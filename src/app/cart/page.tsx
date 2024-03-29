import { redirect } from "next/navigation";
import { getCart } from "@/api/cart";
import { getCurrentDbUser } from "@/lib/user";
import { formatPrice } from "@/lib/utils";
import OrderSubmitButton from "@/ui/atoms/OrderSubmitButton";
import CartItemCard from "@/ui/molecules/CartItemCard";

const CartPage = async () => {
	const cart = await getCart();
	if (!cart) {
		redirect("/");
	}

	if (!cart.orderItems || cart.orderItems.length === 0) {
		redirect("/");
	}

	const activeUser = await getCurrentDbUser();
	const orderTotal = cart.total || 0;

	// TODO: more detailed checks on user entity
	// & the order total condition is probably redundant
	const orderDisabled = !activeUser || orderTotal === 0;

	return (
		<>
			{cart.orderItems
				.sort(
					(a, b) => b.quantity * b.variant.price - a.quantity * a.variant.price,
				)
				.map((item) => {
					if (!item.variant.product) return null;
					return (
						<CartItemCard key={item.variant.id} item={item} cartId={cart.id} />
					);
				})}
			<div className="flex flex-row justify-end">
				<div className="px-4">
					<span className="px-1 text-lg font-bold">Total: </span>
					<span>{formatPrice(cart.total || 0)}</span>
				</div>
			</div>
			<div className="flex flex-row justify-end">
				<div className="py-4">
					<span>
						<OrderSubmitButton order={cart} isDisabled={orderDisabled} />
					</span>
				</div>
			</div>
		</>
	);
};

export default CartPage;
