"use client";

import { type ReviewDetailsFragment } from "@/graphql/generated/graphql";
import RatingStarsDisplay from "@/ui/atoms/RatingStarsDisplay";

const ReviewItem = ({ review }: { review: ReviewDetailsFragment }) => {
	return (
		<div className="flex flex-col border">
			<div>
				<span className="text-lg font-semibold">{review.user.name} </span>
				<span className="text-sm italic text-slate-400">
					({review.user.email})
				</span>
			</div>
			<div>
				<RatingStarsDisplay rating={3} />
			</div>
			<div>
				<p className="font-semibold">{review.headline}</p>
			</div>
			<div>
				<p>{review.content}</p>
			</div>
		</div>
	);
};

export default ReviewItem;
