"use client";

const SubmitReviewForm = ({
	submitReviewAction,
	isActive,
}: {
	submitReviewAction: (data: FormData) => Promise<void>;
	isActive: boolean;
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
				<div>
					{/* TODO: set styling for active/disabled */}
					<button type="submit" disabled={!isActive}>
						Submit
					</button>
				</div>
			</form>
		</>
	);
};

export default SubmitReviewForm;
