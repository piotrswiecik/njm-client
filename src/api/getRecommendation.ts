import { getProductsByCategory } from "@/api/getProductsByCategory";
import { type ProductRecommendationDto } from "@/api/models";

type Criteria = {
	categoryName: string;
};

/**
 * Placeholder for recommendation logic. Returns random products from given category.
 */
export const getRecommendation = async (
	criteria: Criteria,
	take: number | undefined,
): Promise<ProductRecommendationDto[]> => {
	try {
		const allProductsInCategory = await getProductsByCategory(
			criteria.categoryName,
		);
		return allProductsInCategory
			.sort(() => Math.random() - 0.5)
			.slice(0, take || 5)
			.map((product) => ({
				id: product.id,
				artist: product.artist,
				title: product.title,
				image: {
					url: product.image.url,
					width: product.image.width,
					height: product.image.height,
				},
			}));
	} catch (err) {
		// TODO handle err
		console.error(err);
		throw err;
	}
};
