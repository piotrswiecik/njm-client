import { type ProductOverview } from "@/api/getProducts";
import { queryGraphql } from "@/api/queryGraphql";
import { CategoryFindByNameWithPaginatedProductsDocument } from "@/graphql/generated/graphql";

export const getProductsByCategory = async (
	name: string,
	take?: number,
	skip?: number,
): Promise<ProductOverview[]> => {
	const { category } = await queryGraphql(CategoryFindByNameWithPaginatedProductsDocument, {
		name,
		take,
		skip,
	});
	if (!category) return [];
	return category.products.map((product) => (
		{
			...product,
			artist: product.artist,
			category: product.category.name,
		}
	));
};
