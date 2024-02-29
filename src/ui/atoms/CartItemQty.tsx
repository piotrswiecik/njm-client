"use client";

import { addItemToCart, removeItemFromCart } from "@/api/cart";
import {
	type OrderItemDetailsFragment,
	type VariantEnum,
} from "@/graphql/generated/graphql";

type CartItemQtyProps = {
	item: OrderItemDetailsFragment;
	cartId: string;
};

const CartItemQty = ({ item, cartId }: CartItemQtyProps) => {
	return (
		<div className="flex items-center border-slate-100">
			<button
				className="cursor-pointer rounded-l bg-gray-100 px-3.5 py-1 duration-100 hover:bg-blue-500 hover:text-blue-50"
				onClick={() =>
					removeItemFromCart({
						variant: item.variant.name as VariantEnum,
						cartId,
						productId: item.variant.product.id,
					})
				}
			>
				{" "}
				-{" "}
			</button>
			<input
				className="h-8 w-8 border bg-white text-center text-xs outline-none"
				type="text"
				readOnly
				value={item.quantity}
			/>
			<button
				className="cursor-pointer rounded-r bg-gray-100 px-3 py-1 duration-100 hover:bg-blue-500 hover:text-blue-50"
				onClick={() =>
					addItemToCart({
						variant: item.variant.name as VariantEnum,
						id: item.variant.product.id,
					})
				}
			>
				{" "}
				+{" "}
			</button>
		</div>
	);
};

export default CartItemQty;
