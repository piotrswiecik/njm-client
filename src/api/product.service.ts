import { type Product } from "@/app/models";
import { type TypedDocumentString } from "@/gql/graphql";

const getProducts = async (take: number, offset: number) => {
	try {
		const productsResponse = await fetch(
			`https://naszsklep-api.vercel.app/api/products?take=${take}&offset=${offset}`,
		);
		const products = (await productsResponse.json()) as Product[];
		return products.slice(0, 20);
	} catch (err) {
		console.error("Product API error", err);
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
		const products = (await productResponse.json()) as Product[];
		return products.length;
	} catch (err) {
		console.error("Product API error", err);
		throw err; // rethrow & catch in ui
	}
};

const queryGraphql = async <TResult, TVariables>(
	query: TypedDocumentString<TResult, TVariables>,
	variables: TVariables,
): Promise<TResult> => {
	console.log("fetching");

	// TODO de-hardcode api url
	const res = await fetch("http://localhost:8000/graphql", {
		method: "POST",
		body: JSON.stringify({ query, variables }),
		headers: {
			"Content-Type": "application/json",
		},
	});

	type GraphqlResponse<T> =
		| { data?: undefined; errors: { message: string }[] }
		| { data: T; errors?: undefined };

	const graphqlResponse: GraphqlResponse<TResult> =
		(await res.json()) as GraphqlResponse<TResult>;

	if (graphqlResponse.errors) {
		throw new Error(graphqlResponse.errors[0].message);
	}

	return graphqlResponse.data;
};

export const productService = {
	getProducts,
	getProductById,
	getNumberOfProducts,
	queryGraphql,
};
