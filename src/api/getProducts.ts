import { queryGraphql } from "@/api/gql.service";
import { type ProductDashboardItemDto } from "@/api/models";
import { ProductsOverviewDataDocument } from "@/gql/graphql";

export const getProducts = async (
	take: number,
	skip?: number,
): Promise<ProductDashboardItemDto[]> => {
	// raw graphql data
	const { products } = await queryGraphql(ProductsOverviewDataDocument, {
		take,
		skip,
	});

	if (!products) {
		return [];
	}
	// map to dto
	return products.map((product) => ({
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
	}));
};
