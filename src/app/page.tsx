import { type Metadata } from "next";
import { getCollections } from "@/api/queries/getCollections";
import CollectionCard from "@/ui/molecules/CollectionCard";
import RecommenderComponent from "@/ui/organisms/Recommender";
export const metadata: Metadata = {
	title: "NJM Record Store - Products",
	description: "NJM Record Store - Products",
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

const HomePage = async () => {
	const collections = await getCollections();

	return (
		<div className="mx-auto w-10/12 max-w-7xl px-6 sm:px-12">
			<article>
				<div className="flex flex-col items-center sm:flex-row">
					{collections?.map((collection) => (
						<CollectionCard key={collection.name} name={collection.name} />
					))}
				</div>
			</article>
			<aside>
				<RecommenderComponent categoryName="jazz" leadText="Recommended" />
			</aside>
		</div>
	);
};

export default HomePage;
