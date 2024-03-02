import {
	type ProductDetailsFragment,
	type UserDetailsFragment,
} from "@/graphql/generated/graphql";

export type SubmitReviewInput = {
	user: UserDetailsFragment;
	product: ProductDetailsFragment;
	headline: string;
	content: string;
	rating: number;
};

export type SubmitReviewAction = (data: SubmitReviewInput) => Promise<void>;
