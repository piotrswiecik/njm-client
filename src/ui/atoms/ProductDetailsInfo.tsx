import { type Product } from "@/app/models";

type ProductDetailsProps = {
	product: Product;
};

const ProductDetailsInfo = ({ product }: ProductDetailsProps) => {
	return (
		<>
			<div>test product details</div>
		</>
	);
};

export default ProductDetailsInfo;
