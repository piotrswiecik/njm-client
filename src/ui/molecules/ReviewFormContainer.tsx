import { getUserById } from "@/api/queries/getUserById";
import { queryGraphql } from "@/api/queryGraphql";
import { ReviewCreateDocument } from "@/graphql/generated/graphql";
import ReviewForm, { type ReviewFormData } from "@/ui/molecules/ReviewForm";

const handlePostReviewAction = async (data: ReviewFormData) => {
	"use server";

	// TODO: optimistic update
	console.log("post review action");
	console.log(data);
	try {
		// FIXME: delay for testing
		await new Promise((resolve) => setTimeout(resolve, 3000));

		const { createReview } = await queryGraphql({
			query: ReviewCreateDocument,
			variables: {
				userId: data.userId,
				productId: data.productId,
				headline: data.headline,
				content: data.content,
				rating: data.rating,
			},
		});
		if (!createReview || !createReview.id) {
			throw new Error("Review not created");
		}
	} catch (err) {
		// TODO: error boundary
		console.log(err);
		throw new Error("Review not created");
	}
};

const ReviewFormContainer = async ({ productId }: { productId: string }) => {
	// FIXME: dehardcode user id
	const userData = await getUserById("dbe0705a-87d0-4c11-9432-f55895360016");

	return (
		<section>
			<ReviewForm
				handler={handlePostReviewAction}
				user={userData}
				productId={productId}
			/>
		</section>
	);
};

export default ReviewFormContainer;
