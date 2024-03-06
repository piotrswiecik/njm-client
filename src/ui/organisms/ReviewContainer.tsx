import { currentUser } from "@clerk/nextjs";
import { getReviewsByProduct } from "@/api/queries/getReviewsByProduct";
import ReviewComponent from "@/ui/organisms/ReviewComponent";

/**
 * Wraps the ReviewComponent with server side data fetching logic.
 */
const ReviewContainer = async ({ productId }: { productId: string }) => {
	const reviews = await getReviewsByProduct(productId);
	const user = await currentUser();

	return (
		<div>
			<ReviewComponent reviews={reviews} user={user} productId={productId} />
		</div>
	);
};

export default ReviewContainer;
