import { productService } from "@/api/product.service";
import ProductDashboard from "@/ui/components/ProductDashboard";

export default async function HomePage() {
	// TODO implement home page
	const products = await productService.getAllProducts();  // TODO unhandled err thrown by service layer
	return (
		<div className="mx-auto max-w-7xl px-6 sm:px-12">
			<ProductDashboard products={products} />
		</div>
	);
}
