import { type ProductDashboardItemDto } from "@/api/models";
import ProductDetailsHeader from "@/ui/atoms/ProductDetailsHeader";
import ProductDetailsInfo from "@/ui/atoms/ProductDetailsInfo";
import ProductImage from "@/ui/atoms/ProductImage";

const ProductDetails = async ({
	product,
}: {
	product: ProductDashboardItemDto;
}) => {
	return (
		<div className="mx-auto max-w-7xl px-6 sm:px-12">
			<div className="flex flex-col sm:flex-row">
				<div className="sm:max-h-96 sm:max-w-96">
					<ProductImage url={product.image} alt={product.title} />
				</div>
				<div className="m-8 flex flex-col sm:m-0 sm:mx-8 sm:max-w-lg">
					<div className="">
						<ProductDetailsHeader name={product.title} />
					</div>
					<div className="my-2">
						<ProductDetailsInfo product={product} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
