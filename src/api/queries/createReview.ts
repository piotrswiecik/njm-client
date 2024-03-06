import { revalidateTag } from "next/cache";
import { queryGraphql } from "@/api/queryGraphql";
import { ReviewCreateDocument } from "@/graphql/generated/graphql";
import { type ReviewCreateDto } from "@/actions/submitReviewAction";

export const createReview = async (input: ReviewCreateDto) => {
	const { createReview } = await queryGraphql({
		query: ReviewCreateDocument,
		variables: {
			...input,
		},
		next: {
			tags: ["review"],
		},
	});
	if (!createReview || !createReview.id) {
		throw new Error("Review not created");
	}
	revalidateTag("review");
};
