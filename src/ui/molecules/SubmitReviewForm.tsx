"use client";

import { type User } from "@clerk/nextjs/server";

const SubmitReviewForm = ({
	submitReviewAction,
	user,
}: {
	submitReviewAction: (data: FormData) => Promise<void>;
	user: User | null;
}) => {
	// TODO: add js validators instead of form-based
	return (
		<>
			<form action={submitReviewAction} data-testid="add-review-form">
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
				<div className="flex flex-row items-center">
					<div className="">
						<label htmlFor="username" className="block">
							User
						</label>
						<input type="text" id="username" name="username" readOnly />
					</div>
					<div className="">
						<label htmlFor="email" className="block">
							Email
						</label>
						<input type="email" id="email" name="email" readOnly />
					</div>
				</div>
				<div>
					{/* TODO: set styling for active/disabled */}
					<button type="submit" disabled={user === null}>
						Submit
					</button>
				</div>
			</form>
		</>
	);
};

export default SubmitReviewForm;
