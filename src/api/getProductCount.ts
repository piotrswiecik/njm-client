import { queryGraphql } from "@/api/queryGraphql";
import { ProductCountDocument } from "@/graphql/generated/graphql";

export const getProductCount = async (): Promise<number> => {
	try {
		const { productCount } = await queryGraphql(ProductCountDocument, {});
		return productCount;
	} catch (err) {
		console.error("Product API error", err);
		throw err; // rethrow & catch in ui
	}
};
