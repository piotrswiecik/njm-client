import type { Product } from "@/app/models";
import { ProductImage } from "@/ui/atoms/ProductImage";
import { ProductInfo } from "@/ui/atoms/ProductInfo";

type ProductCardProps = {
	product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
	return (
		<>
			<li className="list-none group relative">
				<ProductImage coverImage={product.coverImage} />
				<ProductInfo product={product} />
			</li>
		</>
	);
};
