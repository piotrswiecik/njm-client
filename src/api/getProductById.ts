import { queryGraphql } from "@/api/queryGraphql";
import { type ProductDetailsDto } from "@/api/models";
import { ProductFindByIdDocument } from "@/graphql/generated/graphql";

export const getProductById = async (
	productId: string,
): Promise<ProductDetailsDto | null> => {
	try {
		const { product } = await queryGraphql(ProductFindByIdDocument, {
			productId: productId,
		});
		if (!product) return null;
		return {
			...product,
			artist: { name: product.artist.name },
			category: product.category.name,
		};
	} catch (err) {
		console.error("Product API error", err);
		throw err; // rethrow & catch in ui
	}
};
