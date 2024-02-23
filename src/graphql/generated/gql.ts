/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query CategoryCount($name: String!) {\n  categoryCount(name: $name)\n}": types.CategoryCountDocument,
    "query CategoryFindByNameWithPaginatedProducts($name: String!, $skip: Int, $take: Int) {\n  category(name: $name) {\n    products(skip: $skip, take: $take) {\n      id\n      artist {\n        name\n      }\n      title\n      category {\n        name\n      }\n      coverImageUrl\n      variants {\n        name\n        price\n        stock\n      }\n    }\n  }\n}": types.CategoryFindByNameWithPaginatedProductsDocument,
    "query CollectionFindAll {\n  collections {\n    id\n    name\n  }\n}": types.CollectionFindAllDocument,
    "query CollectionFindByNameWithAllProducts($name: String!) {\n  collection(name: $name) {\n    id\n    name\n    products {\n      id\n      artist {\n        name\n      }\n      title\n      category {\n        name\n      }\n      coverImageUrl\n      variants {\n        name\n        price\n        stock\n      }\n    }\n  }\n}": types.CollectionFindByNameWithAllProductsDocument,
    "query ProductCount {\n  productCount\n}": types.ProductCountDocument,
    "query ProductFindAll($skip: Int, $take: Int) {\n  products(skip: $skip, take: $take) {\n    id\n    artist {\n      name\n    }\n    title\n    category {\n      name\n    }\n    coverImageUrl\n    variants {\n      price\n      stock\n      name\n    }\n  }\n}": types.ProductFindAllDocument,
    "query ProductFindById($productId: ID!) {\n  product(id: $productId) {\n    id\n    artist {\n      name\n    }\n    category {\n      name\n    }\n    coverImageUrl\n    variants {\n      name\n      price\n      stock\n    }\n    title\n    releaseDate\n    tracks {\n      name\n      number\n    }\n  }\n}": types.ProductFindByIdDocument,
    "query ProductsSearch($query: String!) {\n  productSearch(query: $query) {\n    id\n    artist {\n      name\n    }\n    title\n    category {\n      name\n    }\n    coverImageUrl\n    variants {\n      name\n      price\n      stock\n    }\n  }\n}": types.ProductsSearchDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoryCount($name: String!) {\n  categoryCount(name: $name)\n}"): typeof import('./graphql').CategoryCountDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoryFindByNameWithPaginatedProducts($name: String!, $skip: Int, $take: Int) {\n  category(name: $name) {\n    products(skip: $skip, take: $take) {\n      id\n      artist {\n        name\n      }\n      title\n      category {\n        name\n      }\n      coverImageUrl\n      variants {\n        name\n        price\n        stock\n      }\n    }\n  }\n}"): typeof import('./graphql').CategoryFindByNameWithPaginatedProductsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionFindAll {\n  collections {\n    id\n    name\n  }\n}"): typeof import('./graphql').CollectionFindAllDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionFindByNameWithAllProducts($name: String!) {\n  collection(name: $name) {\n    id\n    name\n    products {\n      id\n      artist {\n        name\n      }\n      title\n      category {\n        name\n      }\n      coverImageUrl\n      variants {\n        name\n        price\n        stock\n      }\n    }\n  }\n}"): typeof import('./graphql').CollectionFindByNameWithAllProductsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductCount {\n  productCount\n}"): typeof import('./graphql').ProductCountDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductFindAll($skip: Int, $take: Int) {\n  products(skip: $skip, take: $take) {\n    id\n    artist {\n      name\n    }\n    title\n    category {\n      name\n    }\n    coverImageUrl\n    variants {\n      price\n      stock\n      name\n    }\n  }\n}"): typeof import('./graphql').ProductFindAllDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductFindById($productId: ID!) {\n  product(id: $productId) {\n    id\n    artist {\n      name\n    }\n    category {\n      name\n    }\n    coverImageUrl\n    variants {\n      name\n      price\n      stock\n    }\n    title\n    releaseDate\n    tracks {\n      name\n      number\n    }\n  }\n}"): typeof import('./graphql').ProductFindByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsSearch($query: String!) {\n  productSearch(query: $query) {\n    id\n    artist {\n      name\n    }\n    title\n    category {\n      name\n    }\n    coverImageUrl\n    variants {\n      name\n      price\n      stock\n    }\n  }\n}"): typeof import('./graphql').ProductsSearchDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
