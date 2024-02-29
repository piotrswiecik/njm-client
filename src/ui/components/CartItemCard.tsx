import Image from "next/image";
import { formatPrice } from "@/utils/utils";
import { type OrderItemDetailsFragment } from "@/graphql/generated/graphql";
import CartItemQty from "@/ui/atoms/CartItemQty";

export type CartItemCardProps = {
	item: OrderItemDetailsFragment;
	cartId: string;
};

const CartItemCard = ({ item, cartId }: CartItemCardProps) => {
	return (
		<>
			<div className="mb-6 justify-between rounded-lg bg-slate-50 p-6 shadow-md sm:flex sm:justify-start">
				<Image
					src={item.variant.product.coverImageUrl}
					alt={`order-item-${item.id}-cover-image`}
					className="w-full rounded-lg sm:w-40"
					width={160}
					height={160}
				/>
				<div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
					<div className="mt-5 sm:mt-0">
						<h2 className="text-xl font-bold text-slate-900">
							{item.variant.product.title}
						</h2>
						<p className="mt-1 italic text-slate-600">
							{item.variant.product.artist.name}
						</p>
						<p className="mt-2">{item.variant.name.toUpperCase()}</p>
					</div>

					<div className="mt-4 flex justify-between sm:mt-0 sm:block sm:space-y-6">
						<CartItemQty item={item} cartId={cartId} />

						<div className="flex items-end space-x-4 sm:justify-end">
							<p className="m-0 p-0 text-sm">
								{formatPrice(item.variant.price * item.quantity)}
							</p>
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
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CartItemCard;
