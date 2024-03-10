"use client";

import { useState } from "react";
import { type UserDetailsFragment } from "@/graphql/generated/graphql";

const SubmitReviewForm = ({
	submitReviewAction,
	user,
	active,
}: {
	submitReviewAction: (rating: number | null, form: FormData) => Promise<void>;
	user?: UserDetailsFragment;
	active: boolean;
}) => {
	const activeStarClassName = "text-yellow-300";
	const inactiveStarClassName = "text-slate-100";
	const baseStarClassName = "ms-1 h-4 w-4";
	// TODO: refactor out
	const activeButtonClassName = `mb-2 me-2 rounded-lg border border-gray-800 px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-800`;
	const inactiveButtonClassName = `mb-2 me-2 cursor-default rounded-lg border border-gray-400 px-5 py-2.5 text-center text-sm font-medium text-gray-400 dark:border-gray-600 dark:text-gray-400`;

	const [rating, setRating] = useState<number | null>(null);

	// pass rating with bind instead of using hidden form input
	const formAction = submitReviewAction.bind(null, rating);

	// TODO: add js validators instead of form-based
	return (
		<>
			<form action={formAction} data-testid="add-review-form" className="">
				<div className="mb-4">
					<label htmlFor="headline" className="mb-2 block text-sm font-bold">
						Headline
					</label>
					<input
					autoComplete="off"
						type="text"
						id="headline"
						name="headline"
						required
						placeholder="Enter review headline"
						className="focus:shadow-outline w-full appearance-none rounded border px-2 py-1 text-sm leading-tight text-slate-600 focus:outline-none sm:text-base"
					/>
				</div>
				<div className="mb-4">
					<label htmlFor="content" className="mb-2 block text-sm font-bold">
						Content
					</label>
					<input
					autoComplete="off"
						type="text"
						id="content"
						name="content"
						required
						placeholder="Tell us what you think!"
						className="focus:shadow-outline w-full appearance-none rounded border px-2 py-1 text-sm leading-tight text-slate-600 focus:outline-none sm:text-base"
					/>
				</div>
				<div className="mb-4">
					<label htmlFor="rating" className="mb-2 block text-sm font-bold">
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
				<div className="mb-4 flex flex-row items-center">
					<div className="">
						<label htmlFor="username" className="mb-2 block text-sm font-bold">
							User
						</label>
						{/* TODO: change username input styling when form is disabled */}
						<input
							type="text"
							id="username"
							name="username"
							readOnly
							value={user?.name || "Please log in"}
							className="focus:shadow-outline appearance-none rounded border px-2 py-1 text-sm leading-tight text-slate-600 focus:outline-none sm:text-base"
						/>
					</div>
					<div className="">
						<label
							htmlFor="email"
							className="mx-4 mb-2 block text-sm font-bold"
						>
							Email
						</label>
						{/* TODO: change email input styling when form is disabled */}
						<input
							type="email"
							id="email"
							name="email"
							readOnly
							value={user?.email || ""}
							className="focus:shadow-outline mx-4 appearance-none rounded border px-2 py-1 text-sm leading-tight text-slate-600 focus:outline-none sm:text-base"
						/>
					</div>
				</div>
				<div>
					{/* TODO: set styling for active/disabled */}
					<button
						type="submit"
						disabled={!active || !rating}
						className={`${active && rating ? activeButtonClassName : inactiveButtonClassName}`}
					>
						Submit
					</button>
				</div>
			</form>
		</>
	);
};

export default SubmitReviewForm;
