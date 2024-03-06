import { getCart } from "@/api/cart";
import ShoppingCartLink from "@/ui/atoms/ShoppingCartLink";

const ShoppingCartLinkWrap = async () => {
	const cart = await getCart();
	const itemsTotal =
		cart?.orderItems?.reduce((acc, item) => acc + item.quantity, 0) || 0;
	return (
		<>
			<ShoppingCartLink />
			<div className="px-1">
				{
					<span className="rounded-full bg-slate-400 px-2 py-0.5 text-xs text-slate-100">
						{itemsTotal}
					</span>
				}
			</div>
		</>
	);
};

export default ShoppingCartLinkWrap;
