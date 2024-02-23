/**
 * DTO for short product view with no additional details.
 * To be used on dashboard views.
 */
export type ProductOverviewDto = {
	id: string;
	title: string;
	artist: ArtistDto;
	category: string;
	coverImageUrl: string;
	variants: VariantDto[];
};

/**
 * DTO for product detail view.
 */
export type ProductDetailsDto = ProductOverviewDto & {
	tracks: TrackDto[];
	releaseDate: string;
};

/**
 * Represents a category with nested product list.
 */
export type ProductInCategoryDto = Omit<ProductOverviewDto, "category">;
export type CategoryDto = {
	name: string;
	products: ProductInCategoryDto[];
};

/**
 * Represents recommender generated item.
 */
export type ProductRecommendationDto = Omit<
	ProductOverviewDto,
	"price" | "collections" | "category"
>;

export type CollectionDto = {
	name: string;
	products: ProductOverviewDto[];
};

export type ArtistDto = {
	name: string;
};

export type VariantDto = {
	name: string;
	price: number;
	stock: number;
};

export type TrackDto = {
	name: string;
	url?: string;
};
