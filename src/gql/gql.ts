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
    "query ProductsCount {\n  count\n}": types.ProductsCountDocument,
    "query ProductsOverviewData($take: Int!, $skip: Int) {\n  products(take: $take, skip: $skip) {\n    artist\n    category\n    collection {\n      name\n    }\n    coverImg {\n      url\n      height\n      width\n    }\n    id\n    price\n    title\n  }\n}": types.ProductsOverviewDataDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsCount {\n  count\n}"): typeof import('./graphql').ProductsCountDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsOverviewData($take: Int!, $skip: Int) {\n  products(take: $take, skip: $skip) {\n    artist\n    category\n    collection {\n      name\n    }\n    coverImg {\n      url\n      height\n      width\n    }\n    id\n    price\n    title\n  }\n}"): typeof import('./graphql').ProductsOverviewDataDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}