import { getUserById } from "@/api/queries/getUserById";
import ReviewForm from "@/ui/components/ReviewForm";

const handlePostReviewAction = async () => {
	"use server";
	console.log("post review action");
};

// server side - use it to pull user data for children
const ReviewFormContainer = async ({
	params,
}: {
	params: { productId: string };
}) => {
	// TODO: maybe better use normal props to make this component independent? idk yet

	const userData = await getUserById("dbe0705a-87d0-4c11-9432-f55895360016");
	console.log(userData);

	return (
		<section>
			<ReviewForm handler={handlePostReviewAction} user={userData} />
		</section>
	);
};

export default ReviewFormContainer;
