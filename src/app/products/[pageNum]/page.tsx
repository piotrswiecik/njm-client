import { type Metadata } from "next";
import ProductDashboard from "@/ui/components/ProductDashboard";
import Pagination from "@/ui/organisms/Pagination";
import { getProductCount } from "@/api/queries/getProductCount";
import { getProducts } from "@/api/queries/getProducts";

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

export async function generateStaticParams() {
	const numberOfProducts = await getProductCount();
	const PRODUCTS_PER_PAGE = 12;
	const totalPages = Math.ceil(numberOfProducts / PRODUCTS_PER_PAGE);
	return Array.from({ length: totalPages }, (_, i) => (i + 1).toString());
}

const ProductsPage = async ({ params }: { params: { pageNum: string } }) => {
	const numberOfProducts = await getProductCount(); // TODO unhandled err thrown by service layer

	// TODO optimize this, maybe base on media query
	const PRODUCTS_PER_PAGE = 12;

	const products = await getProducts(
		PRODUCTS_PER_PAGE,
		(Number(params.pageNum) - 1) * PRODUCTS_PER_PAGE,
	);

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
