import Link from "next/link";
import { getRecommendation } from "@/api/getRecommendation";
import RecommenderItem from "@/ui/atoms/RecommenderItem";
import { type ProductOverviewFragment } from "@/graphql/generated/graphql";

// TODO: add general recommendation logic - without specific category
type RecommenderComponentProps = {
	categoryName: string;
	leadText?: string;
};

const RecommenderComponent = async ({
	categoryName, leadText,
}: RecommenderComponentProps) => {
	// currently returns N products from same category
	const recommendedProducts: ProductOverviewFragment[] =
		await getRecommendation({ categoryName: categoryName }, 4);
	return (
		<section data-testid="related-products">
			<h2 className="xl:text-xl font-bold">{leadText ? leadText : "You might also like:"}</h2>
			<ul className="flex flex-col flex-wrap justify-evenly py-4 sm:flex-row">
				{recommendedProducts.map((product) => (
					<li
						key={product.id}
						className="group relative max-w-[200px] list-none"
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
