import { type ProductDetailsDto } from "@/api/models";
import ProductInfoPanel from "@/ui/atoms/ProductDetailsInfo";
import ProductImage from "@/ui/atoms/ProductImage";

const ProductDetails = async ({ product }: { product: ProductDetailsDto }) => {
	return (
		<div className="mx-auto max-w-7xl px-6 sm:px-12">
			<div className="flex flex-col sm:flex-row justify-start">
				<div className="sm:max-h-96 sm:max-w-96 m-0 sm:mr-8">
					<ProductImage url={product.image.url} alt={"temp"} />
				</div>
				<div className="m-8 flex flex-col sm:m-0 sm:w-5/12">
					<div className="my-2">
						<ProductInfoPanel product={product} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
