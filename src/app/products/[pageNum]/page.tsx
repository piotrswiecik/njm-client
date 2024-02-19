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

const ProductsPage = async ({ params } : { params: { pageNum: string }}) => {
	const numberOfProducts = await productService.getProductCount(); // TODO unhandled err thrown by service layer
	
	// TODO optimize this, maybe base on media query
	const PRODUCTS_PER_PAGE = 12;

	console.log(params.pageNum);

	const products = await productService.getProducts(PRODUCTS_PER_PAGE, Number(params.pageNum) * PRODUCTS_PER_PAGE);

	return (
		<div className="mx-auto max-w-7xl px-6 sm:px-12">
			<ProductDashboard products={products} />
			<div className="mt-12 flex justify-center">
				<Pagination
					totalPages={Math.ceil(numberOfProducts / PRODUCTS_PER_PAGE)}
				/>
			</div>
		</div>
	);
};

export default ProductsPage;
