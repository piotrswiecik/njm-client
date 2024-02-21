import { type Metadata } from "next";
import ProductDashboard from "@/ui/components/ProductDashboard";
import Pagination from "@/ui/components/Pagination";
import { getProductsByCategory } from "@/api/getProductsByCategory";
import { getCategoryCount } from "@/api/getCategoryCount";

type PageProps = {
	params: {
		categoryName: string;
		pageNum: string;
	};
};

export const generateMetadata = async ({
	params,
}: PageProps): Promise<Metadata> => {
	return {
		title: `NJM Record Store - ${params.categoryName}`,
		description: `NJM Record Store - ${params.categoryName}`,
		generator: "Next.js",
		applicationName: "NJM Record Store",
		keywords: [
			"music",
			"vinyl",
			"records",
			"albums",
			"store",
			`${params.categoryName}`,
		],
		authors: [
			{ name: "NJM Record Store" },
			{ name: "piotr.swiecik@gmail.com" },
			{ name: "capricorndev" },
		],
		creator: "Piotr Święcik",
	};
};

const CategoryPage = async ({ params }: PageProps) => {
	const numberOfProducts = await getCategoryCount("jazz"); // TODO unhandled err thrown by service layer

	// TODO optimize this, maybe base on media query
	const PRODUCTS_PER_PAGE = 12;

	const products = await getProductsByCategory(
		params.categoryName,
		PRODUCTS_PER_PAGE,
		(Number(params.pageNum) - 1) * PRODUCTS_PER_PAGE,
	);

	return (
		<div className="mx-auto max-w-7xl px-6 sm:px-12">
			<ProductDashboard products={products} />
			<div className="mt-12 flex justify-center">
				<Pagination
					totalPages={Math.ceil(numberOfProducts / PRODUCTS_PER_PAGE)}
					corePathSegment={`categories/${params.categoryName}`}
				/>
			</div>
		</div>
	);
};

export default CategoryPage;
