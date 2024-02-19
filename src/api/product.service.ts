import { queryGraphql } from "@/api/gql.service";
import { type ProductDetailsDto, type ProductDashboardItemDto } from "@/api/models";
import {
	ProductsCountDocument,
	ProductsOverviewDataDocument,
	ProductDetailsDataDocument,
} from "@/gql/graphql";

const getProducts = async (
	take: number,
	skip?: number,
): Promise<ProductDashboardItemDto[]> => {
	// raw graphql data
	const { products } = await queryGraphql(ProductsOverviewDataDocument, {
		take,
		skip,
	});

	if (!products) {
		return [];
	}
	// map to dto
	return products.map((product) => ({
		id: product.id,
		artist: product.artist,
		category: product.category,
		title: product.title,
		price: product.price,
		image: {
			url: product.coverImg.url,
			width: product.coverImg.width,
			height: product.coverImg.height,
		},
		collections: [],
	}));
};

const getProductById = async (
	productId: string,
): Promise<ProductDetailsDto | null> => {
	try {
		const { product } = await queryGraphql(ProductDetailsDataDocument, {
			productId,
		});
		if (!product) {
			return null;
		}
		return {
			id: product.id,
			artist: product.artist,
			category: product.category,
			title: product.title,
			price: product.price,
			image: {
				url: product.coverImg.url,
				width: product.coverImg.width,
				height: product.coverImg.height,
			},
			releaseDate: product.releaseDate,
			stock: {
				qtyCd: product.stock.qtyCd,
				qtyLp: product.stock.qtyLp,
			},
			tracks: product.tracks.map((track) => ({
				name: track.name,
			})),
		};
	} catch (err) {
		console.error("Product API error", err);
		throw err; // rethrow & catch in ui
	}
};

// TODO this will require some form of caching but for now it's problematic because of the size
const getProductCount = async () => {
	try {
		const { count } = await queryGraphql(ProductsCountDocument, {});
		return count;
	} catch (err) {
		console.error("Product API error", err);
		throw err; // rethrow & catch in ui
	}
};

export const productService = {
	getProducts,
	getProductById,
	getProductCount,
};
