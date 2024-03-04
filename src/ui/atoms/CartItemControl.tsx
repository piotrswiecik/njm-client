"use client";

import { useOptimistic, useState } from "react";
import { addOrIncreaseItem, decreaseItem } from "@/api/cart";
import {
	type OrderItemDetailsFragment,
	type VariantEnum,
} from "@/graphql/generated/graphql";

type CartItemQtyProps = {
	item: OrderItemDetailsFragment;
	cartId: string;
};

const CartItemControl = ({ item, cartId }: CartItemQtyProps) => {
	const [opType, setOpType] = useState("increment");
	const [optimisticQty, setOptimisticQty] = useOptimistic(
		item.quantity,
		(_state, newQty: number) => newQty,
	);

	const handleChange = async () => {
		console.log(opType);
		if (opType === "increment") {
			setOptimisticQty(optimisticQty + 1);
			await addOrIncreaseItem({
				variant: item.variant.name as VariantEnum,
				id: item.variant.product.id,
			});
		} else {
			if (item.quantity === 1) return;
			setOptimisticQty(optimisticQty - 1);
			await decreaseItem({
				variant: item.variant.name as VariantEnum,
				cartId,
				productId: item.variant.product.id,
			});
		}
	};

	return (
		<form action={handleChange}>
			<div className="flex items-center border-slate-100">
				<button
					className={`rounded-l bg-slate-200 px-3.5 py-1 duration-100 hover:bg-slate-400 hover:text-slate-50`}
					data-testid="decrement"
					type="submit"
					onClick={() => setOpType("decrement")}
				>
					{" "}
					-{" "}
				</button>
				<div
					className="flex h-8 w-8 flex-col justify-center border bg-white text-center text-xs outline-none"
					data-testid="quantity"
				>
					<span>{optimisticQty}</span>
				</div>
				<button
					className={`rounded-r bg-slate-200 px-3.5 py-1 duration-100 hover:bg-slate-400 hover:text-slate-50`}
					data-testid="increment"
					type="submit"
					name="increment"
					value="increment"
					onClick={() => setOpType("increment")}
				>
					{" "}
					+{" "}
				</button>
			</div>
		</form>
	);
};

export default CartItemControl;
