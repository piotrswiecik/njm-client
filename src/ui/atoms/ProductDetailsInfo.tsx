import { type Product } from "@/app/models";
import { formatPrice } from "@/utils/utils";

type ProductDetailsProps = {
	product: Product;
};

// TODO maybe refactor into subcomponents - atoms
const ProductDetailsInfo = ({ product }: ProductDetailsProps) => {
	return (
		<>
			<div className="italic text-slate-600">{product.category}</div>

			<div className="my-8">{product.description}</div>
			<div className="flex flex-row items-baseline justify-between">
				<div className="text-xl">

        {formatPrice(product.price)}
        </div>
				<button
					type="button"
					className="mb-2 me-2 rounded-lg border border-gray-800 px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-800"
				>
					Add to cart
				</button>
			</div>
		</>
	);
};

export default ProductDetailsInfo;
