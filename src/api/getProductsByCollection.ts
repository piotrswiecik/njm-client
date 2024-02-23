import { queryGraphql } from "@/api/queryGraphql";
import {
	CollectionFindByNameWithAllProductsDocument,
	type ProductOverviewFragment,
} from "@/graphql/generated/graphql";

export const getProductsByCollection = async (
	name: string,
): Promise<ProductOverviewFragment[]> => {
	const { collection } = await queryGraphql(
		CollectionFindByNameWithAllProductsDocument,
		{
			name,
		},
	);
	if (!collection) return [];
	return collection.products;
};
