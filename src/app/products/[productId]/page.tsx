import { productService } from "@/api/product.service";
import ProductImage from "@/ui/atoms/ProductImage";
import ProductDetails from "@/ui/atoms/ProductDetails";
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
				<div className="sm:max-w-96 sm:max-h-96">
					<ProductImage url={product.image} alt={product.title} />
				</div>
				<div>
					<ProductDetailsHeader name={product.title} />
					<ProductDetails product={product} />
				</div>
			</div>
		</div>
		// <div className="flex flex-col sm:flex-row">
		// 	{/* product details header */}
		// 	{/* product image */}
		// 	{/* product details content */}
		// 	<div className="max-w-96 max-h-96">
		// 		<ProductImage url={product.image} alt={product.title} />
		// 	</div>
		// 	<div className="flex flex-col my-4 sm:m-0 sm:mx-4">
		// 		<ProductDetailsHeader name={product.title} />
		// 		<ProductDetails product={product} />
		// 	</div>
		// </div>
	);
};

export default ProductDetailsPage;
