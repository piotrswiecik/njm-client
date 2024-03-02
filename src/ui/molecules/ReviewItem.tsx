import { type ReviewDetailsFragment } from "@/graphql/generated/graphql";

const ReviewItem = async ({ review }: { review: ReviewDetailsFragment }) => {
	return (
  <>
    <div>
      <p>{review.headline}</p>
      <p>{review.content}</p>
      </div>
  </>);
};

export default ReviewItem;
