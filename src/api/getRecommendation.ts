import { getProductsByCategory } from "@/api/getProductsByCategory";
import { type ProductOverviewFragment } from "@/graphql/generated/graphql";

type Criteria = {
	categoryName: string;
};

/**
 * Placeholder for recommendation logic. Returns random products from given category.
 */
export const getRecommendation = async (
	criteria: Criteria,
	take?: number,
): Promise<ProductOverviewFragment[]> => {
	try {
		const allProductsInCategory = await getProductsByCategory(
			criteria.categoryName,
		);
		return allProductsInCategory
			.sort(() => Math.random() - 0.5)
			.slice(0, take || 5);
	} catch (err) {
		// TODO handle err
		console.error(err);
		throw err;
	}
};
