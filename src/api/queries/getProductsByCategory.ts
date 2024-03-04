import { queryGraphql } from "@/api/queryGraphql";
import {
	CategoryFindByNameWithPaginatedProductsDocument,
	type ProductOverviewFragment,
} from "@/graphql/generated/graphql";

export const getProductsByCategory = async (
	name: string,
	take?: number,
	skip?: number,
	sort?: string,
	order?: string,
): Promise<ProductOverviewFragment[]> => {
	const { category } = await queryGraphql({
		query: CategoryFindByNameWithPaginatedProductsDocument,
		variables: {
			name,
			take,
			skip,
			sort,
			order,
		},
		next: {
			tags: ["category", "sort"],
		},
	});
	if (!category) return [];
	return category.products;
};
