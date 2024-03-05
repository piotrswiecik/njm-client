import { currentUser } from "@clerk/nextjs";
import { getReviewsByProduct } from "@/api/queries/getReviewsByProduct";
import ReviewList from "@/ui/organisms/ReviewList";
import SubmitReviewForm from "@/ui/molecules/SubmitReviewForm";

const ReviewComponent = async ({ productId }: { productId: string }) => {
	// reviews are used to render list
	const reviews = await getReviewsByProduct(productId);

	// user is used to decide if form should be active
	const user = await currentUser();

	const submitReviewAction = async (data: FormData): Promise<void> => {
		"use server";
		console.log("form action triggered");
		console.log(data);
	};

	return (
		<div className="mt-4 flex flex-col sm:flex-row sm:justify-between lg:max-w-5xl">
			<div className="w-5/12">
				<SubmitReviewForm submitReviewAction={submitReviewAction} isActive={ user !== null }/>
			</div>
			<div className="w-6/12">
				<ReviewList reviews={reviews} />
			</div>
		</div>
	);
};

export default ReviewComponent;
