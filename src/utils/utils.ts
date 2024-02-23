import {
	type ProductDetailsFragment,
	type ProductOverviewFragment,
} from "@/graphql/generated/graphql";

export const formatPrice = (price: number) => {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(price);
};

export const getBasicVariantPrice = (
	product: ProductOverviewFragment | ProductDetailsFragment,
) => {
	const prices = product.variants.map((v) => v.price);
	return Math.min(...prices);
};
