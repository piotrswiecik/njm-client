import { queryGraphql } from "@/api/queryGraphql";
import { ReviewCreateDocument } from "@/graphql/generated/graphql";

export type ReviewInput = {
  userId: string;
  productId: string;
  headline: string;
  content: string;
  rating: number;
};

export const createReview = async (review: ReviewInput) => {
  try {
		// FIXME: delay for testing
		await new Promise((resolve) => setTimeout(resolve, 3000));

		// TODO: maybe export to api
		const { createReview } = await queryGraphql({
			query: ReviewCreateDocument,
			variables: {
				...review,
			},
		});
		if (!createReview || !createReview.id) {
			throw new Error("Review not created");
		}
	} catch (err) {
		// TODO: error boundary
		console.log(err);
		throw new Error("Review not created");
	}
};