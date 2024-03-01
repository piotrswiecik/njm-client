import { type Metadata } from "next";
import ProductDetailsComponent from "@/ui/components/ProductDetails";
import RecommenderComponent from "@/ui/components/Recommender";
import ReviewsComponent from "@/ui/components/Reviews";
import { getProductById } from "@/api/queries/getProductById";
import { type ProductDetailsFragment } from "@/graphql/generated/graphql";
import ReviewFormContainer from "@/ui/components/ReviewFormContainer";

export async function generateMetadata({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> {
	const product: ProductDetailsFragment = await getProductById(
		params.productId,
	);
	return {
		title: product.title,
		description: product.title,
		generator: "Next.js",
		applicationName: "NJM Record Store",
		keywords: ["music", "vinyl", "records", "albums", "store"],
		authors: [
			{ name: "NJM Record Store" },
			{ name: "piotr.swiecik@gmail.com" },
			{ name: "capricorndev" },
		],
		creator: "Piotr Święcik",
	};
}

const ProductDetailsPage = async ({
	params,
}: {
	params: { productId: string };
}) => {
	// TODO unhandled err thrown by service layer
	try {
		const product: ProductDetailsFragment = await getProductById(
			params.productId,
		);

		if (!product) {
			return null; // TODO 404 later
		}
		return (
			<div className="mx-auto max-w-7xl px-6 sm:px-12">
				<article>
					<ProductDetailsComponent product={product} />
				</article>
				<aside className="sm:mt-8">
					<RecommenderComponent categoryName={product.category.name} />
					<div className="mt-4 flex flex-col sm:max-w-xl sm:flex-row sm:justify-between lg:max-w-5xl">
						<div className="w-5/12">
							<ReviewFormContainer productId={params.productId} />
						</div>
						<div className="w-5/12">
							<ReviewsComponent />
						</div>
					</div>
				</aside>
			</div>
		);
	} catch (err) {
		console.log(err);
	}
};

export default ProductDetailsPage;
