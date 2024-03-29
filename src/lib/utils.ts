import { LoremIpsum } from "lorem-ipsum";
import {
	type VariantEnum,
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

/**
 * For given product and variant type, checks if variant is in stock.
 */
export const variantInStock = (
	product: ProductDetailsFragment,
	type: "cd" | "lp",
) => {
	const variant = product.variants.find((v) => v.name === type);
	if (!variant) return false;
	return variant.stock > 0;
};

/**
 * Checks if any variant of product is in stock.
 */
export const productAvailable = (product: ProductDetailsFragment) => {
	return product.variants.some((v) => v.stock > 0);
};

/**
 * Set default active variant based on stock availability.
 */
export const defaultVariant = (
	product: ProductDetailsFragment,
): VariantEnum => {
	if (!productAvailable(product)) throw new Error("Product not available");
	if (!variantInStock(product, "cd")) return "lp";
	if (!variantInStock(product, "lp")) return "cd";
	return "cd";
};

export const capitalize = (string: string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

export const lorem = new LoremIpsum({
	sentencesPerParagraph: {
		max: 6,
		min: 2,
	},
	wordsPerSentence: {
		max: 12,
		min: 4,
	},
});

// FIXME - temporary, add descriptions to database later
export const collectionNamesMapping = [
	{ name: "new", description: "New arrivals", before: "🎵" },
	{ name: "staffpicks", description: "Staff picks", before: "🎹" },
	{ name: "bestsellers", description: "Best selling", before: "🎼" },
];

export const USD = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
});
