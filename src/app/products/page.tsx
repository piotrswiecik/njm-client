import { productService } from "@/api/product.service";
import ProductDashboard from "@/ui/components/ProductDashboard";

const ProductsPage = async () => {
	const products = await productService.getAllProducts(); // TODO unhandled err thrown by service layer

	return (
		<div className="mx-auto max-w-7xl px-6 sm:px-12">
			<ProductDashboard products={products} />
		</div>
	);
};

export default ProductsPage;
