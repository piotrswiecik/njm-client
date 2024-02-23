import { type ProductOverviewDto } from "@/api/models";
import { queryGraphql } from "@/api/queryGraphql";
import { CollectionFindByNameWithAllProductsDocument } from "@/graphql/generated/graphql";

export const getProductsByCollection = async (
	name: string,
): Promise<ProductOverviewDto[]> => {
	const { collection } = await queryGraphql(
		CollectionFindByNameWithAllProductsDocument,
		{
			name,
		},
	);
	if (!collection) return [];
	return collection.products.map((product) => ({
		...product,
		artist: product.artist,
		category: product.category.name,
	}));
};
