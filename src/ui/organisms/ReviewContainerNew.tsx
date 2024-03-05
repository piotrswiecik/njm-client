import { getReviewsByProduct } from "@/api/queries/getReviewsByProduct";

const ReviewComponent = async ({ productId }: { productId: string }) => {
  const reviews = await getReviewsByProduct(productId);
  console.log(reviews);

	return (
		<div>
			<h1>Review Component for product {productId}</h1>
		</div>
	);
};

export default ReviewComponent;
