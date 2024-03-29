import { type Metadata } from "next";
import ProductDashboard from "@/ui/organisms/ProductDashboard";
import Pagination from "@/ui/molecules/Pagination";
import { getProductsByCategory } from "@/api/queries/getProductsByCategory";
import { getCategoryCount } from "@/api/queries/getCategoryCount";
import SortSelectorBar from "@/ui/molecules/SortSelectorBar";
import { capitalize } from "@/lib/utils";

type PageProps = {
	params: {
		categoryName: string;
		pageNum: string;
	};
	searchParams: {
		sort?: string;
		order?: string;
	};
};

export const generateMetadata = async ({
	params,
}: PageProps): Promise<Metadata> => {
	return {
		title: `NJM Record Store - ${capitalize(params.categoryName)}`,
		description: `NJM Record Store - ${capitalize(params.categoryName)}`,
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

const CategoryPage = async ({ params, searchParams }: PageProps) => {
	const numberOfProducts = await getCategoryCount(params.categoryName);

	const PRODUCTS_PER_PAGE = 12;
	const products = await getProductsByCategory(
		params.categoryName,
		PRODUCTS_PER_PAGE,
		(Number(params.pageNum) - 1) * PRODUCTS_PER_PAGE,
		searchParams.sort,
		searchParams.order,
	);

	return (
		<div className="mx-auto max-w-7xl px-6 sm:px-12">
			<h1 className="hidden font-semibold text-slate-700">{capitalize(params.categoryName)} records - enjoy our selection!</h1>
			<SortSelectorBar />
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
