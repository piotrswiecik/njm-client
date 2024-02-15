import { type Product } from "@/app/models";

const getAllProducts = async () => {
	try {
		const productsResponse = await fetch(
			"https://naszsklep-api.vercel.app/api/products?take=20",
		);
		const products = (await productsResponse.json()) as Product[];
		return products;
	} catch (err) {
		console.error("Error fetching products", err);
		throw err; // rethrow & catch in ui
	}
};

const getProductById = async (productId: string) => {
	try {
		const productResponse = await fetch(
			`https://naszsklep-api.vercel.app/api/products/${productId}`,
		);
		const product = (await productResponse.json()) as Product;
		return product;
	} catch (err) {
		console.error("Error fetching product", err);
		throw err; // rethrow & catch in ui
	}
};

export const productService = {
	getAllProducts,
	getProductById,
};
