import { handlePostReviewAction } from "@/actions/handlePostReviewAction";
import { getUserById } from "@/api/queries/getUserById";
import { type ProductDetailsFragment } from "@/graphql/generated/graphql";
import ReviewForm from "@/ui/molecules/ReviewForm";
import ReviewList from "@/ui/organisms/ReviewList";

const ReviewContainer = async ({
	product,
}: {
	product: ProductDetailsFragment;
}) => {
	// FIXME: dehardcode user id
	const user = await getUserById("dbe0705a-87d0-4c11-9432-f55895360016");

	return (
		<div className="mt-4">
			<h2 className="mb-2 font-bold sm:text-xl">Customer reviews</h2>
			<div className="mt-4 flex flex-col sm:max-w-xl sm:flex-row sm:justify-between lg:max-w-5xl">
				<div className="w-5/12">
					<ReviewForm product={product} handler={handlePostReviewAction} user={user}/>
				</div>
				<div className="w-6/12">
					<ReviewList product={product} />
				</div>
			</div>
		</div>
	);
};

export default ReviewContainer;
