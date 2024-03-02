"use client";

import { UsersRound } from "lucide-react";
import { type ReviewDetailsFragment } from "@/graphql/generated/graphql";
import RatingStarsDisplay from "@/ui/atoms/RatingStarsDisplay";

const ReviewItem = ({ review }: { review: ReviewDetailsFragment }) => {
	return (
		<div className="mb-8 flex flex-col rounded-md border bg-white p-2 shadow">
			<div className="flex flex-row items-center justify-between border-b border-slate-200 pb-2">
				<div className="flex flex-row items-center">
					<UsersRound />
					<span className="mx-2 font-semibold">{review.user.name} </span>
					{/* <span className="text-sm italic text-slate-400">
					({review.user.email})
				</span> */}
				</div>
				<div className="p-0">
					<RatingStarsDisplay rating={3} />
				</div>
			</div>

			<div className="mt-2">
				<p className="font-semibold">{review.headline}</p>
			</div>
			<div>
				<p className="text-sm">{review.content}</p>
			</div>
		</div>
	);
};

export default ReviewItem;
