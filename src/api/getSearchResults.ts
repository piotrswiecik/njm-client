import { queryGraphql } from "@/api/queryGraphql";
import { ProductsSearchDocument } from "@/graphql/generated/graphql";
import { type ProductOverview } from "@/api/getProducts";

export const getSearchResults = async (
	query: string,
): Promise<ProductOverview[]> => {
	try {
		const { productSearch } = await queryGraphql(ProductsSearchDocument, {
			query,
		});

		if (!productSearch) {
			return [];
		}

		// FIXME: temporary type workaround
		return productSearch.map((product) => ({
			...product,
			artist: {
				name: product.artist.name,
			},
			category: product.category.name,
			variants: product.variants,
		}));
	} catch (err) {
		console.error(err);
		throw err;
	}
};
