import { queryGraphql } from "@/api/gql";
import { CategoryGetProductsDocument } from "@/gql/graphql";

export const getProductsByCategory = async (name: string) => {
  const { category } = await queryGraphql(CategoryGetProductsDocument, {name: name });
  
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
      title: product.title,
      image: {
        url: product.coverImg.url,
        width: product.coverImg.width,
        height: product.coverImg.height,
      },
      collections: [],
    }
  ));
}