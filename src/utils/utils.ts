import { type ProductDetailsDto, type ProductOverviewDto } from "@/api/models";

export const formatPrice = (price: number) => {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(price);
};

export const getBasicVariantPrice = (
	product: ProductOverviewDto | ProductDetailsDto,
) => {
	const prices = product.variants.map((v) => v.price);
	return Math.min(...prices);
};
