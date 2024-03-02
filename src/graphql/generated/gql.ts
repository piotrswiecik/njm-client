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
    "fragment OrderDetails on Order {\n  id\n  status\n  orderItems {\n    ...OrderItemDetails\n  }\n  user {\n    id\n  }\n  total\n}": types.OrderDetailsFragmentDoc,
    "fragment OrderItemDetails on OrderItem {\n  id\n  quantity\n  variant {\n    ...VariantDetails\n  }\n}": types.OrderItemDetailsFragmentDoc,
    "fragment ProductDetails on Product {\n  id\n  artist {\n    name\n  }\n  category {\n    name\n  }\n  coverImageUrl\n  variants {\n    id\n    name\n    price\n    stock\n  }\n  title\n  releaseDate\n  tracks {\n    name\n    number\n  }\n}": types.ProductDetailsFragmentDoc,
    "fragment ProductDetailsInVariant on Product {\n  id\n  artist {\n    name\n  }\n  title\n  coverImageUrl\n}": types.ProductDetailsInVariantFragmentDoc,
    "fragment ProductOverview on Product {\n  id\n  artist {\n    name\n  }\n  title\n  category {\n    name\n  }\n  coverImageUrl\n  variants {\n    price\n    stock\n    name\n  }\n}": types.ProductOverviewFragmentDoc,
    "fragment UserDetails on User {\n  id\n  name\n  isActive\n  email\n}": types.UserDetailsFragmentDoc,
    "fragment VariantDetails on Variant {\n  id\n  name\n  price\n  product {\n    ...ProductDetailsInVariant\n  }\n  stock\n}": types.VariantDetailsFragmentDoc,
    "mutation OrderAddTo($to: ID!, $product: ID!, $variant: VariantEnum!) {\n  addToOrder(to: $to, product: $product, variant: $variant) {\n    ...OrderDetails\n  }\n}": types.OrderAddToDocument,
    "mutation OrderCreate($userId: ID!) {\n  createOrder(userId: $userId) {\n    id\n  }\n}": types.OrderCreateDocument,
    "mutation OrderDelete($deleteOrderId: ID!) {\n  deleteOrder(id: $deleteOrderId) {\n    id\n  }\n}": types.OrderDeleteDocument,
    "mutation OrderDeleteAllFrom($from: ID!, $product: ID!, $variant: VariantEnum!) {\n  removeAllFromOrder(from: $from, product: $product, variant: $variant) {\n    ...OrderDetails\n  }\n}": types.OrderDeleteAllFromDocument,
    "mutation OrderRemoveFrom($from: ID!, $product: ID!, $variant: VariantEnum!) {\n  removeFromOrder(from: $from, product: $product, variant: $variant) {\n    ...OrderDetails\n  }\n}": types.OrderRemoveFromDocument,
    "mutation OrderSetStatus($where: ID!, $status: StatusEnum!) {\n  setOrderStatus(where: $where, status: $status) {\n    id\n  }\n}": types.OrderSetStatusDocument,
    "mutation ReviewCreate($productId: ID!, $rating: Int!, $headline: String!, $content: String!, $userId: ID!) {\n  createReview(\n    productId: $productId\n    rating: $rating\n    headline: $headline\n    content: $content\n    userId: $userId\n  ) {\n    id\n  }\n}": types.ReviewCreateDocument,
    "query CategoryCount($name: String!) {\n  categoryCount(name: $name)\n}": types.CategoryCountDocument,
    "query CategoryFindByNameWithPaginatedProducts($name: String!, $skip: Int, $take: Int) {\n  category(name: $name) {\n    products(skip: $skip, take: $take) {\n      ...ProductOverview\n    }\n  }\n}": types.CategoryFindByNameWithPaginatedProductsDocument,
    "query CollectionFindAll {\n  collections {\n    id\n    name\n  }\n}": types.CollectionFindAllDocument,
    "query CollectionFindByNameWithAllProducts($name: String!) {\n  collection(name: $name) {\n    id\n    name\n    products {\n      ...ProductOverview\n    }\n  }\n}": types.CollectionFindByNameWithAllProductsDocument,
    "query OrderGetById($orderId: ID!, $status: StatusEnum) {\n  order(id: $orderId, status: $status) {\n    ...OrderDetails\n  }\n}": types.OrderGetByIdDocument,
    "query ProductCount {\n  productCount\n}": types.ProductCountDocument,
    "query ProductFindAll($skip: Int, $take: Int) {\n  products(skip: $skip, take: $take) {\n    ...ProductOverview\n  }\n}": types.ProductFindAllDocument,
    "query ProductFindById($productId: ID!) {\n  product(id: $productId) {\n    ...ProductDetails\n  }\n}": types.ProductFindByIdDocument,
    "query ProductsSearch($query: String!) {\n  productSearch(query: $query) {\n    ...ProductOverview\n  }\n}": types.ProductsSearchDocument,
    "query ReviewsGetByProduct($productId: ID!) {\n  productReviews(productId: $productId) {\n    id\n    headline\n    content\n    rating\n    user {\n      email\n    }\n    product {\n      id\n      title\n    }\n  }\n}": types.ReviewsGetByProductDocument,
    "query User($userId: ID!) {\n  user(id: $userId) {\n    ...UserDetails\n  }\n}": types.UserDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment OrderDetails on Order {\n  id\n  status\n  orderItems {\n    ...OrderItemDetails\n  }\n  user {\n    id\n  }\n  total\n}"): typeof import('./graphql').OrderDetailsFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment OrderItemDetails on OrderItem {\n  id\n  quantity\n  variant {\n    ...VariantDetails\n  }\n}"): typeof import('./graphql').OrderItemDetailsFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductDetails on Product {\n  id\n  artist {\n    name\n  }\n  category {\n    name\n  }\n  coverImageUrl\n  variants {\n    id\n    name\n    price\n    stock\n  }\n  title\n  releaseDate\n  tracks {\n    name\n    number\n  }\n}"): typeof import('./graphql').ProductDetailsFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductDetailsInVariant on Product {\n  id\n  artist {\n    name\n  }\n  title\n  coverImageUrl\n}"): typeof import('./graphql').ProductDetailsInVariantFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductOverview on Product {\n  id\n  artist {\n    name\n  }\n  title\n  category {\n    name\n  }\n  coverImageUrl\n  variants {\n    price\n    stock\n    name\n  }\n}"): typeof import('./graphql').ProductOverviewFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment UserDetails on User {\n  id\n  name\n  isActive\n  email\n}"): typeof import('./graphql').UserDetailsFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment VariantDetails on Variant {\n  id\n  name\n  price\n  product {\n    ...ProductDetailsInVariant\n  }\n  stock\n}"): typeof import('./graphql').VariantDetailsFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation OrderAddTo($to: ID!, $product: ID!, $variant: VariantEnum!) {\n  addToOrder(to: $to, product: $product, variant: $variant) {\n    ...OrderDetails\n  }\n}"): typeof import('./graphql').OrderAddToDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation OrderCreate($userId: ID!) {\n  createOrder(userId: $userId) {\n    id\n  }\n}"): typeof import('./graphql').OrderCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation OrderDelete($deleteOrderId: ID!) {\n  deleteOrder(id: $deleteOrderId) {\n    id\n  }\n}"): typeof import('./graphql').OrderDeleteDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation OrderDeleteAllFrom($from: ID!, $product: ID!, $variant: VariantEnum!) {\n  removeAllFromOrder(from: $from, product: $product, variant: $variant) {\n    ...OrderDetails\n  }\n}"): typeof import('./graphql').OrderDeleteAllFromDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation OrderRemoveFrom($from: ID!, $product: ID!, $variant: VariantEnum!) {\n  removeFromOrder(from: $from, product: $product, variant: $variant) {\n    ...OrderDetails\n  }\n}"): typeof import('./graphql').OrderRemoveFromDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation OrderSetStatus($where: ID!, $status: StatusEnum!) {\n  setOrderStatus(where: $where, status: $status) {\n    id\n  }\n}"): typeof import('./graphql').OrderSetStatusDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ReviewCreate($productId: ID!, $rating: Int!, $headline: String!, $content: String!, $userId: ID!) {\n  createReview(\n    productId: $productId\n    rating: $rating\n    headline: $headline\n    content: $content\n    userId: $userId\n  ) {\n    id\n  }\n}"): typeof import('./graphql').ReviewCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoryCount($name: String!) {\n  categoryCount(name: $name)\n}"): typeof import('./graphql').CategoryCountDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoryFindByNameWithPaginatedProducts($name: String!, $skip: Int, $take: Int) {\n  category(name: $name) {\n    products(skip: $skip, take: $take) {\n      ...ProductOverview\n    }\n  }\n}"): typeof import('./graphql').CategoryFindByNameWithPaginatedProductsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionFindAll {\n  collections {\n    id\n    name\n  }\n}"): typeof import('./graphql').CollectionFindAllDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionFindByNameWithAllProducts($name: String!) {\n  collection(name: $name) {\n    id\n    name\n    products {\n      ...ProductOverview\n    }\n  }\n}"): typeof import('./graphql').CollectionFindByNameWithAllProductsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query OrderGetById($orderId: ID!, $status: StatusEnum) {\n  order(id: $orderId, status: $status) {\n    ...OrderDetails\n  }\n}"): typeof import('./graphql').OrderGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductCount {\n  productCount\n}"): typeof import('./graphql').ProductCountDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductFindAll($skip: Int, $take: Int) {\n  products(skip: $skip, take: $take) {\n    ...ProductOverview\n  }\n}"): typeof import('./graphql').ProductFindAllDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductFindById($productId: ID!) {\n  product(id: $productId) {\n    ...ProductDetails\n  }\n}"): typeof import('./graphql').ProductFindByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsSearch($query: String!) {\n  productSearch(query: $query) {\n    ...ProductOverview\n  }\n}"): typeof import('./graphql').ProductsSearchDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ReviewsGetByProduct($productId: ID!) {\n  productReviews(productId: $productId) {\n    id\n    headline\n    content\n    rating\n    user {\n      email\n    }\n    product {\n      id\n      title\n    }\n  }\n}"): typeof import('./graphql').ReviewsGetByProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query User($userId: ID!) {\n  user(id: $userId) {\n    ...UserDetails\n  }\n}"): typeof import('./graphql').UserDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
