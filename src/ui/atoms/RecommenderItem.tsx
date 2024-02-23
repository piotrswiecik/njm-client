import { type ProductRecommendationDto } from "@/api/models";

const RecommenderItem = ({ product }: { product: ProductRecommendationDto }) => {
	return (
		<div className="flex flex-col">
			<h2 className="order-2">{product.title}</h2>
			<p className="order-3 text-slate-600">{product.artist.name}</p>
			<img
				className="order-1 aspect-square transition-all duration-300 group-hover:opacity-75 sm:max-w-[200px]"
				src={product.coverImageUrl}
				alt={product.title}
			/>
		</div>
	);
};

export default RecommenderItem;
