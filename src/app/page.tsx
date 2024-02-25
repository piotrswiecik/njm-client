import { type Metadata } from "next";
import { getCollections } from "@/api/getCollections";
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
			<span>Welcome to NJM Record Store!</span>
			{ collections?.map((collection) => (
				<p key={collection.name}>{ collection.name }</p>
			))}
		</div>
	);
};

export default HomePage;
