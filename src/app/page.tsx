import { productService } from "@/api/product.service";
import ProductDashboard from "@/ui/components/ProductDashboard";

export default async function HomePage() {
	// TODO implement home page
	const products = await productService.getAllProducts();  // TODO unhandled err thrown by service layer
	return (
		<div className="flex min-h-screen w-full flex-col items-center justify-between">
			<ProductDashboard products={products}/>
		</div>
	);
}
