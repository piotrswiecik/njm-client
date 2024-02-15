import ProductDetailsCard from "@/ui/components/ProductDetailsCard";
import { productService } from "@/api/product.service";

const ProductDetailsPage = async () => {
		const product = await productService.getProductById("1"); // TODO unhandled err thrown by service layer
	return (
		<div>
			<h1>Product Details</h1>
			<ProductDetailsCard product={product}/>
		</div>
	);
}

export default ProductDetailsPage;
