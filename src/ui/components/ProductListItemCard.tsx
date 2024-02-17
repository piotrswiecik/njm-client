import Link from "next/link";
import type { Product } from "@/app/models";
import ProductImage from "@/ui/atoms/ProductImage";
import ProductListInfo from "@/ui/atoms/ProductListInfo";

type ProductCardProps = {
	product: Product;
};

const ProductListItemCard = ({ product }: ProductCardProps) => {
	return (
		<>
			<li className="group relative list-none">
				<div className="">
					<Link href={`/product/${product.id}`}>
						<ProductImage url={product.image} alt={product.title} />
						<ProductListInfo product={product} />
					</Link>
				</div>
			</li>
		</>
	);
};

export default ProductListItemCard;
