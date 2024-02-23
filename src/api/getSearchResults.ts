import { queryGraphql } from "@/api/queryGraphql";
import { type ProductOverviewDto } from "@/api/models";
import { ProductsSearchDocument } from "@/graphql/generated/graphql";

export const getSearchResults = async (
	query: string,
): Promise<ProductOverviewDto[]> => {
	try {
		const { productSearch } = await queryGraphql(ProductsSearchDocument, {
			query,
		});
	
		if (!productSearch) {
			return [];
		}

		return productSearch.map((product) => (
			{
				...product,
				artist: {
					name: product.artist.name,
				},
				category: product.category.name,
				variants: product.variants
			}
		));

	} catch (err ) {
		console.error(err);
		throw err;
	}
	

	
};
