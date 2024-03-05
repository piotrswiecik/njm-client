"use client";

import { type User } from "@clerk/nextjs/server";
import ReviewList from "@/ui/organisms/ReviewList";
import SubmitReviewForm from "@/ui/molecules/SubmitReviewForm";
import { submitReviewAction } from "@/actions/submitReviewAction";
import { type ReviewDetailsFragment } from "@/graphql/generated/graphql";

const ReviewComponent = ({
	reviews,
	user,
}: {
	reviews: ReviewDetailsFragment[];
	user: User | null;
}) => {
	return (
		<div className="mt-4 flex flex-col sm:flex-row sm:justify-between lg:max-w-5xl">
			<div className="w-5/12">
				<SubmitReviewForm submitReviewAction={submitReviewAction} user={user} />
			</div>
			<div className="w-6/12">
				<ReviewList reviews={reviews} />
			</div>
		</div>
	);
};

export default ReviewComponent;
