import type { TProduct } from "@/app/models";
import ProductImage from "@/ui/atoms/ProductImage";
import ProductInfo from "@/ui/atoms/ProductInfo";

type ProductCardProps = {
	product: TProduct;
};

const ProductCard = ({ product }: ProductCardProps) => {
	return (
		<>
			<li className="group relative list-none">
				<ProductImage url={product.image} alt={product.title}/>
				<ProductInfo product={product} />
			</li>
		</>
	);
};

export default ProductCard;