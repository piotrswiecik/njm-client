import { getReviewsByProduct } from "@/api/queries/getReviewsByProduct";
import ReviewComponent from "@/ui/organisms/ReviewComponent";
import { getCurrentDbUser } from "@/lib/user";

/**
 * Wraps the ReviewComponent with server side data fetching logic.
 */
const ReviewContainer = async ({ productId }: { productId: string }) => {
	const reviews = await getReviewsByProduct(productId);
	const activeUser = await getCurrentDbUser();

	return (
		<div>
			<ReviewComponent
				reviews={reviews}
				user={activeUser}
				productId={productId}
			/>
		</div>
	);
};

export default ReviewContainer;
