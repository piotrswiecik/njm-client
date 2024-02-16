import { productService } from "@/api/product.service";
import ProductDetails from "@/ui/components/ProductDetails";

const ProductDetailsPage = async ({
	params,
}: {
	params: { productId: string };
}) => {
	// TODO unhandled err thrown by service layer
	const product = await productService.getProductById(params.productId);
	return (
		<ProductDetails product={product}/>
	);
};

export default ProductDetailsPage;
