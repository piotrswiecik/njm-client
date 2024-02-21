import { queryGraphql } from "@/api/gql";
import { CategoryCountDocument } from "@/gql/graphql";

export const getCategoryCount = async (name: string) => {
	try {
		const { categoryCount } = await queryGraphql(CategoryCountDocument, {name: name});
		return categoryCount;
	} catch (err) {
		console.error("Product API error", err);
		throw err; // rethrow & catch in ui
	}
};
