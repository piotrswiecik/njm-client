import Link from "next/link";
import ProductImage from "@/ui/atoms/ProductImage";
import ProductListInfo from "@/ui/atoms/ProductListInfo";
import { type ProductOverview } from "@/api/getProducts";

type ProductCardProps = {
	product: ProductOverview;
};

const ProductListItemCard = ({ product }: ProductCardProps) => {
	return (
		<>
			<li className="group relative list-none">
				<div className="">
					<Link href={`/product/${product.id}`}>
						<ProductImage url={product.coverImageUrl} alt={product.title} />
						<ProductListInfo product={product} />
					</Link>
				</div>
			</li>
		</>
	);
};

export default ProductListItemCard;
