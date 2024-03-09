import { type ProductDetailsFragment } from "@/graphql/generated/graphql";
import ProductImage from "@/ui/atoms/ProductImage";
import ProductDetailsInfo from "@/ui/molecules/ProductDetailsInfo";
import ProductDetailsSelector from "@/ui/molecules/ProductDetailsSelector";

const ProductDetailsComponent = async ({
	product,
}: {
	product: ProductDetailsFragment;
}) => {
	return (
		<div className="flex flex-col justify-start sm:flex-row">
			<div className="m-0 sm:mr-8">
				<ProductImage
					url={product.coverImageUrl}
					alt={"temp"}
					width={540}
					height={540}
				/>
			</div>
			<section className="mx-8 mt-8 flex flex-col sm:m-0 sm:w-5/12">
				<header className="border-b border-slate-400 pb-2">
					<h1 className="text-lg font-semibold">{product.title}</h1>
					<p className="italic text-slate-600">{product.artist.name}</p>
				</header>
				<section>
					<ProductDetailsInfo product={product} />
					<ProductDetailsSelector product={product} />
				</section>
			</section>
		</div>
	);
};

export default ProductDetailsComponent;
