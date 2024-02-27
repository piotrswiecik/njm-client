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
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type Collection = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: Array<Product>;
};

export type CreateOrderResponse = {
  id: Scalars['ID']['output'];
};

export type Mutation = {
  createOrder: CreateOrderResponse;
};


export type MutationCreateOrderArgs = {
  userId: Scalars['ID']['input'];
};

export type Order = {
  id: Scalars['ID']['output'];
  orderItems?: Maybe<Array<OrderItem>>;
  status: Status;
  user: User;
};

export type OrderItem = {
  id: Scalars['ID']['output'];
  quantity: Scalars['Int']['output'];
  variant: Variant;
};

export type Product = {
  artist: Artist;
  category: Category;
  coverImageUrl: Scalars['String']['output'];
  id: Scalars['ID']['output'];
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
  status?: InputMaybe<Status>;
};


export type QueryProductArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductSearchArgs = {
  query: Scalars['String']['input'];
};


export type QueryProductsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};

export type Status =
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
};

export type Variant = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  product?: Maybe<Product>;
  stock: Scalars['Int']['output'];
};

export type OrderItemDetailsFragment = { id: string, quantity: number, variant: { id: string, name: string, price: number, product?: { title: string, artist: { name: string } } | null } };

export type ProductDetailsFragment = { id: string, coverImageUrl: string, title: string, releaseDate: string, artist: { name: string }, category: { name: string }, variants: Array<{ id: string, name: string, price: number, stock: number }>, tracks: Array<{ name: string, number: number }> };

export type ProductOverviewFragment = { id: string, title: string, coverImageUrl: string, artist: { name: string }, category: { name: string }, variants: Array<{ price: number, stock: number, name: string }> };

export type OrderCreateMutationVariables = Exact<{
  userId: Scalars['ID']['input'];
}>;


export type OrderCreateMutation = { createOrder: { id: string } };

export type CategoryCountQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type CategoryCountQuery = { categoryCount: number };

export type CategoryFindByNameWithPaginatedProductsQueryVariables = Exact<{
  name: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CategoryFindByNameWithPaginatedProductsQuery = { category?: { products: Array<{ id: string, title: string, coverImageUrl: string, artist: { name: string }, category: { name: string }, variants: Array<{ price: number, stock: number, name: string }> }> } | null };

export type CollectionFindAllQueryVariables = Exact<{ [key: string]: never; }>;


export type CollectionFindAllQuery = { collections?: Array<{ id: string, name: string }> | null };

export type CollectionFindByNameWithAllProductsQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type CollectionFindByNameWithAllProductsQuery = { collection?: { id: string, name: string, products: Array<{ id: string, title: string, coverImageUrl: string, artist: { name: string }, category: { name: string }, variants: Array<{ price: number, stock: number, name: string }> }> } | null };

export type OrderGetByIdQueryVariables = Exact<{
  orderId: Scalars['ID']['input'];
  status?: InputMaybe<Status>;
}>;


export type OrderGetByIdQuery = { order?: { id: string, orderItems?: Array<{ id: string, quantity: number, variant: { id: string, name: string, price: number, product?: { title: string, artist: { name: string } } | null } }> | null, user: { id: string } } | null };

export type ProductCountQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductCountQuery = { productCount: number };

export type ProductFindAllQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ProductFindAllQuery = { products: Array<{ id: string, title: string, coverImageUrl: string, artist: { name: string }, category: { name: string }, variants: Array<{ price: number, stock: number, name: string }> }> };

export type ProductFindByIdQueryVariables = Exact<{
  productId: Scalars['ID']['input'];
}>;


export type ProductFindByIdQuery = { product?: { id: string, coverImageUrl: string, title: string, releaseDate: string, artist: { name: string }, category: { name: string }, variants: Array<{ id: string, name: string, price: number, stock: number }>, tracks: Array<{ name: string, number: number }> } | null };

export type ProductsSearchQueryVariables = Exact<{
  query: Scalars['String']['input'];
}>;


export type ProductsSearchQuery = { productSearch?: Array<{ id: string, title: string, coverImageUrl: string, artist: { name: string }, category: { name: string }, variants: Array<{ price: number, stock: number, name: string }> }> | null };

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
export const OrderItemDetailsFragmentDoc = new TypedDocumentString(`
    fragment OrderItemDetails on OrderItem {
  id
  variant {
    id
    name
    price
    product {
      artist {
        name
      }
      title
    }
  }
  quantity
}
    `, {"fragmentName":"OrderItemDetails"}) as unknown as TypedDocumentString<OrderItemDetailsFragment, unknown>;
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
}
    `, {"fragmentName":"ProductOverview"}) as unknown as TypedDocumentString<ProductOverviewFragment, unknown>;
export const OrderCreateDocument = new TypedDocumentString(`
    mutation OrderCreate($userId: ID!) {
  createOrder(userId: $userId) {
    id
  }
}
    `) as unknown as TypedDocumentString<OrderCreateMutation, OrderCreateMutationVariables>;
export const CategoryCountDocument = new TypedDocumentString(`
    query CategoryCount($name: String!) {
  categoryCount(name: $name)
}
    `) as unknown as TypedDocumentString<CategoryCountQuery, CategoryCountQueryVariables>;
export const CategoryFindByNameWithPaginatedProductsDocument = new TypedDocumentString(`
    query CategoryFindByNameWithPaginatedProducts($name: String!, $skip: Int, $take: Int) {
  category(name: $name) {
    products(skip: $skip, take: $take) {
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
}`) as unknown as TypedDocumentString<CollectionFindByNameWithAllProductsQuery, CollectionFindByNameWithAllProductsQueryVariables>;
export const OrderGetByIdDocument = new TypedDocumentString(`
    query OrderGetById($orderId: ID!, $status: Status) {
  order(id: $orderId, status: $status) {
    id
    orderItems {
      ...OrderItemDetails
    }
    user {
      id
    }
  }
}
    fragment OrderItemDetails on OrderItem {
  id
  variant {
    id
    name
    price
    product {
      artist {
        name
      }
      title
    }
  }
  quantity
}`) as unknown as TypedDocumentString<OrderGetByIdQuery, OrderGetByIdQueryVariables>;
export const ProductCountDocument = new TypedDocumentString(`
    query ProductCount {
  productCount
}
    `) as unknown as TypedDocumentString<ProductCountQuery, ProductCountQueryVariables>;
export const ProductFindAllDocument = new TypedDocumentString(`
    query ProductFindAll($skip: Int, $take: Int) {
  products(skip: $skip, take: $take) {
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
}`) as unknown as TypedDocumentString<ProductFindByIdQuery, ProductFindByIdQueryVariables>;
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
}`) as unknown as TypedDocumentString<ProductsSearchQuery, ProductsSearchQueryVariables>;