"use client";

import { useTransition } from "react";
import { addItemToCart, removeItemFromCart } from "@/api/cart";
import {
	type OrderItemDetailsFragment,
	type VariantEnum,
} from "@/graphql/generated/graphql";

type CartItemQtyProps = {
	item: OrderItemDetailsFragment;
	cartId: string;
};

const CartItemControl = ({ item, cartId }: CartItemQtyProps) => {
	// useTransition required to call server action outside of form
	const [isPending, startTransition] = useTransition();

	console.log(`ispending ${isPending}`);

	const handleIncrement = () => {
		startTransition(async () => {
			await addItemToCart({
				variant: item.variant.name as VariantEnum,
				id: item.variant.product.id,
			});
		});
	};

	const handleDecrement = () => {
		startTransition(async () => {
			await removeItemFromCart({
				variant: item.variant.name as VariantEnum,
				cartId,
				productId: item.variant.product.id,
			});
		});
	};

	return (
		<div className="flex items-center border-slate-100">
			<button
				disabled={isPending}
				className={`${!isPending ? "cursor-pointer" : "cursor-progress bg-slate-200 text-slate-50 hover:bg-slate-200 hover:text-slate-50"} rounded-l bg-slate-200 px-3.5 py-1 duration-100 hover:bg-slate-400 hover:text-slate-50`}
				onClick={handleDecrement}
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
				disabled={isPending}
				className={` ${!isPending ? "cursor-pointer " : "cursor-progress bg-slate-200 text-slate-50 hover:bg-slate-200 hover:text-slate-50"} cursor-pointer rounded-r bg-slate-200 px-3 py-1 duration-100 hover:bg-slate-400 hover:text-slate-50`}
				onClick={() => handleIncrement()}
			>
				{" "}
				+{" "}
			</button>
		</div>
	);
};

export default CartItemControl;
