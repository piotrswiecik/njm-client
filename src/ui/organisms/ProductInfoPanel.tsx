import { addItemToCart } from "@/api/cart";
import {
	type OrderItemDetailsFragment,
	type ProductDetailsFragment,
} from "@/graphql/generated/graphql";
import ProductInfoTable from "@/ui/atoms/ProductInfoTable";
import ProductDetailsManager from "@/ui/organisms/ProductDetailsManager";

type ProductDetailsProps = {
	product: ProductDetailsFragment;
};

export type CartDto = {
	id: string;
	orderItems: OrderItemDetailsFragment[];
	user: {
		id: string;
	};
} | null;

// TODO: refactor into subcomponents & atoms, create reusable server actions
const ProductInfoPanel = ({ product }: ProductDetailsProps) => {
	return (
		<>
			<header className="border-b border-slate-400 pb-2">
				<h1 className="text-lg font-semibold">{product.title}</h1>
				<p className="italic text-slate-600">{product.artist.name}</p>
			</header>
			<section className="">
				<ProductInfoTable product={product} />
				<ProductDetailsManager product={product} addItemToCartHandler={addItemToCart}/>
			</section>
		</>
	);
};

export default ProductInfoPanel;
