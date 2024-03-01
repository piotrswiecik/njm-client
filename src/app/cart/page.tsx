import { getOrCreateCart } from "@/api/cart";
import CartItemCard from "@/ui/components/CartItemCard";

const CartPage = async () => {
	const cart = await getOrCreateCart();
	if (!cart) {
		throw new Error("Failed to get or create cart");
	}
	console.log(cart);

	if (!cart.orderItems || cart.orderItems.length === 0) {
		return <>empty cart page</>;
	}

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
		</>
	);
};

export default CartPage;
