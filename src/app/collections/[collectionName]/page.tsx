import { type Metadata } from "next";
import ProductDashboard from "@/ui/components/ProductDashboard";
import Pagination from "@/ui/components/Pagination";
import { getProductCount } from "@/api/getProductCount";
import { getProducts } from "@/api/getProducts";
import { getCollections } from "@/api/getCollections";

type CollectionsPageProps = {
	collectionName: string;
};

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

const CollectionsPage = async ({ collectionName }: CollectionsPageProps) => {
	

	return (
		<div className="px-6 sm:px-12">
			<ProductDashboard products={products} />
		</div>
	);
};

export default CollectionsPage;
