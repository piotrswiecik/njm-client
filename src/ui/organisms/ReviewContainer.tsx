"use client";

import { useOptimistic, useTransition } from "react";
import { handleSubmitReviewAction } from "@/actions/handlePostReviewAction";
import {
	type UserDetailsFragment,
	type ProductDetailsFragment,
	type ReviewDetailsFragment,
} from "@/graphql/generated/graphql";
import ReviewForm from "@/ui/molecules/ReviewForm";
import ReviewList from "@/ui/organisms/ReviewList";
import { type SubmitReviewInput } from "@/lib/types";

const ReviewContainer = ({
	product,
	user,
	reviews,
}: {
	product: ProductDetailsFragment;
	user: UserDetailsFragment;
	reviews: ReviewDetailsFragment[];
}) => {
	const [optimisticReviews, setOptimisticReviews] = useOptimistic(
		reviews,
		(_state, newQuantity: ReviewDetailsFragment[]) => newQuantity,
	);
	const [_, startTransition] = useTransition();

	const submitHandler = (input: SubmitReviewInput) => {
		startTransition(() => {
			setOptimisticReviews([...reviews, { ...input, id: "temp-id" }]);
		})
	};

	return (
		<div className="mt-12">
			<h2 className="mb-2 font-bold sm:text-xl">Customer reviews</h2>
			<div className="mt-4 flex flex-col sm:max-w-xl sm:flex-row sm:justify-between lg:max-w-5xl">
				<div className="w-5/12">
					<ReviewForm
						product={product}
						submitAction={handleSubmitReviewAction}
						submitHandler={submitHandler}
						user={user}
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
