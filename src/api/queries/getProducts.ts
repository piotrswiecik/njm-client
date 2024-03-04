import { queryGraphql } from "@/api/queryGraphql";
import {
	ProductFindAllDocument,
	type ProductOverviewFragment,
} from "@/graphql/generated/graphql";

export const getProducts = async (
	take?: number,
	skip?: number,
	sort?: string,
	order?: string,
): Promise<ProductOverviewFragment[]> => {
	const { products } = await queryGraphql({
		query: ProductFindAllDocument,
		variables: {
			take,
			skip: skip || 0,
			sort,
			order
		},
		next: {
			tags: ["products", "sort"],
		},
	});

	return products.map((product) => ({
		...product,
		artist: {
			name: product.artist.name,
		},
	}));
};
