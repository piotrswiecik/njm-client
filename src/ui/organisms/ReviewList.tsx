import { getReviewsByProduct } from "@/api/queries/getReviewsByProduct";
import ReviewItem from "@/ui/molecules/ReviewItem";

const ReviewsList = async ({ productId }: { productId: string }) => {
	const reviews = await getReviewsByProduct(productId);

	if (reviews.length === 0) {
		return (
			<section>
				<p>No reviews yet</p>
			</section>
		);
	}

	return (
		<section>
			{reviews.map((review) => (
				<ReviewItem key={review.id} review={review} />
			))}
		</section>
	);
};

export default ReviewsList;
