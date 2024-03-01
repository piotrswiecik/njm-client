import { getSearchResults } from "@/api/queries/getSearchResults";
import ProductDashboard from "@/ui/components/ProductDashboard";

type SearchPageProps = {
	params: { pageNum: string };
	searchParams: { query: string };
};

const SearchPage = async ({ searchParams }: SearchPageProps) => {
	// TODO maybe pagination?

	const searchResults = await getSearchResults(searchParams.query);
	console.log(searchResults);

	return (
		<div className="px-6 sm:px-12">
			<ProductDashboard products={searchResults} />
		</div>
	);
};

export default SearchPage;
