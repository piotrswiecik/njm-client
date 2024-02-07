import type { Product } from "@/app/models";

type ProductInfoProps = {
	product: Product;
};

export const ProductInfo = ({ product }: ProductInfoProps) => {
	return (
		<div className="mt-4 flex justify-between">
			<div>
				<h3 className="text-sm text-gray-700">
					<a href="#">
						<span aria-hidden="true" className="absolute inset-0" />
						{product.name}
					</a>
				</h3>
				<p className="mt-1 text-sm text-gray-500">{product.description}</p>
			</div>
			<p className="text-sm font-medium text-gray-900">{product.price}</p>
		</div>
	);
};
