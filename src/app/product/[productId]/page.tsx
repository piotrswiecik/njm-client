import { type Metadata } from "next";
import ProductDetailsComponent from "@/ui/organisms/ProductDetailsComponent";
import RecommenderComponent from "@/ui/organisms/Recommender";
import { getProductById } from "@/api/queries/getProductById";
import { type ProductDetailsFragment } from "@/graphql/generated/graphql";
import ReviewContainer from "@/ui/organisms/ReviewContainer";
import { notifyProductView } from "@/lib/recommender";
import { getUserId } from "@/lib/session";

export async function generateMetadata({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> {
	const product: ProductDetailsFragment = await getProductById(
		params.productId,
	);
	const title = product.title;
	return {
		title,
		description: title,
		generator: "Next.js",
		applicationName: "NJM Record Store",
		keywords: ["music", "vinyl", "records", "albums", "store"],
		authors: [
			{ name: "NJM Record Store" },
			{ name: "piotr.swiecik@gmail.com" },
			{ name: "capricorndev" },
		],
		metadataBase: new URL(
			process.env.NEXT_PUBLIC_METADATA_BASE || "http://localhost:3000",
		),
		creator: "Piotr Święcik",
		openGraph: {
			title,
			description: title,
			type: "website",
			locale: "en_US",
			url: `https://njm-record-store.vercel.app/product/${product.id}`,
			images: [
				{
					url: product.coverImageUrl,
					alt: product.title,
				},
			],
		},
	};
}

const ProductDetailsPage = async ({
	params,
}: {
	params: { productId: string };
}) => {
	// TODO: unhandled err thrown by service layer
	try {
		const product: ProductDetailsFragment = await getProductById(
			params.productId,
		);

		if (!product) {
			return null; // TODO 404 later
		}

		await notifyProductView(product.id, (await getUserId()) || "anonymous");

		return (
			<div className="mx-auto max-w-7xl px-6 sm:px-12">
				<article>
					<ProductDetailsComponent product={product} />
				</article>
				<aside className="sm:mt-8">
					<RecommenderComponent />
					<div className="mt-12">
						<h2 className="mb-2 font-bold sm:text-xl">Customer reviews</h2>
						<ReviewContainer productId={product.id} />
					</div>
				</aside>
			</div>
		);
	} catch (err) {
		console.log(err);
	}
};

export default ProductDetailsPage;
