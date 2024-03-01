import { queryGraphql } from "@/api/queryGraphql";
import { CategoryCountDocument } from "@/graphql/generated/graphql";

export const getCategoryCount = async (name: string) => {
	try {
		const { categoryCount } = await queryGraphql({
			query: CategoryCountDocument,
			variables: {
				name: name,
			},
		});
		return categoryCount;
	} catch (err) {
		console.error("Product API error", err);
		throw err; // rethrow & catch in ui
	}
};
