import { getRecommendation } from "@/api/getRecommendation";
import { type ProductRecommendationDto } from "@/api/models";
import RecommenderItem from "@/ui/atoms/RecommenderItem";
import Link from "next/link";

type RecommenderComponentProps = {
	categoryName: string;
};

const RecommenderComponent = async ({
	categoryName,
}: RecommenderComponentProps) => {
	// currently returns N products from same category
	const recommendedProducts: ProductRecommendationDto[] =
		await getRecommendation({ categoryName: categoryName }, 5);
	return (
		<section>
			<h2 className="text-xl font-bold">You might also like:</h2>
			<ul className="flex flex-col flex-wrap sm:flex-row justify-around py-4">
				{recommendedProducts.map((product) => (
					<li key={product.id} className="group relative list-none max-w-[200px]">
						<Link href={`/product/${product.id}`}>
						<RecommenderItem item={product} />
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
};

export default RecommenderComponent;
