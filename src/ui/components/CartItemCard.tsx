import Image from "next/image";
import { formatPrice } from "@/utils/utils";
import { type ProductDetailsInVariantFragment } from "@/graphql/generated/graphql";

export type CartItemCardProps = {
	quantity: number;
	product: ProductDetailsInVariantFragment;
	price: number;
	variant: string;
};

const CartItemCard = ({
	quantity,
	product,
	price,
	variant,
}: CartItemCardProps) => {
	return (
		<>
			<div className="mb-6 justify-between rounded-lg bg-slate-50 p-6 shadow-md sm:flex sm:justify-start">
				<Image
					src={product.coverImageUrl}
					alt="product-image"
					className="w-full rounded-lg sm:w-40"
					width={160}
					height={160}
				/>
				<div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
					<div className="mt-5 sm:mt-0">
						<h2 className="text-xl font-bold text-slate-900">
							{product.title}
						</h2>
						<p className="mt-1 italic text-slate-600">{product.artist.name}</p>
						<p className="mt-2">{variant.toUpperCase()}</p>
					</div>
					<div className="mt-4 flex justify-between sm:mt-0 sm:block sm:space-x-6 sm:space-y-6">
						<div className="flex items-center space-x-4">
							<p className="text-sm">{formatPrice(price)}</p>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
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
