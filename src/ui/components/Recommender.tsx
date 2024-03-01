import Link from "next/link";
import { getRecommendation } from "@/api/queries/getRecommendation";
import RecommenderItem from "@/ui/atoms/RecommenderItem";
import { type ProductOverviewFragment } from "@/graphql/generated/graphql";

// TODO: add general recommendation logic - without specific category
type RecommenderComponentProps = {
	categoryName: string;
	leadText?: string;
};

const RecommenderComponent = async ({
	categoryName,
	leadText,
}: RecommenderComponentProps) => {
	// currently returns N products from same category
	const recommendedProducts: ProductOverviewFragment[] =
		await getRecommendation({ categoryName: categoryName }, 4);
	return (
		<section
			data-testid="related-products"
			className="sm:max-w-xl lg:max-w-5xl"
		>
			<h2 className="mb-2 font-bold xl:text-xl">
				{leadText ? leadText : "You might also like:"}
			</h2>
			<ul className="grid grid-cols-1 grid-rows-4 sm:max-w-[300] sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1">
				{recommendedProducts.map((product) => (
					<li
						key={product.id}
						className="group relative inline-block max-w-[200px] list-none pr-2"
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
