"use server";

import { createReview } from "@/api/queries/createReview";
import { type ReviewFormData } from "@/lib/types";

export const handlePostReviewAction = async (data: ReviewFormData) => {
	"use server";
	// TODO: optimistic update, error handling
	console.log("post review action");
	console.log(data);
	await createReview({ ...data });
	throw new Error("Review not created");
};
