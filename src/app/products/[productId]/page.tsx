import ProductDetailsCard from "@/ui/components/ProductDetailsCard";
import { productService } from "@/api/product.service";

const ProductDetailsPage = async ({
	params,
}: {
	params: { productId: string };
}) => {
	// TODO unhandled err thrown by service layer
	const product = await productService.getProductById(params.productId);
	return (
		<div>
			<h1>Product Details</h1>
			<ProductDetailsCard product={product} />
		</div>
	);
};

export default ProductDetailsPage;
