import { currentUser } from "@clerk/nextjs";
import { getReviewsByProduct } from "@/api/queries/getReviewsByProduct";
import ReviewList from "@/ui/organisms/ReviewList";

const ReviewComponent = async ({ productId }: { productId: string }) => {
	// reviews are used to render list
	const reviews = await getReviewsByProduct(productId);

	// user is used to decide if form should be active
	const user = await currentUser();
	console.log(reviews);
	console.log(user);

	return (
		<div className="mt-4 flex flex-col sm:flex-row sm:justify-between lg:max-w-5xl">
			<div className="w-5/12">form</div>
			<div className="w-6/12">
				<ReviewList reviews={reviews} />
			</div>
		</div>
	);
};

export default ReviewComponent;
