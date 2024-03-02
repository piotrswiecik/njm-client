import { revalidateTag } from "next/cache";
import { queryGraphql } from "@/api/queryGraphql";
import { ReviewCreateDocument } from "@/graphql/generated/graphql";
import { type SubmitReviewInput } from "@/lib/types";

export type ReviewInput = {
	userId: string;
	productId: string;
	headline: string;
	content: string;
	rating: number;
};

export const createReview = async ({
	product,
	user,
	headline,
	content,
	rating,
}: SubmitReviewInput) => {
	try {
		// FIXME: delay for testing
		// await new Promise((resolve) => setTimeout(resolve, 3000));

		const { createReview } = await queryGraphql({
			query: ReviewCreateDocument,
			variables: {
				productId: product.id,
				userId: user.id,
				headline,
				content,
				rating,
			},
			next: {
				tags: ["review"],
			},
		});
		if (!createReview || !createReview.id) {
			throw new Error("Review not created");
		}
		revalidateTag("review");
	} catch (err) {
		// TODO: error boundary
		console.log(err);
		throw new Error("Review not created");
	}
};
