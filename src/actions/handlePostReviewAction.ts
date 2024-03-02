"use server";

import { createReview } from "@/api/queries/createReview";
import {} from "@/graphql/generated/graphql";
import { type SubmitReviewInput } from "@/lib/types";

export const handleSubmitReviewAction = async ({
	user,
	product,
	headline,
	content,
	rating,
}: SubmitReviewInput) => {
	"use server";
	await createReview({ user, product, headline, content, rating });
};
