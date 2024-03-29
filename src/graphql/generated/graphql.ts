/* eslint-disable */
import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Artist = {
  name: Scalars['String']['output'];
};

export type Category = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: Array<Product>;
};


export type CategoryProductsArgs = {
  order?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type Collection = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: Array<Product>;
};

export type DefaultIdResponse = {
  id: Scalars['ID']['output'];
};

export type Mutation = {
  addToOrder: Order;
  createOrder: DefaultIdResponse;
  createReview: Review;
  createUser: User;
  deleteOrder: DefaultIdResponse;
  deleteReview: DefaultIdResponse;
  removeAllFromOrder: Order;
  removeFromOrder: Order;
  setOrderStatus: DefaultIdResponse;
};


export type MutationAddToOrderArgs = {
  product: Scalars['ID']['input'];
  to: Scalars['ID']['input'];
  variant: VariantEnum;
};


export type MutationCreateOrderArgs = {
  userId: Scalars['ID']['input'];
};


export type MutationCreateReviewArgs = {
  content: Scalars['String']['input'];
  headline: Scalars['String']['input'];
  productId: Scalars['ID']['input'];
  rating: Scalars['Int']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationCreateUserArgs = {
  email: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationDeleteOrderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteReviewArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveAllFromOrderArgs = {
  from: Scalars['ID']['input'];
  product: Scalars['ID']['input'];
  variant: VariantEnum;
};


export type MutationRemoveFromOrderArgs = {
  from: Scalars['ID']['input'];
  product: Scalars['ID']['input'];
  variant: VariantEnum;
};


export type MutationSetOrderStatusArgs = {
  status: StatusEnum;
  where: Scalars['ID']['input'];
};

export type Order = {
  id: Scalars['ID']['output'];
  orderItems?: Maybe<Array<OrderItem>>;
  status: StatusEnum;
  total: Scalars['Int']['output'];
  user: User;
};

export type OrderItem = {
  id: Scalars['ID']['output'];
  quantity: Scalars['Int']['output'];
  variant: Variant;
};

export type OrderItemInput = {
  quantity: Scalars['Int']['input'];
  variantId: Scalars['ID']['input'];
};

export type Product = {
  artist: Artist;
  category: Category;
  coverImageUrl: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  numRatings: Scalars['Int']['output'];
  rating?: Maybe<Scalars['Float']['output']>;
  releaseDate: Scalars['String']['output'];
  title: Scalars['String']['output'];
  tracks: Array<Track>;
  variants: Array<Variant>;
};

export type Query = {
  category?: Maybe<Category>;
  categoryCount: Scalars['Int']['output'];
  collection?: Maybe<Collection>;
  collections?: Maybe<Array<Collection>>;
  order?: Maybe<Order>;
  orders: Array<Order>;
  product?: Maybe<Product>;
  productCount: Scalars['Int']['output'];
  productRange?: Maybe<Array<Product>>;
  productReviews: Array<Review>;
  productSearch?: Maybe<Array<Product>>;
  products: Array<Product>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryCategoryArgs = {
  name: Scalars['String']['input'];
};


export type QueryCategoryCountArgs = {
  name: Scalars['String']['input'];
};


export type QueryCollectionArgs = {
  name: Scalars['String']['input'];
};


export type QueryOrderArgs = {
  id: Scalars['ID']['input'];
  status?: InputMaybe<StatusEnum>;
};


export type QueryProductArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductRangeArgs = {
  in: Array<Scalars['ID']['input']>;
};


export type QueryProductReviewsArgs = {
  productId: Scalars['ID']['input'];
};


export type QueryProductSearchArgs = {
  query: Scalars['String']['input'];
};


export type QueryProductsArgs = {
  order?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};

export type Review = {
  content: Scalars['String']['output'];
  dateCreated: Scalars['String']['output'];
  headline: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  product: Product;
  rating: Scalars['Int']['output'];
  user: User;
};

export type SortEnum =
  | 'asc'
  | 'desc';

export type SortInput = {
  price?: InputMaybe<SortEnum>;
  rating?: InputMaybe<SortEnum>;
};

export type StatusEnum =
  | 'AWAIT_PAY'
  | 'AWAIT_SHIP'
  | 'CANCELLED'
  | 'CART'
  | 'SHIPPED';

export type Track = {
  name: Scalars['String']['output'];
  number: Scalars['Int']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

export type User = {
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

export type Variant = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  product: Product;
  stock: Scalars['Int']['output'];
};

export type VariantEnum =
  | 'cd'
  | 'lp';

export type OrderDetailsFragment = { id: string, status: StatusEnum, total: number, orderItems?: Array<{ id: string, quantity: number, variant: { id: string, name: string, price: number, stock: number, product: { id: string, title: string, coverImageUrl: string, artist: { name: string } } } }> | null, user: { id: string } };

export type OrderItemDetailsFragment = { id: string, quantity: number, variant: { id: string, name: string, price: number, stock: number, product: { id: string, title: string, coverImageUrl: string, artist: { name: string } } } };

export type ProductDetailsFragment = { id: string, coverImageUrl: string, title: string, releaseDate: string, numRatings: number, rating?: number | null, artist: { name: string }, category: { name: string }, variants: Array<{ id: string, name: string, price: number, stock: number }>, tracks: Array<{ name: string, number: number }> };

export type ProductDetailsInVariantFragment = { id: string, title: string, coverImageUrl: string, artist: { name: string } };

export type ProductOverviewFragment = { id: string, title: string, coverImageUrl: string, rating?: number | null, numRatings: number, artist: { name: string }, category: { name: string }, variants: Array<{ price: number, stock: number, name: string }> };

export type ReviewDetailsFragment = { id: string, headline: string, content: string, dateCreated: string, rating: number, user: { name: string, email: string }, product: { id: string, title: string } };

export type UserDetailsFragment = { id: string, name: string, isActive: boolean, email: string };

export type VariantDetailsFragment = { id: string, name: string, price: number, stock: number, product: { id: string, title: string, coverImageUrl: string, artist: { name: string } } };

export type OrderAddToMutationVariables = Exact<{
  to: Scalars['ID']['input'];
  product: Scalars['ID']['input'];
  variant: VariantEnum;
}>;


export type OrderAddToMutation = { addToOrder: { id: string, status: StatusEnum, total: number, orderItems?: Array<{ id: string, quantity: number, variant: { id: string, name: string, price: number, stock: number, product: { id: string, title: string, coverImageUrl: string, artist: { name: string } } } }> | null, user: { id: string } } };

export type OrderCreateMutationVariables = Exact<{
  userId: Scalars['ID']['input'];
}>;


export type OrderCreateMutation = { createOrder: { id: string } };

export type OrderDeleteMutationVariables = Exact<{
  deleteOrderId: Scalars['ID']['input'];
}>;


export type OrderDeleteMutation = { deleteOrder: { id: string } };

export type OrderDeleteAllFromMutationVariables = Exact<{
  from: Scalars['ID']['input'];
  product: Scalars['ID']['input'];
  variant: VariantEnum;
}>;


export type OrderDeleteAllFromMutation = { removeAllFromOrder: { id: string, status: StatusEnum, total: number, orderItems?: Array<{ id: string, quantity: number, variant: { id: string, name: string, price: number, stock: number, product: { id: string, title: string, coverImageUrl: string, artist: { name: string } } } }> | null, user: { id: string } } };

export type OrderRemoveFromMutationVariables = Exact<{
  from: Scalars['ID']['input'];
  product: Scalars['ID']['input'];
  variant: VariantEnum;
}>;


export type OrderRemoveFromMutation = { removeFromOrder: { id: string, status: StatusEnum, total: number, orderItems?: Array<{ id: string, quantity: number, variant: { id: string, name: string, price: number, stock: number, product: { id: string, title: string, coverImageUrl: string, artist: { name: string } } } }> | null, user: { id: string } } };

export type OrderSetStatusMutationVariables = Exact<{
  where: Scalars['ID']['input'];
  status: StatusEnum;
}>;


export type OrderSetStatusMutation = { setOrderStatus: { id: string } };

export type ReviewCreateMutationVariables = Exact<{
  productId: Scalars['ID']['input'];
  rating: Scalars['Int']['input'];
  headline: Scalars['String']['input'];
  content: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
}>;


export type ReviewCreateMutation = { createReview: { id: string } };

export type UserCreateMutationVariables = Exact<{
  createUserId: Scalars['ID']['input'];
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
}>;


export type UserCreateMutation = { createUser: { id: string } };

export type CategoryCountQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type CategoryCountQuery = { categoryCount: number };

export type CategoryFindByNameWithPaginatedProductsQueryVariables = Exact<{
  name: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
}>;


export type CategoryFindByNameWithPaginatedProductsQuery = { category?: { products: Array<{ id: string, title: string, coverImageUrl: string, rating?: number | null, numRatings: number, artist: { name: string }, category: { name: string }, variants: Array<{ price: number, stock: number, name: string }> }> } | null };

export type CollectionFindAllQueryVariables = Exact<{ [key: string]: never; }>;


export type CollectionFindAllQuery = { collections?: Array<{ id: string, name: string }> | null };

export type CollectionFindByNameWithAllProductsQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type CollectionFindByNameWithAllProductsQuery = { collection?: { id: string, name: string, products: Array<{ id: string, title: string, coverImageUrl: string, rating?: number | null, numRatings: number, artist: { name: string }, category: { name: string }, variants: Array<{ price: number, stock: number, name: string }> }> } | null };

export type OrderGetByIdQueryVariables = Exact<{
  orderId: Scalars['ID']['input'];
  status?: InputMaybe<StatusEnum>;
}>;


export type OrderGetByIdQuery = { order?: { id: string, status: StatusEnum, total: number, orderItems?: Array<{ id: string, quantity: number, variant: { id: string, name: string, price: number, stock: number, product: { id: string, title: string, coverImageUrl: string, artist: { name: string } } } }> | null, user: { id: string } } | null };

export type ProductCountQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductCountQuery = { productCount: number };

export type ProductFindAllQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
}>;


export type ProductFindAllQuery = { products: Array<{ id: string, title: string, coverImageUrl: string, rating?: number | null, numRatings: number, artist: { name: string }, category: { name: string }, variants: Array<{ price: number, stock: number, name: string }> }> };

export type ProductFindByIdQueryVariables = Exact<{
  productId: Scalars['ID']['input'];
}>;


export type ProductFindByIdQuery = { product?: { id: string, coverImageUrl: string, title: string, releaseDate: string, numRatings: number, rating?: number | null, artist: { name: string }, category: { name: string }, variants: Array<{ id: string, name: string, price: number, stock: number }>, tracks: Array<{ name: string, number: number }> } | null };

export type ProductRangeQueryVariables = Exact<{
  in: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;


export type ProductRangeQuery = { productRange?: Array<{ id: string, coverImageUrl: string, title: string, releaseDate: string, numRatings: number, rating?: number | null, artist: { name: string }, category: { name: string }, variants: Array<{ id: string, name: string, price: number, stock: number }>, tracks: Array<{ name: string, number: number }> }> | null };

export type ProductsSearchQueryVariables = Exact<{
  query: Scalars['String']['input'];
}>;


export type ProductsSearchQuery = { productSearch?: Array<{ id: string, title: string, coverImageUrl: string, rating?: number | null, numRatings: number, artist: { name: string }, category: { name: string }, variants: Array<{ price: number, stock: number, name: string }> }> | null };

export type ReviewsGetByProductQueryVariables = Exact<{
  productId: Scalars['ID']['input'];
}>;


export type ReviewsGetByProductQuery = { productReviews: Array<{ id: string, headline: string, content: string, dateCreated: string, rating: number, user: { name: string, email: string }, product: { id: string, title: string } }> };

export type UserQueryVariables = Exact<{
  userId: Scalars['ID']['input'];
}>;


export type UserQuery = { user?: { id: string, name: string, isActive: boolean, email: string } | null };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const ProductDetailsInVariantFragmentDoc = new TypedDocumentString(`
    fragment ProductDetailsInVariant on Product {
  id
  artist {
    name
  }
  title
  coverImageUrl
}
    `, {"fragmentName":"ProductDetailsInVariant"}) as unknown as TypedDocumentString<ProductDetailsInVariantFragment, unknown>;
export const VariantDetailsFragmentDoc = new TypedDocumentString(`
    fragment VariantDetails on Variant {
  id
  name
  price
  product {
    ...ProductDetailsInVariant
  }
  stock
}
    fragment ProductDetailsInVariant on Product {
  id
  artist {
    name
  }
  title
  coverImageUrl
}`, {"fragmentName":"VariantDetails"}) as unknown as TypedDocumentString<VariantDetailsFragment, unknown>;
export const OrderItemDetailsFragmentDoc = new TypedDocumentString(`
    fragment OrderItemDetails on OrderItem {
  id
  quantity
  variant {
    ...VariantDetails
  }
}
    fragment ProductDetailsInVariant on Product {
  id
  artist {
    name
  }
  title
  coverImageUrl
}
fragment VariantDetails on Variant {
  id
  name
  price
  product {
    ...ProductDetailsInVariant
  }
  stock
}`, {"fragmentName":"OrderItemDetails"}) as unknown as TypedDocumentString<OrderItemDetailsFragment, unknown>;
export const OrderDetailsFragmentDoc = new TypedDocumentString(`
    fragment OrderDetails on Order {
  id
  status
  orderItems {
    ...OrderItemDetails
  }
  user {
    id
  }
  total
}
    fragment OrderItemDetails on OrderItem {
  id
  quantity
  variant {
    ...VariantDetails
  }
}
fragment ProductDetailsInVariant on Product {
  id
  artist {
    name
  }
  title
  coverImageUrl
}
fragment VariantDetails on Variant {
  id
  name
  price
  product {
    ...ProductDetailsInVariant
  }
  stock
}`, {"fragmentName":"OrderDetails"}) as unknown as TypedDocumentString<OrderDetailsFragment, unknown>;
export const ProductDetailsFragmentDoc = new TypedDocumentString(`
    fragment ProductDetails on Product {
  id
  artist {
    name
  }
  category {
    name
  }
  coverImageUrl
  variants {
    id
    name
    price
    stock
  }
  title
  releaseDate
  tracks {
    name
    number
  }
  numRatings
  rating
}
    `, {"fragmentName":"ProductDetails"}) as unknown as TypedDocumentString<ProductDetailsFragment, unknown>;
export const ProductOverviewFragmentDoc = new TypedDocumentString(`
    fragment ProductOverview on Product {
  id
  artist {
    name
  }
  title
  category {
    name
  }
  coverImageUrl
  variants {
    price
    stock
    name
  }
  rating
  numRatings
}
    `, {"fragmentName":"ProductOverview"}) as unknown as TypedDocumentString<ProductOverviewFragment, unknown>;
export const ReviewDetailsFragmentDoc = new TypedDocumentString(`
    fragment ReviewDetails on Review {
  id
  headline
  content
  dateCreated
  rating
  user {
    name
    email
  }
  product {
    id
    title
  }
}
    `, {"fragmentName":"ReviewDetails"}) as unknown as TypedDocumentString<ReviewDetailsFragment, unknown>;
export const UserDetailsFragmentDoc = new TypedDocumentString(`
    fragment UserDetails on User {
  id
  name
  isActive
  email
}
    `, {"fragmentName":"UserDetails"}) as unknown as TypedDocumentString<UserDetailsFragment, unknown>;
export const OrderAddToDocument = new TypedDocumentString(`
    mutation OrderAddTo($to: ID!, $product: ID!, $variant: VariantEnum!) {
  addToOrder(to: $to, product: $product, variant: $variant) {
    ...OrderDetails
  }
}
    fragment OrderDetails on Order {
  id
  status
  orderItems {
    ...OrderItemDetails
  }
  user {
    id
  }
  total
}
fragment OrderItemDetails on OrderItem {
  id
  quantity
  variant {
    ...VariantDetails
  }
}
fragment ProductDetailsInVariant on Product {
  id
  artist {
    name
  }
  title
  coverImageUrl
}
fragment VariantDetails on Variant {
  id
  name
  price
  product {
    ...ProductDetailsInVariant
  }
  stock
}`) as unknown as TypedDocumentString<OrderAddToMutation, OrderAddToMutationVariables>;
export const OrderCreateDocument = new TypedDocumentString(`
    mutation OrderCreate($userId: ID!) {
  createOrder(userId: $userId) {
    id
  }
}
    `) as unknown as TypedDocumentString<OrderCreateMutation, OrderCreateMutationVariables>;
export const OrderDeleteDocument = new TypedDocumentString(`
    mutation OrderDelete($deleteOrderId: ID!) {
  deleteOrder(id: $deleteOrderId) {
    id
  }
}
    `) as unknown as TypedDocumentString<OrderDeleteMutation, OrderDeleteMutationVariables>;
export const OrderDeleteAllFromDocument = new TypedDocumentString(`
    mutation OrderDeleteAllFrom($from: ID!, $product: ID!, $variant: VariantEnum!) {
  removeAllFromOrder(from: $from, product: $product, variant: $variant) {
    ...OrderDetails
  }
}
    fragment OrderDetails on Order {
  id
  status
  orderItems {
    ...OrderItemDetails
  }
  user {
    id
  }
  total
}
fragment OrderItemDetails on OrderItem {
  id
  quantity
  variant {
    ...VariantDetails
  }
}
fragment ProductDetailsInVariant on Product {
  id
  artist {
    name
  }
  title
  coverImageUrl
}
fragment VariantDetails on Variant {
  id
  name
  price
  product {
    ...ProductDetailsInVariant
  }
  stock
}`) as unknown as TypedDocumentString<OrderDeleteAllFromMutation, OrderDeleteAllFromMutationVariables>;
export const OrderRemoveFromDocument = new TypedDocumentString(`
    mutation OrderRemoveFrom($from: ID!, $product: ID!, $variant: VariantEnum!) {
  removeFromOrder(from: $from, product: $product, variant: $variant) {
    ...OrderDetails
  }
}
    fragment OrderDetails on Order {
  id
  status
  orderItems {
    ...OrderItemDetails
  }
  user {
    id
  }
  total
}
fragment OrderItemDetails on OrderItem {
  id
  quantity
  variant {
    ...VariantDetails
  }
}
fragment ProductDetailsInVariant on Product {
  id
  artist {
    name
  }
  title
  coverImageUrl
}
fragment VariantDetails on Variant {
  id
  name
  price
  product {
    ...ProductDetailsInVariant
  }
  stock
}`) as unknown as TypedDocumentString<OrderRemoveFromMutation, OrderRemoveFromMutationVariables>;
export const OrderSetStatusDocument = new TypedDocumentString(`
    mutation OrderSetStatus($where: ID!, $status: StatusEnum!) {
  setOrderStatus(where: $where, status: $status) {
    id
  }
}
    `) as unknown as TypedDocumentString<OrderSetStatusMutation, OrderSetStatusMutationVariables>;
export const ReviewCreateDocument = new TypedDocumentString(`
    mutation ReviewCreate($productId: ID!, $rating: Int!, $headline: String!, $content: String!, $userId: ID!) {
  createReview(
    productId: $productId
    rating: $rating
    headline: $headline
    content: $content
    userId: $userId
  ) {
    id
  }
}
    `) as unknown as TypedDocumentString<ReviewCreateMutation, ReviewCreateMutationVariables>;
export const UserCreateDocument = new TypedDocumentString(`
    mutation UserCreate($createUserId: ID!, $email: String!, $name: String!) {
  createUser(id: $createUserId, email: $email, name: $name) {
    id
  }
}
    `) as unknown as TypedDocumentString<UserCreateMutation, UserCreateMutationVariables>;
export const CategoryCountDocument = new TypedDocumentString(`
    query CategoryCount($name: String!) {
  categoryCount(name: $name)
}
    `) as unknown as TypedDocumentString<CategoryCountQuery, CategoryCountQueryVariables>;
export const CategoryFindByNameWithPaginatedProductsDocument = new TypedDocumentString(`
    query CategoryFindByNameWithPaginatedProducts($name: String!, $skip: Int, $take: Int, $sort: String, $order: String) {
  category(name: $name) {
    products(skip: $skip, take: $take, sort: $sort, order: $order) {
      ...ProductOverview
    }
  }
}
    fragment ProductOverview on Product {
  id
  artist {
    name
  }
  title
  category {
    name
  }
  coverImageUrl
  variants {
    price
    stock
    name
  }
  rating
  numRatings
}`) as unknown as TypedDocumentString<CategoryFindByNameWithPaginatedProductsQuery, CategoryFindByNameWithPaginatedProductsQueryVariables>;
export const CollectionFindAllDocument = new TypedDocumentString(`
    query CollectionFindAll {
  collections {
    id
    name
  }
}
    `) as unknown as TypedDocumentString<CollectionFindAllQuery, CollectionFindAllQueryVariables>;
export const CollectionFindByNameWithAllProductsDocument = new TypedDocumentString(`
    query CollectionFindByNameWithAllProducts($name: String!) {
  collection(name: $name) {
    id
    name
    products {
      ...ProductOverview
    }
  }
}
    fragment ProductOverview on Product {
  id
  artist {
    name
  }
  title
  category {
    name
  }
  coverImageUrl
  variants {
    price
    stock
    name
  }
  rating
  numRatings
}`) as unknown as TypedDocumentString<CollectionFindByNameWithAllProductsQuery, CollectionFindByNameWithAllProductsQueryVariables>;
export const OrderGetByIdDocument = new TypedDocumentString(`
    query OrderGetById($orderId: ID!, $status: StatusEnum) {
  order(id: $orderId, status: $status) {
    ...OrderDetails
  }
}
    fragment OrderDetails on Order {
  id
  status
  orderItems {
    ...OrderItemDetails
  }
  user {
    id
  }
  total
}
fragment OrderItemDetails on OrderItem {
  id
  quantity
  variant {
    ...VariantDetails
  }
}
fragment ProductDetailsInVariant on Product {
  id
  artist {
    name
  }
  title
  coverImageUrl
}
fragment VariantDetails on Variant {
  id
  name
  price
  product {
    ...ProductDetailsInVariant
  }
  stock
}`) as unknown as TypedDocumentString<OrderGetByIdQuery, OrderGetByIdQueryVariables>;
export const ProductCountDocument = new TypedDocumentString(`
    query ProductCount {
  productCount
}
    `) as unknown as TypedDocumentString<ProductCountQuery, ProductCountQueryVariables>;
export const ProductFindAllDocument = new TypedDocumentString(`
    query ProductFindAll($skip: Int, $take: Int, $sort: String, $order: String) {
  products(skip: $skip, take: $take, sort: $sort, order: $order) {
    ...ProductOverview
  }
}
    fragment ProductOverview on Product {
  id
  artist {
    name
  }
  title
  category {
    name
  }
  coverImageUrl
  variants {
    price
    stock
    name
  }
  rating
  numRatings
}`) as unknown as TypedDocumentString<ProductFindAllQuery, ProductFindAllQueryVariables>;
export const ProductFindByIdDocument = new TypedDocumentString(`
    query ProductFindById($productId: ID!) {
  product(id: $productId) {
    ...ProductDetails
  }
}
    fragment ProductDetails on Product {
  id
  artist {
    name
  }
  category {
    name
  }
  coverImageUrl
  variants {
    id
    name
    price
    stock
  }
  title
  releaseDate
  tracks {
    name
    number
  }
  numRatings
  rating
}`) as unknown as TypedDocumentString<ProductFindByIdQuery, ProductFindByIdQueryVariables>;
export const ProductRangeDocument = new TypedDocumentString(`
    query ProductRange($in: [ID!]!) {
  productRange(in: $in) {
    ...ProductDetails
  }
}
    fragment ProductDetails on Product {
  id
  artist {
    name
  }
  category {
    name
  }
  coverImageUrl
  variants {
    id
    name
    price
    stock
  }
  title
  releaseDate
  tracks {
    name
    number
  }
  numRatings
  rating
}`) as unknown as TypedDocumentString<ProductRangeQuery, ProductRangeQueryVariables>;
export const ProductsSearchDocument = new TypedDocumentString(`
    query ProductsSearch($query: String!) {
  productSearch(query: $query) {
    ...ProductOverview
  }
}
    fragment ProductOverview on Product {
  id
  artist {
    name
  }
  title
  category {
    name
  }
  coverImageUrl
  variants {
    price
    stock
    name
  }
  rating
  numRatings
}`) as unknown as TypedDocumentString<ProductsSearchQuery, ProductsSearchQueryVariables>;
export const ReviewsGetByProductDocument = new TypedDocumentString(`
    query ReviewsGetByProduct($productId: ID!) {
  productReviews(productId: $productId) {
    ...ReviewDetails
  }
}
    fragment ReviewDetails on Review {
  id
  headline
  content
  dateCreated
  rating
  user {
    name
    email
  }
  product {
    id
    title
  }
}`) as unknown as TypedDocumentString<ReviewsGetByProductQuery, ReviewsGetByProductQueryVariables>;
export const UserDocument = new TypedDocumentString(`
    query User($userId: ID!) {
  user(id: $userId) {
    ...UserDetails
  }
}
    fragment UserDetails on User {
  id
  name
  isActive
  email
}`) as unknown as TypedDocumentString<UserQuery, UserQueryVariables>;