import {
	type OrderItemDetailsFragment,
	type ProductDetailsFragment,
} from "@/graphql/generated/graphql";
import ProductInfoTable from "@/ui/atoms/ProductInfoTable";
import ProductDetailsManager from "@/ui/components/ProductDetailsManager";

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

const ProductInfoPanel = ({ product }: ProductDetailsProps) => {
	return (
		<>
			<header className="border-b border-slate-400 pb-2">
				<h1 className="text-lg font-semibold">{product.title}</h1>
				<p className="italic text-slate-600">{product.artist.name}</p>
			</header>
			<section className="">
				<ProductInfoTable product={product} />
				<ProductDetailsManager product={product} />
			</section>
		</>
	);
};

export default ProductInfoPanel;
