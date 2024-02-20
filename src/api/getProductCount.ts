import { queryGraphql } from "@/api/gql";
import { ProductsCountDocument } from "@/gql/graphql";

export const getProductCount = async () => {
	try {
		const { count } = await queryGraphql(ProductsCountDocument, {});
		return count;
	} catch (err) {
		console.error("Product API error", err);
		throw err; // rethrow & catch in ui
	}
};
