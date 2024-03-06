"use client";

import { type User } from "@clerk/nextjs/server";
import { useOptimistic } from "react";
import ReviewList from "@/ui/organisms/ReviewList";
import SubmitReviewForm from "@/ui/molecules/SubmitReviewForm";
import { submitReviewAction } from "@/actions/submitReviewAction";
import { type ReviewDetailsFragment } from "@/graphql/generated/graphql";

/**
 * Provides handling of optimistic updates and communicates updates between the form and the list.
 */
const ReviewComponent = ({
	reviews,
	user,
}: {
	reviews: Omit<ReviewDetailsFragment, "product">[];
	user: User | null;
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
		if (user && rating) {
			setOptimisticState([
				...optimisticState,
				{
					id: "",
					headline: formData.get("headline") as string,
					content: formData.get("content") as string,
					rating: rating || 0,
					dateCreated: new Date().toISOString(),
					// TODO: take care of cases where identity provider returns no username or no email
					user: {
						name: user.username || "",
						email: user.emailAddresses[0].emailAddress || "",
					},
				},
			]);
		}
		await submitReviewAction(rating, formData);
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
