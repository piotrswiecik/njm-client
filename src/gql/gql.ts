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
    "query CategoryGetProducts($name: String!, $skip: Int, $take: Int) {\n  category(name: $name) {\n    name\n    products(skip: $skip, take: $take) {\n      id\n      title\n      artist\n      category {\n        name\n      }\n      collection {\n        name\n      }\n      coverImg {\n        width\n        height\n        url\n      }\n      price\n    }\n  }\n}": types.CategoryGetProductsDocument,
    "query ProductsCount {\n  count\n}": types.ProductsCountDocument,
    "query ProductDetailsData($productId: ID!) {\n  product(id: $productId) {\n    artist\n    category {\n      name\n    }\n    coverImg {\n      height\n      width\n      url\n    }\n    id\n    price\n    releaseDate\n    stock {\n      qtyCd\n      qtyLp\n    }\n    title\n    tracks {\n      name\n    }\n  }\n}": types.ProductDetailsDataDocument,
    "query ProductsOverviewData($take: Int!, $skip: Int) {\n  products(take: $take, skip: $skip) {\n    artist\n    category {\n      name\n    }\n    collection {\n      name\n    }\n    coverImg {\n      url\n      height\n      width\n    }\n    id\n    price\n    title\n  }\n}": types.ProductsOverviewDataDocument,
    "query ProductSearch($query: String!) {\n  productSearch(query: $query) {\n    artist\n    category {\n      name\n    }\n    collection {\n      name\n    }\n    coverImg {\n      url\n      height\n      width\n    }\n    id\n    price\n    title\n  }\n}": types.ProductSearchDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoryCount($name: String!) {\n  categoryCount(name: $name)\n}"): typeof import('./graphql').CategoryCountDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoryGetProducts($name: String!, $skip: Int, $take: Int) {\n  category(name: $name) {\n    name\n    products(skip: $skip, take: $take) {\n      id\n      title\n      artist\n      category {\n        name\n      }\n      collection {\n        name\n      }\n      coverImg {\n        width\n        height\n        url\n      }\n      price\n    }\n  }\n}"): typeof import('./graphql').CategoryGetProductsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsCount {\n  count\n}"): typeof import('./graphql').ProductsCountDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductDetailsData($productId: ID!) {\n  product(id: $productId) {\n    artist\n    category {\n      name\n    }\n    coverImg {\n      height\n      width\n      url\n    }\n    id\n    price\n    releaseDate\n    stock {\n      qtyCd\n      qtyLp\n    }\n    title\n    tracks {\n      name\n    }\n  }\n}"): typeof import('./graphql').ProductDetailsDataDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsOverviewData($take: Int!, $skip: Int) {\n  products(take: $take, skip: $skip) {\n    artist\n    category {\n      name\n    }\n    collection {\n      name\n    }\n    coverImg {\n      url\n      height\n      width\n    }\n    id\n    price\n    title\n  }\n}"): typeof import('./graphql').ProductsOverviewDataDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductSearch($query: String!) {\n  productSearch(query: $query) {\n    artist\n    category {\n      name\n    }\n    collection {\n      name\n    }\n    coverImg {\n      url\n      height\n      width\n    }\n    id\n    price\n    title\n  }\n}"): typeof import('./graphql').ProductSearchDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
