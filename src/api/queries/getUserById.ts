import { queryGraphql } from "@/api/queryGraphql";
import {
	UserDocument,
	type UserDetailsFragment,
} from "@/graphql/generated/graphql";

export const getUserById = async (
	userId: string,
): Promise<UserDetailsFragment> => {
	try {
		const { user } = await queryGraphql({
			query: UserDocument,
			variables: {
				userId,
			},
		});
		if (!user) {
			throw new Error("Product not found");
		}
		return user;
	} catch (err) {
		console.error("Product API error", err);
		throw err; // rethrow & catch in ui
	}
};
