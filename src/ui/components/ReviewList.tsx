import { queryGraphql } from "@/api/queryGraphql";
import { ReviewsGetByProductDocument } from "@/graphql/generated/graphql";

const ReviewsList = async ({ productId }: { productId: string }) => {
	// TODO: probably export to separate module
	const { productReviews } = await queryGraphql({
		query: ReviewsGetByProductDocument,
		variables: {
			productId: productId,
		},
	});

	if (productReviews.length === 0) {
		return (<section>
			<p>No reviews yet</p>
		</section>);
	}

	return (<section>
		{
			productReviews.map((review) => (
				<div key={review.id}>
					<h3>{review.headline}</h3>
					<p>{review.content}</p>
				</div>
			))
		}
	</section>);
};

export default ReviewsList;
