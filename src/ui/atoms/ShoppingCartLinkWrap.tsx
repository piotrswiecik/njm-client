import { getCart } from "@/api/cart";
import ShoppingCartLink from "@/ui/atoms/ShoppingCartLink";

const ShoppingCartLinkWrap = async () => {
	const cart = await getCart();
	const itemsTotal = cart?.orderItems?.reduce(
		(acc, item) => acc + item.quantity,
		0,
	) || 0;
	return (
		<>
    <div className="px-1">

    {<span className="text-xs bg-slate-400 text-slate-100 rounded-full px-2 py-1">{itemsTotal}</span>}
    </div>
			<ShoppingCartLink />
		</>
	);
};

export default ShoppingCartLinkWrap;
