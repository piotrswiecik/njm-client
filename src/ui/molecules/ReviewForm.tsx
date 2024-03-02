"use client";

import { useState } from "react";
import {
	type ProductDetailsFragment,
	type UserDetailsFragment,
} from "@/graphql/generated/graphql";
import RatingStarsSelector from "@/ui/atoms/RatingStarsSelector";
import { type ReviewFormData } from "@/lib/types";

type ReviewFormProps = {
	handler: (data: ReviewFormData) => Promise<void>;
	user: UserDetailsFragment;
	product: ProductDetailsFragment;
};

const ReviewForm = ({ handler, user, product }: ReviewFormProps) => {
	const [headline, setHeadline] = useState("");
	const [content, setContent] = useState("");
	const [rating, setRating] = useState(0);

	// TODO: make this reusable in global styles
	const activeClassName = `mb-2 me-2 rounded-lg border border-gray-800 px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-800`;
	const disabledClassName = `cursor-not-allowed mb-2 me-2 cursor-default rounded-lg border border-gray-400 px-5 py-2.5 text-center text-sm font-medium text-gray-400 dark:border-gray-600 dark:text-gray-400`;

	const isValid = () => {
		if (!headline || !content) {
			return false;
		}
		if (rating === 0) {
			return false;
		}
		return true;
	};

	const ratingHandler = (selected: number) => {
		if (selected < 0) {
			setRating(0);
			return;
		}
		const rating = selected > 4 ? 5 : selected + 1;
		setRating(rating);
	};

	return (
		<form
			action={() =>
				handler({
					userId: user.id,
					productId: product.id,
					headline: headline,
					content: content,
					rating: rating,
				})
			}
			className="border"
			data-testid="add-review-form"
		>
			<input type="hidden" name="userId" value={user.id} />
			<input type="hidden" name="productId" value={product.id} />
			<input type="hidden" name="rating" value={rating} />
			<div className="">
				<label htmlFor="headline" className="block">
					Headline
				</label>
				<input
					type="text"
					id="headline"
					name="headline"
					value={headline}
					onChange={(e) => setHeadline(e.target.value)}
					placeholder="Enter review headline"
					className="w-full appearance-none rounded border"
				/>
			</div>
			<div className="">
				<label htmlFor="content" className="block">
					Content
				</label>
				<textarea
					id="content"
					name="content"
					value={content}
					onChange={(e) => setContent(e.target.value)}
					placeholder="Tell us what you think!"
					autoComplete="false"
					autoCorrect="false"
					rows={5}
					className="w-full resize-none appearance-none rounded border"
				/>
			</div>
			<div className="">
				<label htmlFor="rating" className="block">
					Rating
				</label>
				<div id="rating">
					<RatingStarsSelector handler={ratingHandler} />
				</div>
			</div>
			<div className="flex flex-row items-center">
				<div className="">
					<label htmlFor="username" className="block">
						User
					</label>
					<input
						type="text"
						id="username"
						name="username"
						readOnly
						value={user.name}
					/>
				</div>
				<div className="">
					<label htmlFor="email" className="block">
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						readOnly
						value={user.email}
					/>
				</div>
			</div>
			<div>
				<button
					type="submit"
					disabled={!isValid()}
					className={`${isValid() ? activeClassName : disabledClassName}`}
				>
					Submit
				</button>
			</div>
		</form>
	);
};

export default ReviewForm;
