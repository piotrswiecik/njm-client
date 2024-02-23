import { queryGraphql } from "@/api/queryGraphql";
import { CollectionFindAllDocument } from "@/graphql/generated/graphql";

export const getCollections = async () => {
	try {
		const { collections } = await queryGraphql(CollectionFindAllDocument, {});
		return collections;
	} catch (err) {
		console.error("Collections API error", err);
		throw err; // rethrow & catch in ui
	}
};
