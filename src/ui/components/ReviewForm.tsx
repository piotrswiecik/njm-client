"use client";

import { useState } from "react";
import { type UserDetailsFragment } from "@/graphql/generated/graphql";
import { RatingStars } from "@/ui/atoms/RatingStars";

type ReviewFormProps = {
	handler: (data: FormData) => Promise<void>;
	user: UserDetailsFragment;
	productId: string;
};

const ReviewForm = ({ handler, user, productId }: ReviewFormProps) => {
	const [headline, setHeadline] = useState("");
	const [content, setContent] = useState("");

	const isValid = () => {
		if (!headline || !content) {
			return false;
		}
		return true;
	};

	return (
		<form action={handler} className="border">
			<input type="hidden" name="userId" value={user.id} />
			<input type="hidden" name="productId" value={productId} />
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
          <RatingStars />
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
				<div>
					<button
						type="submit"
						disabled={!isValid()}
						className={`${isValid() ? null : "cursor-not-allowed "}`}
					>
						Submit
					</button>
				</div>
			</div>
		</form>
	);
};

export default ReviewForm;
