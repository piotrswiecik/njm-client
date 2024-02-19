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
 * DTO for full product view with track & stock details.
 */
export type ProductDetailsDto = ProductDashboardItemDto & {
	tracks: ProductTrackDto[];
	stock: ProductStockDto;
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
	url: string;
};