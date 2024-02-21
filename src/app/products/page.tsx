import { type Metadata } from "next";
import ProductDashboard from "@/ui/components/ProductDashboard";
import Pagination from "@/ui/components/Pagination";
import { getProductCount } from "@/api/getProductCount";
import { getProducts } from "@/api/getProducts";

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
	const numberOfProducts = await getProductCount(); // TODO unhandled err thrown by service layer
	
	// TODO optimize this, maybe base on media query
	const PRODUCTS_PER_PAGE = 12;

	const products = await getProducts(PRODUCTS_PER_PAGE, 0);

	return (
		<div className="px-6 sm:px-12">
			<ProductDashboard products={products} />
			<div className="mt-12 flex justify-center">
				<Pagination
					totalPages={Math.ceil(numberOfProducts / PRODUCTS_PER_PAGE)}
					corePathSegment="products"
				/>
			</div>
		</div>
	);
};

export default ProductsPage;
