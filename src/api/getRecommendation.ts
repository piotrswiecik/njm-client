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
	take?: number,
): Promise<ProductRecommendationDto[]> => {
	try {
		const allProductsInCategory = await getProductsByCategory(criteria.categoryName);
		return allProductsInCategory
			.sort(() => Math.random() - 0.5)
			.slice(0, take || 5);
	} catch (err) {
		// TODO handle err
		console.error(err);
		throw err;
	}
};
