import { queryGraphql } from "@/api/queryGraphql";
import { type Product, ProductFindByIdDocument } from "@/graphql/generated/graphql";

export const getProductById = async (
	productId: string,
): Promise<Product> => {
	try {
		const { product } = await queryGraphql(ProductFindByIdDocument, {
			productId: productId,
		});
		if (!product) {
			throw new Error("Product not found");
		}
		return {
			...product,
			// FIXME: temporary type workaround
			category: { ...product.category, id: "null", products: [] },
		};
	} catch (err) {
		console.error("Product API error", err);
		throw err; // rethrow & catch in ui
	}
};
