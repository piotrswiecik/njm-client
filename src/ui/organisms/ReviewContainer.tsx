import { currentUser } from "@clerk/nextjs";
import { getReviewsByProduct } from "@/api/queries/getReviewsByProduct";
import ReviewComponent from "@/ui/organisms/ReviewComponent";

// this is a hacky solution to pull data
const ReviewContainer = async ({ productId }: { productId: string }) => {
	// reviews are used to render list
	const reviews = await getReviewsByProduct(productId);

	// user is used to decide if form should be active
	const user = await currentUser();

	return (
		<div>
			<ReviewComponent reviews={reviews} user={user} />
		</div>
	);
};

export default ReviewContainer;
