"use client";

import { type User } from "@clerk/nextjs/server";
import { useState } from "react";

const SubmitReviewForm = ({
	submitReviewAction,
	user,
}: {
	submitReviewAction: (rating: number | null, form: FormData) => Promise<void>;
	user: User | null;
}) => {
	const activeStarClassName = "text-yellow-300";
	const inactiveStarClassName = "text-gray-300 dark:text-gray-500";
	const baseStarClassName = "ms-1 h-4 w-4";

	const [rating, setRating] = useState<number | null>(null);

	// pass rating with bind instead of using hidden form input
	const formAction = submitReviewAction.bind(null, rating);

	// TODO: add js validators instead of form-based
	return (
		<>
			<form action={formAction} data-testid="add-review-form">
				<div className="">
					<label htmlFor="headline" className="block">
						Headline
					</label>
					<input
						type="text"
						id="headline"
						name="headline"
						required
						placeholder="Enter review headline"
						className="w-full appearance-none rounded border"
					/>
				</div>
				<div className="">
					<label htmlFor="content" className="block">
						Content
					</label>
					<input
						type="text"
						id="content"
						name="content"
						required
						placeholder="Tell us what you think!"
						className="w-full appearance-none rounded border"
					/>
				</div>
				<div className="">
					<label htmlFor="rating" className="block">
						Rating
					</label>
					<div className="flex items-center">
						{Array.from({ length: 5 }, (_, i) => i + 1).map((i) => (
							<svg
								key={i}
								className={`${baseStarClassName} ${rating && rating >= i ? activeStarClassName : inactiveStarClassName} transition-all duration-200`}
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 22 20"
								onClick={() => {
									if (rating === i) {
										setRating(null);
									} else {
										setRating(i);
									}
								}}
							>
								<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
							</svg>
						))}
					</div>
				</div>
				<div className="flex flex-row items-center">
					<div className="">
						<label htmlFor="username" className="block">
							User
						</label>
						{/* TODO: change username input styling when form is disabled */}
						<input
							type="text"
							id="username"
							name="username"
							readOnly
							value={user?.username || "Please log in"}
						/>
					</div>
					<div className="">
						<label htmlFor="email" className="block">
							Email
						</label>
						{/* TODO: change email input styling when form is disabled */}
						<input
							type="email"
							id="email"
							name="email"
							readOnly
							value={user?.emailAddresses[0].emailAddress || ""}
						/>
					</div>
				</div>
				<div>
					{/* TODO: set styling for active/disabled */}
					<button
						type="submit"
						// disabled={user === null}
					>
						Submit
					</button>
				</div>
			</form>
		</>
	);
};

export default SubmitReviewForm;
