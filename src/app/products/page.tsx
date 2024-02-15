import { productService } from "@/api/product.service";
import ProductDashboard from "@/ui/components/ProductDashboard";

const ProductsPage = async () => {
	const products = await productService.getAllProducts();  // TODO unhandled err thrown by service layer

	return (
		<div className="flex min-h-screen w-full flex-col items-center justify-between">
			<ProductDashboard products={products}/>
		</div>
	);
};

export default ProductsPage;
