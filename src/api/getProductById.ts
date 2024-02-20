import { queryGraphql } from "@/api/gql.service";
import { type ProductDetailsDto } from "@/api/models";
import { ProductDetailsDataDocument } from "@/gql/graphql";

export const getProductById = async (
	productId: string,
): Promise<ProductDetailsDto | null> => {
	try {
		const { product } = await queryGraphql(ProductDetailsDataDocument, {
			productId,
		});
		if (!product) {
			return null;
		}
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
			releaseDate: product.releaseDate,
			stock: {
				qtyCd: product.stock.qtyCd,
				qtyLp: product.stock.qtyLp,
			},
			tracks: product.tracks.map((track) => ({
				name: track.name,
			})),
		};
	} catch (err) {
		console.error("Product API error", err);
		throw err; // rethrow & catch in ui
	}
};
