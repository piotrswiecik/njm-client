import type { Product } from "@/app/models";
import { ProductCard } from "@/ui/molecules/ProductCard";

type ProductDashboardProps = {
	products: Product[];
};

export const ProductDashboard = ({ products }: ProductDashboardProps) => {
	return (
		<div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 p-8">
			{products.map((product) => (
				<ProductCard key={product.id} product={product}/>
			))}
		</div>
	);
};
