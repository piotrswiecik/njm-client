import { getReviewsByProduct } from "@/api/queries/getReviewsByProduct";
import { type ProductDetailsFragment } from "@/graphql/generated/graphql";
import ReviewItem from "@/ui/molecules/ReviewItem";

const ReviewList = async ({ product }: { product: ProductDetailsFragment }) => {
	const reviews = await getReviewsByProduct(product.id);

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

export default ReviewList;
