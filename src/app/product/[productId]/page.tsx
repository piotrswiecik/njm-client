import { type Metadata } from "next";
import { productService } from "@/api/product.service";
import ProductDetails from "@/ui/components/ProductDetails";

export async function generateMetadata({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> {
	return {
		title: "todo",
		// description: product.description,
		generator: "Next.js",
		applicationName: "NJM Record Store",
		keywords: ["music", "vinyl", "records", "albums", "store"],
		authors: [ { name: "NJM Record Store" }, { name: "piotr.swiecik@gmail.com" }, { name: "capricorndev" } ],
		creator: "Piotr Święcik",
	};
}

const ProductDetailsPage = async ({
	params,
}: {
	params: { productId: string };
}) => {
	// TODO unhandled err thrown by service layer
	const product = await productService.getProductById(params.productId);
	return <ProductDetails product={product} />;
};

export default ProductDetailsPage;
