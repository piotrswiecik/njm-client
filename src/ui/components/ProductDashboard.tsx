import { type ProductOverview } from "@/api/getProducts";
import ProductListItemCard from "@/ui/components/ProductListItemCard";

type ProductDashboardProps = {
	products: ProductOverview[];
};

const ProductDashboard = async ({ products }: ProductDashboardProps) => {
	return (
		<ul
			data-testid="products-list"
			className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
		>
			{products.map((product) => (
				<ProductListItemCard key={product.id} product={product} />
			))}
		</ul>
	);
};

export default ProductDashboard;
