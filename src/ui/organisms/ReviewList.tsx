"use client";

import { type ReviewDetailsFragment } from "@/graphql/generated/graphql";
import ReviewItem from "@/ui/molecules/ReviewItem";

const ReviewList = ({
	reviews,
}: {
	reviews: Omit<ReviewDetailsFragment, "product">[];
}) => {
	if (reviews.length === 0) {
		return (
			<section>
				<p>No reviews yet</p>
			</section>
		);
	}

	return (
		<section>
			{reviews.map((review) => (
				<ReviewItem key={review.id} review={review} />
			))}
		</section>
	);
};

export default ReviewList;
