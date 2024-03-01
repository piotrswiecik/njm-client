"use client";

import { type UserDetailsFragment } from "@/graphql/generated/graphql";

type ReviewFormProps = {
	handler: () => void;
	user: UserDetailsFragment;
};

const ReviewForm = ({ handler, user }: ReviewFormProps) => {
	return (
		<form action={handler} className="border">
			<div className="">
				<label htmlFor="headline" className="block">
					Headline
				</label>
				<input
					type="text"
					id="headline"
					name="headline"
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
		</form>
	);
};

export default ReviewForm;
