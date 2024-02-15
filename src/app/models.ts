export type TProduct = {
	id: string;
	title: string;
	price: number;
	category: string;
	description: string;
	rating: {
		rate: number;
		count: number;
	};
	image: string;
	longDescription: string;
};
