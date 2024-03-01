"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import {
	type VariantEnum,
	type OrderItemDetailsFragment,
} from "@/graphql/generated/graphql";
import { deleteItem } from "@/api/cart";

type CartItemRemoveButtonProps = {
	item: OrderItemDetailsFragment;
	cartId: string;
};

const CartItemRemoveButton = ({ item, cartId }: CartItemRemoveButtonProps) => {
	const [isPending, startTransition] = useTransition();
  const router = useRouter();

	const handleClick = () => {
		startTransition(async () => {
			await deleteItem({
				variant: item.variant.name as VariantEnum,
				cartId,
				productId: item.variant.product.id,
			});
      router.refresh();
		});
		console.log("deleted");
	};

	return (
		<button onClick={handleClick} disabled={isPending}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth="1.5"
				stroke="currentColor"
				className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M6 18L18 6M6 6l12 12"
				/>
			</svg>
		</button>
	);
};

export default CartItemRemoveButton;
