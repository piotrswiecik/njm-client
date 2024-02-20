import { type ProductDetailsDto } from "@/api/models";
import ProductInfoPanel from "@/ui/atoms/ProductDetailsInfo";
import ProductImage from "@/ui/atoms/ProductImage";

const ProductDetails = async ({ product }: { product: ProductDetailsDto }) => {
	return (
		<div className="mx-auto flex max-w-7xl flex-col justify-start px-6 sm:flex-row sm:px-12">
			<div className="m-0 sm:mr-8">
				<ProductImage url={product.image.url} alt={"temp"} />
			</div>
			<section className="m-8 flex flex-col sm:m-0 sm:w-5/12">
					<ProductInfoPanel product={product} />
			</section>
		</div>
	);
};

export default ProductDetails;
