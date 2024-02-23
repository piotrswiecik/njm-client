import { type ProductOverviewFragment } from "@/graphql/generated/graphql";
import { formatPrice, getBasicVariantPrice } from "@/utils/utils";

type ProductInfoProps = {
	product: ProductOverviewFragment;
};

const ProductListInfo = ({ product }: ProductInfoProps) => {
	return (
		<div className="mt-4 flex justify-between">
			<div>
				<h3 className="text-sm text-gray-700">
					<span aria-hidden="true" className="absolute inset-0" />
					{product.title}
				</h3>
				<p className="mt-1 text-sm text-gray-500">{product.artist.name}</p>
			</div>
			<div className="ml-6 text-sm font-medium text-gray-900">
				{formatPrice(getBasicVariantPrice(product))}
			</div>
		</div>
	);
};

export default ProductListInfo;
