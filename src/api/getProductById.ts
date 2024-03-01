import { queryGraphql } from "@/api/queryGraphql";
import {
	ProductFindByIdDocument,
	type ProductDetailsFragment,
} from "@/graphql/generated/graphql";

export const getProductById = async (
	productId: string,
): Promise<ProductDetailsFragment> => {
	try {
		const { product } = await queryGraphql({
			query: ProductFindByIdDocument,
			variables: {
				productId: productId,
			},
		});
		if (!product) {
			throw new Error("Product not found");
		}
		return product;
	} catch (err) {
		console.error("Product API error", err);
		throw err; // rethrow & catch in ui
	}
};
