import { queryGraphql } from "@/api/queryGraphql";
import {
	type ProductOverviewFragment,
	ProductsSearchDocument,
} from "@/graphql/generated/graphql";

export const getSearchResults = async (
	query: string,
): Promise<ProductOverviewFragment[]> => {
	try {
		const { productSearch } = await queryGraphql(ProductsSearchDocument, {
			query,
		});
		if (!productSearch) {
			return [];
		}
		return productSearch;
	} catch (err) {
		console.error(err);
		throw err;
	}
};
