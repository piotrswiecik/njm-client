import { type Route, type Metadata } from "next";
import Link from "next/link";
import { getCollections } from "@/api/queries/getCollections";
import RecommenderComponent from "@/ui/organisms/Recommender";
import { collectionNamesMapping } from "@/lib/utils";

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

	const lorem = `
	Tempor mollit est ad ut aute in duis quis. Cupidatat ut culpa aute. Ea ullamco commodo ipsum exercitation esse aliquip adipisicing. Ea nisi proident irure. Deserunt elit sit ipsum minim cupidatat. Consectetur et aute officia est officia amet in in. Excepteur ea excepteur culpa ipsum. Nostrud culpa dolore est aute duis anim deserunt commodo. Elit dolor aliqua sint est commodo esse elit. Consequat ea Lorem cupidatat veniam consequat voluptate do consectetur ex. Anim aliquip eu fugiat voluptate ea adipisicing irure.
	`;

	return (
		<div className="mx-auto w-10/12 max-w-7xl px-6 sm:px-12">
			<article>
				<div className="flex flex-col sm:flex-row justify-evenly p-2">
					<div className="w-7/12 p-4">
						<h2 className="mb-4 text-xl font-semibold text-slate-900">
							Welcome to Next.js Masters record store!
						</h2>
						<p className="hidden sm:block text-sm leading-relaxed text-slate-600">{lorem}</p>
					</div>
					<div className="p-4 font-semibold text-slate-900">
						Explore our collections
						<ul
							className="py-8 font-normal text-slate-900"
						>
							{collections?.map((collection) => (
								<li key={collection.name} className="mb-2">
									<span className="pr-2">
										{
											collectionNamesMapping.find(
												(mapping) => mapping.name === collection.name,
											)?.before
										}
									</span>
									<Link href={`/collections/${collection.name}` as Route}>
										<span>
											{
												collectionNamesMapping.find(
													(mapping) => mapping.name === collection.name,
												)?.description
											}
										</span>
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</article>
			<aside className="mt-8 flex flex-col justify-evenly sm:mt-12 sm:flex-row">
				<RecommenderComponent leadText="Recommended" />
			</aside>
		</div>
	);
};

export default HomePage;
