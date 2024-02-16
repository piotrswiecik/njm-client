import { productService } from "@/api/product.service";
import ProductImage from "@/ui/atoms/ProductImage";
import ProductDetailsInfo from "@/ui/atoms/ProductDetailsInfo";
import ProductDetailsHeader from "@/ui/atoms/ProductDetailsHeader";

const ProductDetailsPage = async ({
	params,
}: {
	params: { productId: string };
}) => {
	// TODO unhandled err thrown by service layer
	const product = await productService.getProductById(params.productId);
	return (
		<div className="mx-auto max-w-7xl px-6 sm:px-12">
			<div className="flex flex-col sm:flex-row">
				<div className="sm:max-h-96 sm:max-w-96">
					<ProductImage url={product.image} alt={product.title} />
				</div>
				<div className="m-8 flex flex-col sm:m-0 sm:mx-8">
					<ProductDetailsHeader name={product.title} />
					<ProductDetailsInfo product={product} />
				</div>
			</div>
		</div>
	);
};

export default ProductDetailsPage;
