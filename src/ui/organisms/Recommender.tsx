import Link from "next/link";
import RecommenderItem from "@/ui/atoms/RecommenderItem";
import { getRecommendationsForUser } from "@/lib/recommender";
import { getProductRange } from "@/api/queries/getProductRange";

type RecommenderComponentProps = {
	leadText?: string;
};

const RecommenderComponent = async ({
	leadText,
}: RecommenderComponentProps) => {
	// TODO: if user is anonymous, generate recommendations based on product
	const recommendedIds = await getRecommendationsForUser();
	const recommendedProducts = await getProductRange(recommendedIds);

	return (
		<section data-testid="related-products">
			<h2 className="mb-2 text-xl font-bold">
				{leadText ? leadText : "You might also like:"}
			</h2>
			<ul
				className="grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1"
				data-testid="products-list"
			>
				{recommendedProducts.map((product) => (
					<li
						key={product.id}
						className="group relative inline-block list-none sm:p-2"
					>
						<Link href={`/product/${product.id}`}>
							<RecommenderItem product={product} />
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
};

export default RecommenderComponent;
