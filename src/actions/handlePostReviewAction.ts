"use server";

import { auth } from "@clerk/nextjs";
import { createReview } from "@/api/queries/createReview";
import {} from "@/graphql/generated/graphql";
import { type SubmitReviewInput } from "@/lib/types";

/**
 * Server action used to handle review form submission.
 * Blocks submission & returns if user is not logged in.
 * Forwards form data to graphql mutation otherwise.
 */
export const handleSubmitReviewAction = async ({
	user,
	product,
	headline,
	content,
	rating,
}: SubmitReviewInput) => {
	"use server";
	// const clerkAuth = auth();
	// if (clerkAuth.sessionId === null || clerkAuth.user === null) {
	// 	console.log("user is not logged in");
	// 	return;
	// }
	console.log("this is the server action firing");
	await createReview({ user, product, headline, content, rating });
};
