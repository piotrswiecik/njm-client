import type { TProduct } from "@/app/models";
import { formatPrice } from "@/utils/utils";

type ProductInfoProps = {
	product: TProduct;
};

const ProductInfo = ({ product }: ProductInfoProps) => {
	return (
		<div className="mt-4 flex justify-between">
			<div>
				<h3 className="text-sm text-gray-700">
					<a href="#">
						<span aria-hidden="true" className="absolute inset-0" />
						{product.title}
					</a>
				</h3>
				<p className="mt-1 text-sm text-gray-500">{product.description}</p>
			</div>
			<p className="text-sm font-medium text-gray-900">
				{formatPrice(product.price)}
			</p>
		</div>
	);
};

export default ProductInfo;