"use server";

import { createReview } from "@/api/mutations/createReview";
import { notifyReviewAdd } from "@/lib/recommender";
import { getCurrentDbUser } from "@/lib/user";

export type ReviewCreateDto = {
	productId: string;
	rating: number;
	headline: string;
	content: string;
	userId: string;
};

/**
 * Server action used to handle review form submission. Calls createReview gql mutation.
 * @param rating star rating value to be provided as extra binding
 * @param formData form data from submission
 */
export const submitReviewAction = async (
	input: ReviewCreateDto,
): Promise<void> => {
	await createReview({ ...input });
	const user = await getCurrentDbUser();
	await notifyReviewAdd(
		input.productId,
		user ? user.id : "anonymous",
		input.rating,
	);
};
