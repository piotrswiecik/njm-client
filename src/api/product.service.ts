import { type Product } from "@/app/models";

const getAllProducts = async () => {
	try {
		const productsResponse = await fetch(
			"https://naszsklep-api.vercel.app/api/products?take=20",
		);
		const products = (await productsResponse.json()) as Product[];
		return products;
	} catch (err) {
		// TODO error handling
		console.error(err);
		return [];
	}
};

export const productService = {
	getAllProducts,
};
