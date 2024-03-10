import { queryGraphql } from "@/api/queryGraphql";
import {
  ProductRangeDocument,
	type ProductOverviewFragment,
} from "@/graphql/generated/graphql";

export const getProductRange = async (
  ids: string[],
): Promise<ProductOverviewFragment[]> => {
	const { productRange } = await queryGraphql({
		query: ProductRangeDocument,
		variables: {
			in: ids
		},
		next: {
			tags: ["products", "sort"],
		},
	});

  if (!productRange) {
    throw new Error("No products found");
  }

	return productRange.map((product) => ({
		...product,
		artist: {
			name: product.artist.name,
		},
	}));
};
