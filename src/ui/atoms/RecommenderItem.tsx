import Image from "next/image";
import { type ProductOverviewFragment } from "@/graphql/generated/graphql";

const RecommenderItem = ({ product }: { product: ProductOverviewFragment }) => {
	return (
		<div className="flex flex-col">
			<h2 className="order-2">{product.title}</h2>
			<p className="order-3 text-slate-600">{product.artist.name}</p>
			<Image
				className="order-1 aspect-square transition-all duration-300 group-hover:opacity-75"
				src={product.coverImageUrl}
				alt={product.title}
				width={600}
				height={600}
			/>
		</div>
	);
};

export default RecommenderItem;
