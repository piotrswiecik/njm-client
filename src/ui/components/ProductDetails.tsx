import { type Product } from "@/graphql/generated/graphql";
import ProductInfoPanel from "@/ui/atoms/ProductDetailsInfo";
import ProductImage from "@/ui/atoms/ProductImage";

const ProductDetailsComponent = async ({
	product,
}: {
	product: Product;
}) => {
	return (
		<div className="flex flex-col justify-start sm:flex-row">
			<div className="m-0 sm:mr-8">
				<ProductImage url={product.coverImageUrl} alt={"temp"} />
			</div>
			<section className="mx-8 mt-8 flex flex-col sm:m-0 sm:w-5/12">
				<ProductInfoPanel product={product} />
			</section>
		</div>
	);
};

export default ProductDetailsComponent;
