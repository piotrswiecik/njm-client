"use client";

import { useEffect, useOptimistic, useState, useTransition } from "react";
import { handleSubmitReviewAction } from "@/actions/handlePostReviewAction";
import {
	type UserDetailsFragment,
	type ProductDetailsFragment,
	type ReviewDetailsFragment,
} from "@/graphql/generated/graphql";
import ReviewForm from "@/ui/molecules/ReviewForm";
import ReviewList from "@/ui/organisms/ReviewList";
import { type SubmitReviewInput } from "@/lib/types";
import { auth } from "@clerk/nextjs";

const ReviewContainer = ({
	product,
	reviews,
}: {
	product: ProductDetailsFragment;
	reviews: ReviewDetailsFragment[];
}) => {
	const [optimisticReviews, setOptimisticReviews] = useOptimistic(
		reviews,
		(_state, newQuantity: ReviewDetailsFragment[]) => newQuantity,
	);
	// const [_, startTransition] = useTransition();

	const isReviewed = false; // TODO: get this info from backend / props

	const [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		const clerkAuth = auth();
		if (clerkAuth.sessionId !== null && clerkAuth.user !== null) {
			setLoggedIn(true);
		}
	}, []);

	/**
	 * Used to optimistically update the UI. Actual request is made via separate server action.
	 */
	// const submitHandler = (input: SubmitReviewInput) => {
	// 	console.log("this is the submit event handler");
	// 	const loggedIn = false;
	// 	if (!loggedIn) {
	// 		console.log("Please log in to submit a review");
	// 		// return;
	// 	}
	// 	startTransition(() => {
	// 		console.log("in transition");
	// 		setOptimisticReviews([
	// 			...reviews,
	// 			{ ...input, id: "temp-id", dateCreated: new Date().toISOString() },
	// 		]);
	// 	});
	// };


	return (
		<div className="mt-12">
			<h2 className="mb-2 font-bold sm:text-xl">Customer reviews</h2>
			<div className="mt-4 flex flex-col sm:max-w-xl sm:flex-row sm:justify-between lg:max-w-5xl">
				<div className="w-5/12">
					<ReviewForm
						product={product}
						// submitAction={handleSubmitReviewAction}
						// submitHandler={submitHandler}
						// user={user}
					/>
				</div>
				<div className="w-6/12">
					<ReviewList reviews={optimisticReviews} />
				</div>
			</div>
		</div>
	);
};

export default ReviewContainer;
