import { currentUser } from "@clerk/nextjs";
import { getReviewsByProduct } from "@/api/queries/getReviewsByProduct";
import ReviewList from "@/ui/organisms/ReviewList";
import SubmitReviewForm from "@/ui/molecules/SubmitReviewForm";

const ReviewComponent = async ({ productId }: { productId: string }) => {
	// reviews are used to render list
	const reviews = await getReviewsByProduct(productId);

	// user is used to decide if form should be active
	const user = await currentUser();

	/**
	 * Server action used to handle review form submission.
	 * @param rating star rating value to be provided as extra binding
	 * @param formData form data from submission
	 */
	const submitReviewAction = async (
		rating: number | null,
		formData: FormData,
	): Promise<void> => {
		"use server";
		console.log("form action triggered");
		console.log(formData);
		console.log(rating);
	};

	return (
		<div className="mt-4 flex flex-col sm:flex-row sm:justify-between lg:max-w-5xl">
			<div className="w-5/12">
				<SubmitReviewForm submitReviewAction={submitReviewAction} user={user} />
			</div>
			<div className="w-6/12">
				<ReviewList reviews={reviews} />
			</div>
		</div>
	);
};

export default ReviewComponent;
