"use client";

import { useOptimistic } from "react";
import ReviewList from "@/ui/organisms/ReviewList";
import SubmitReviewForm from "@/ui/molecules/SubmitReviewForm";
import { submitReviewAction } from "@/actions/submitReviewAction";
import {
	type UserDetailsFragment,
	type ReviewDetailsFragment,
} from "@/graphql/generated/graphql";

/**
 * Provides handling of optimistic updates and communicates updates between the form and the list.
 */
const ReviewComponent = ({
	reviews,
	user,
	productId,
}: {
	reviews: Omit<ReviewDetailsFragment, "product">[];
	user?: UserDetailsFragment;
	productId: string;
}) => {
	const [optimisticState, setOptimisticState] = useOptimistic(
		reviews,
		(_currentState, updatedReviews: Omit<ReviewDetailsFragment, "product">[]) =>
			updatedReviews,
	);

	const handleSubmitReview = async (
		rating: number | null,
		formData: FormData,
	) => {
		if (!user || !rating) return;
		setOptimisticState([
			...optimisticState,
			{
				id: "temporary-id",
				headline: formData.get("headline") as string,
				content: formData.get("content") as string,
				rating: rating || 0,
				dateCreated: new Date().toISOString(),
				// TODO: take care of cases where identity provider returns no username or no email - check typedefs if it's even possible
				user: {
					name: user?.name|| "",
					email: user?.email || "",
				},
			},
		]);
		await submitReviewAction({
			userId: user.id,
			productId,
			headline: formData.get("headline") as string,
			content: formData.get("content") as string,
			rating: rating,
		});
	};

	return (
		<div className="mt-4 flex flex-col sm:flex-row sm:justify-between lg:max-w-5xl">
			<div className="w-5/12">
				<SubmitReviewForm submitReviewAction={handleSubmitReview} user={user} />
			</div>
			<div className="w-6/12">
				<ReviewList reviews={optimisticState} />
			</div>
		</div>
	);
};

export default ReviewComponent;
