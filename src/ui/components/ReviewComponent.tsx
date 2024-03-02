import ReviewFormContainer from "@/ui/components/ReviewFormContainer";
import ReviewsList from "@/ui/components/ReviewList";

const ReviewComponent = async ({ productId }: { productId: string }) => {
	return (
		<div className="mt-4">
			<h2 className="mb-2 font-bold sm:text-xl">Customer reviews</h2>
			<div className="mt-4 flex flex-col sm:max-w-xl sm:flex-row sm:justify-between lg:max-w-5xl">
				<div className="w-5/12">
					<ReviewFormContainer productId={productId} />
				</div>
				<div className="w-5/12">
					<ReviewsList productId={productId} />
				</div>
			</div>
		</div>
	);
};

export default ReviewComponent;
