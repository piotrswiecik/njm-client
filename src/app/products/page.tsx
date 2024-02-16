import { type Metadata } from "next";
import { productService } from "@/api/product.service";
import ProductDashboard from "@/ui/components/ProductDashboard";
import Pagination from "@/ui/components/Pagination";

export const metadata: Metadata = {
	title: "NJM Record Store - Products",
	description: "NJM Record Store - Products",
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

const ProductsPage = async () => {
	const products = await productService.getAllProducts(); // TODO unhandled err thrown by service layer

	return (
		<div className="mx-auto max-w-7xl px-6 sm:px-12">
			<ProductDashboard products={products} />
			<div className="flex mt-12 justify-center">
				<Pagination totalPages={10} />
			</div>
		</div>
	);
};

export default ProductsPage;
