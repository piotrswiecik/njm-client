import { queryGraphql } from "@/api/queryGraphql";
import { type ProductOverviewDto } from "@/api/models";
import { ProductSearchDocument } from "@/gql/graphql";

export const getSearchResults = async (
	query: string,
): Promise<ProductOverviewDto[]> => {
	// raw graphql data
	const { productSearch } = await queryGraphql(ProductSearchDocument, {
		query,
	});

	if (!productSearch) {
		return [];
	}

	// map to dto
	return productSearch.map((product) => {
		return {
			id: product.id,
			artist: product.artist,
			category: product.category.name,
			title: product.title,
			price: product.price,
			image: {
				url: product.coverImg.url,
				width: product.coverImg.width,
				height: product.coverImg.height,
			},
			collections: [],
		};
	});
};
