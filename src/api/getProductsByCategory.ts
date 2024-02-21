import { queryGraphql } from "@/api/gql";
import { CategoryGetProductsDocument } from "@/gql/graphql";

export const getProductsByCategory = async (name: string, take: number, skip: number) => {
  const { category } = await queryGraphql(CategoryGetProductsDocument, {name: name, skip: skip, take: take});
  
  if (!category) {
    return [];
  }
  
  const productsInCategory = category.products;
  
  if (!productsInCategory) {
    return [];
  }
  
  return productsInCategory.map((product) => (
    {
      id: product.id,
		artist: product.artist,
		category: product.category.name,
		title: product.title,
		price: product.price,
		image: {
			url: product.coverImg.url,
			width: product.coverImg.width,
			height: product.coverImg.height,
		},
		collections: [],
    }
  ));
}