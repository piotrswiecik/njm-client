import { getUserById } from "@/api/queries/getUserById";
import { queryGraphql } from "@/api/queryGraphql";
import { ReviewCreateDocument } from "@/graphql/generated/graphql";
import ReviewForm, { type ReviewFormData } from "@/ui/components/ReviewForm";

const handlePostReviewAction = async (data: ReviewFormData) => {
	"use server";
	console.log("post review action");
	console.log(data);
	// const result = await queryGraphql(ReviewCreateDocument, {
	// 	userId: data.get("userId"),
	// 	productId: data.get("productId"),
	// 	headline: data.get("headline"),
	// 	content: data.get("content"),
	// 	rating: parseInt(data.get("rating") as string),
	// });
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
