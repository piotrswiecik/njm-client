import { queryGraphql } from "@/api/queryGraphql";
import {
	type ReviewDetailsFragment,
	ReviewsGetByProductDocument,
} from "@/graphql/generated/graphql";

export const getReviewsByProduct = async (
	productId: string,
): Promise<ReviewDetailsFragment[]> => {
	try {
		const { productReviews } = await queryGraphql({
			query: ReviewsGetByProductDocument,
			variables: {
				productId: productId,
			},
			next: {
				tags: ["review"],
			}
		});
		if (!productReviews) {
			return [];
		}
		return productReviews;
	} catch (err) {
		console.error("Product API error", err);
		throw err; // rethrow & catch in ui
	}
};
