import { getCart } from "@/api/cart";
import { formatPrice } from "@/lib/utils";
import CartItemCard from "@/ui/molecules/CartItemCard";

const CartPage = async () => { 
	const cart = await getCart();
	if (!cart) {
		return <>empty cart page</>;
	}

	if (!cart.orderItems || cart.orderItems.length === 0) {
		return <>empty cart page</>;
	}

	const total = cart.orderItems.reduce(
		(acc, item) => acc + item.quantity * item.variant.price,
		0,
	);

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
					<span className="text-lg font-bold px-1">Total: </span>
					<span>{formatPrice(total)}</span>
				</div>
			</div>
		</>
	);
};

export default CartPage;
