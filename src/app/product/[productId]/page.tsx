import { type Metadata } from "next";
import { productService } from "@/api/product.service";
import ProductDetails from "@/ui/components/ProductDetails";
import { type ProductDetailsDto } from "@/api/models";

export async function generateMetadata({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> {
	const product: ProductDetailsDto | null = await productService.getProductById(
		params.productId,
	);
	return {
		title: product?.title,
		description: product?.artist + " - " + product?.title,
		generator: "Next.js",
		applicationName: "NJM Record Store",
		keywords: ["music", "vinyl", "records", "albums", "store"],
		authors: [
			{ name: "NJM Record Store" },
			{ name: "piotr.swiecik@gmail.com" },
			{ name: "capricorndev" },
		],
		creator: "Piotr Święcik",
	};
}

const ProductDetailsPage = async ({
	params,
}: {
	params: { productId: string };
}) => {
	// TODO unhandled err thrown by service layer
	const product: ProductDetailsDto | null = await productService.getProductById(
		params.productId,
	);
	if (!product) {
		return null; // TODO 404 later
	}
	return (
		<section className="mx-auto max-w-7xl px-6 sm:px-12">
			<ProductDetails product={product} />
			Recommended items
		</section>
	);
};

export default ProductDetailsPage;
