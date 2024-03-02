"use client";

import { handlePostReviewAction } from "@/actions/handlePostReviewAction";
import {
	type UserDetailsFragment,
	type ProductDetailsFragment,
	type ReviewDetailsFragment,
} from "@/graphql/generated/graphql";
import ReviewForm from "@/ui/molecules/ReviewForm";
import ReviewList from "@/ui/organisms/ReviewList";

const ReviewContainer = ({
	product,
	user,
	reviews,
}: {
	product: ProductDetailsFragment;
	user: UserDetailsFragment;
	reviews: ReviewDetailsFragment[];
}) => {
	return (
		<div className="mt-4">
			<h2 className="mb-2 font-bold sm:text-xl">Customer reviews</h2>
			<div className="mt-4 flex flex-col sm:max-w-xl sm:flex-row sm:justify-between lg:max-w-5xl">
				<div className="w-5/12">
					<ReviewForm
						product={product}
						handler={handlePostReviewAction}
						user={user}
					/>
				</div>
				<div className="w-6/12">
					<ReviewList reviews={reviews} />
				</div>
			</div>
		</div>
	);
};

export default ReviewContainer;
