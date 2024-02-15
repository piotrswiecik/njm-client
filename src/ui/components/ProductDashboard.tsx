import { productService } from "@/api/product.service";
import ProductListItemCard from "@/ui/components/ProductListItemCard";

export default async function ProductDashboard() {
	const products = await productService.getAllProducts();

	return (
		<ul
			data-testid="products-list"
			className="grid grid-cols-1 gap-x-6 gap-y-10 p-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
		>
			{products.map((product) => (
				<ProductListItemCard key={product.id} product={product} />
			))}
		</ul>
	);
}
