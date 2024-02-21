import { getSearchResults } from "@/api/getSearchResults";

type SearchPageProps = {
	params: { pageNum: string };
	searchParams: { query: string };
};

const SearchPage = async ({ params, searchParams }: SearchPageProps) => {
	// add pagination later

	const searchResults = await getSearchResults(searchParams.query);
	console.log(searchResults);
	
	return (
		<div className="px-6 sm:px-12">
			search
		</div>
	);
};

export default SearchPage;
