/**
 * DTO for short product view with no track & stock details.
 */
export type ProductDashboardItemDto = {
	id: string;
	title: string;
	artist: string;
	price: number;
	category: string;
	image: ProductCoverImageDto;
	collections?: ProductCollectionDto[];
};

/**
 * Represents a category with nested product list.
 */
export type ProductInCategoryDto = Omit<ProductDashboardItemDto, "price" | "category" | "collections">;
export type CategoryDto = {
	name: string;
	products: ProductInCategoryDto[];
}

/**
 * Represents recommender generated item.
 */
export type ProductRecommendationDto = Omit<ProductDashboardItemDto, "price" | "collections" | "category">;

/**
 * DTO for full product view with track & stock details.
 */
export type ProductDetailsDto = ProductDashboardItemDto & {
	tracks: ProductTrackDto[];
	stock: ProductStockDto;
	releaseDate: string;
}

export type ProductCoverImageDto = {
	url: string;
	width: number;
	height: number;
};

export type ProductCollectionDto = {
	name: string;
};

export type ProductStockDto = {
	qtyCd: number;
	qtyLp: number;
};

export type ProductTrackDto = {
	name: string;
	url?: string;
};