import Link from "next/link";
import RecommenderItem from "@/ui/atoms/RecommenderItem";
import { getRecommendationsForUser } from "@/lib/recommender";
import { getProductRange } from "@/api/queries/getProductRange";
import { type ProductOverviewFragment } from "@/graphql/generated/graphql";
import { getProducts } from "@/api/queries/getProducts";

type RecommenderComponentProps = {
	leadText?: string;
};

const RecommenderComponent = async ({
	leadText,
}: RecommenderComponentProps) => {
	// TODO: if user is anonymous, generate recommendations based on product
	const recommendedIds = await getRecommendationsForUser();
	let recommendedProducts: ProductOverviewFragment[] = [];
	recommendedProducts = await getProductRange(recommendedIds);

	// if recommendation engine fails, just show some random products
	if (recommendedProducts.length < 4) {
		if (recommendedProducts.length === 0) {
			console.error(
				"recommendation engine empty or incomplete response - using fallback",
			);
		} else {
			console.log(
				"recommendation engine returned less than 4 products - using fallback",
			);
		}
		const fallbackProducts = await getProducts(
			4 - recommendedProducts.length,
			0,
		);
		recommendedProducts = recommendedProducts.concat(fallbackProducts);
	}

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
