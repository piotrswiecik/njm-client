import { queryGraphql } from "@/api/queryGraphql";
// import { type ProductOverviewDto } from "@/api/models";
import { type Product, ProductFindAllDocument } from "@/graphql/generated/graphql";

export type ProductOverview = Omit<Product, "releaseDate" | "tracks" | "category">;

// TODO: use fragments to eliminate complex types
export const getProducts = async (
	take: number,
	skip?: number,
): Promise<ProductOverview[]>  => {
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
	}));
};
