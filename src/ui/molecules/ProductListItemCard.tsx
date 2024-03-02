import Link from "next/link";
import ProductImage from "@/ui/atoms/ProductImage";
import ProductListInfo from "@/ui/atoms/ProductListInfo";
import { type ProductOverviewFragment } from "@/graphql/generated/graphql";

const ProductListItemCard = ({
	product,
}: {
	product: ProductOverviewFragment;
}) => {
	return (
		<>
			<li className="group relative list-none">
				<div className="h-full">
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
