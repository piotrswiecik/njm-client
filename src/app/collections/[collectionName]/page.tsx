import { type Metadata } from "next";
import { getProductsByCollection } from "@/api/queries/getProductsByCollection";
import ProductDashboard from "@/ui/organisms/ProductDashboard";
import { collectionNamesMapping } from "@/lib/utils";

export async function generateMetadata({
	params,
}: {
	params: { collectionName: string };
}): Promise<Metadata> {
	return {
		title: collectionNamesMapping.find(
			(item) => item.name === params.collectionName,
		)?.description,
		description: params.collectionName,
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

const CollectionsPage = async ({
	params,
}: {
	params: { collectionName: string };
}) => {
	const products = await getProductsByCollection(params.collectionName);

	return (
		<>
			<h2 className="p-6 text-xl font-bold sm:px-12">
				{
					collectionNamesMapping.find(
						(item) => item.name === params.collectionName,
					)?.description
				}
			</h2>
			<div className="px-6 sm:px-12">
				<ProductDashboard products={products} />
			</div>
		</>
	);
};

export default CollectionsPage;
