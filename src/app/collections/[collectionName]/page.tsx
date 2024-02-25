import { type Metadata } from "next";
import { getProductsByCollection } from "@/api/getProductsByCollection";
import ProductDashboard from "@/ui/components/ProductDashboard";

export const metadata: Metadata = {
	title: "NJM Record Store - Collections",
	description: "NJM Record Store - Collections",
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

const CollectionsPage = async ({
	params,
}: {
	params: { collectionName: string };
}) => {
	const products = await getProductsByCollection(params.collectionName);

	// FIXME: temporary, add descriptions to database later
	const namesMapping = [
		{ name: "new", description: "New arrivals" },
		{ name: "staffpicks", description: "Staff picks - our recommendations" },
		{ name: "bestsellers", description: "Your favorites - best selling" },
	];

	return (
		<>
			<h2 className="p-6 sm:px-12 text-xl font-bold">
				{
					namesMapping.find((item) => item.name === params.collectionName)
						?.description
				}
			</h2>
			<div className="px-6 sm:px-12">
				<ProductDashboard products={products} />
			</div>
		</>
	);
};

export default CollectionsPage;
