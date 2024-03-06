import { currentUser } from "@clerk/nextjs";
import { getReviewsByProduct } from "@/api/queries/getReviewsByProduct";
import ReviewComponent from "@/ui/organisms/ReviewComponent";
import { getUserById } from "@/api/queries/getUserById";
import { type UserDetailsFragment } from "@/graphql/generated/graphql";

/**
 * Wraps the ReviewComponent with server side data fetching logic.
 */
const ReviewContainer = async ({ productId }: { productId: string }) => {
	const reviews = await getReviewsByProduct(productId);
	const user = await currentUser();
	console.log(user);
	let activeUser: UserDetailsFragment | undefined;
	if (user) {
		const dbUser = await getUserById(user.id);
		if (dbUser) {
			activeUser = dbUser;
		}
	}

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
