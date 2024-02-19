import { queryGraphql } from "@/api/gql.service";
import { type ProductDashboardItemDto } from "@/api/models";
import { ProductsOverviewDataDocument } from "@/gql/graphql";

const getProducts = async (take: number, skip?: number): Promise<ProductDashboardItemDto[]> => {
	// raw graphql data
	const { products } = await queryGraphql(ProductsOverviewDataDocument, { take, skip });

	if (!products) {
		return [];
	}
	// map to dto
	return products.map((product) => ({
		id: product!.id,
		artist: product!.artist,
		category: product!.category,
		title: product!.title,
		price: product!.price,
		image: {
			url: product!.coverImg.url,
			width: product!.coverImg.width,
			height: product!.coverImg.height,
		},
		collections: [],
	}));

	// try {
	// 	const productsResponse = await fetch(
	// 		`https://naszsklep-api.vercel.app/api/products?take=${take}&offset=${offset}`,
	// 	);
	// 	const products =
	// 		(await productsResponse.json()) as ProductDashboardItemDto[];
	// 	return products.slice(0, 20);
	// } catch (err) {
	// 	console.error("Product API error", err);
	// 	throw err; // rethrow & catch in ui
	// }
};

const getProductById = async (productId: string) => {
	try {
		const productResponse = await fetch(
			`https://naszsklep-api.vercel.app/api/products/${productId}`,
		);
		const product = (await productResponse.json()) as ProductDashboardItemDto;
		return product;
	} catch (err) {
		console.error("Product API error", err);
		throw err; // rethrow & catch in ui
	}
};

// TODO this will require some form of caching but for now it's problematic because of the size
const getNumberOfProducts = async () => {
	try {
		const productResponse = await fetch(
			`https://naszsklep-api.vercel.app/api/products?take=-1`,
			{ cache: "no-store" },
		);
		const products =
			(await productResponse.json()) as ProductDashboardItemDto[];
		return products.length;
	} catch (err) {
		console.error("Product API error", err);
		throw err; // rethrow & catch in ui
	}
};

export const productService = {
	getProducts,
	getProductById,
	getNumberOfProducts,
};
