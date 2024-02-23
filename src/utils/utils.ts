import { type ProductOverview } from "@/api/getProducts";
import { type Product } from "@/graphql/generated/graphql";

export const formatPrice = (price: number) => {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(price);
};

export const getBasicVariantPrice = (
	product: ProductOverview | Product,
) => {
	const prices = product.variants.map((v) => v.price);
	return Math.min(...prices);
};
