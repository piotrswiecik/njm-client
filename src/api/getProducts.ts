import { queryGraphql } from "@/api/queryGraphql";
import { type ProductOverviewDto } from "@/api/models";
import { ProductFindAllDocument } from "@/graphql/generated/graphql";

export const getProducts = async (
	take: number,
	skip?: number,
): Promise<ProductOverviewDto[]> => {
	// raw graphql data
	const { products } = await queryGraphql(ProductFindAllDocument, {
		take,
		skip: skip || 0,
	});

	return products.map((product) => ({
		...product,
		artist: {
			name: product.artist.name,
		},
		category: product.category.name,
	}));
};
