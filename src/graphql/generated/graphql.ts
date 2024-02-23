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
  product?: Maybe<Product>;
  productCount: Scalars['Int']['output'];
  productSearch?: Maybe<Array<Product>>;
  products: Array<Product>;
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

export type Track = {
  name: Scalars['String']['output'];
  number: Scalars['Int']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

export type Variant = {
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  stock: Scalars['Int']['output'];
};

export type CategoryCountQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type CategoryCountQuery = { categoryCount: number };

export type CategoryFindByNameWithPaginatedProductsQueryVariables = Exact<{
  name: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CategoryFindByNameWithPaginatedProductsQuery = { category?: { products: Array<{ id: string, title: string, coverImageUrl: string, artist: { name: string }, category: { name: string } }> } | null };

export type CollectionFindAllQueryVariables = Exact<{ [key: string]: never; }>;


export type CollectionFindAllQuery = { collections?: Array<{ id: string, name: string }> | null };

export type CollectionFindByNameWithAllProductsQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type CollectionFindByNameWithAllProductsQuery = { collection?: { id: string, name: string, products: Array<{ id: string, title: string, coverImageUrl: string, artist: { name: string }, category: { name: string } }> } | null };

export type ProductCountQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductCountQuery = { productCount: number };

export type ProductFindAllQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ProductFindAllQuery = { products: Array<{ id: string, title: string, coverImageUrl: string, artist: { name: string }, category: { name: string } }> };

export type ProductFindByIdQueryVariables = Exact<{
  productId: Scalars['ID']['input'];
}>;


export type ProductFindByIdQuery = { product?: { id: string, coverImageUrl: string, title: string, releaseDate: string, artist: { name: string }, category: { name: string }, variants: Array<{ name: string, price: number, stock: number }>, tracks: Array<{ name: string, number: number }> } | null };

export type ProductsSearchQueryVariables = Exact<{
  query: Scalars['String']['input'];
}>;


export type ProductsSearchQuery = { productSearch?: Array<{ id: string, title: string, coverImageUrl: string, artist: { name: string }, category: { name: string } }> | null };

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

export const CategoryCountDocument = new TypedDocumentString(`
    query CategoryCount($name: String!) {
  categoryCount(name: $name)
}
    `) as unknown as TypedDocumentString<CategoryCountQuery, CategoryCountQueryVariables>;
export const CategoryFindByNameWithPaginatedProductsDocument = new TypedDocumentString(`
    query CategoryFindByNameWithPaginatedProducts($name: String!, $skip: Int, $take: Int) {
  category(name: $name) {
    products(skip: $skip, take: $take) {
      id
      artist {
        name
      }
      title
      category {
        name
      }
      coverImageUrl
    }
  }
}
    `) as unknown as TypedDocumentString<CategoryFindByNameWithPaginatedProductsQuery, CategoryFindByNameWithPaginatedProductsQueryVariables>;
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
      id
      artist {
        name
      }
      title
      category {
        name
      }
      coverImageUrl
    }
  }
}
    `) as unknown as TypedDocumentString<CollectionFindByNameWithAllProductsQuery, CollectionFindByNameWithAllProductsQueryVariables>;
export const ProductCountDocument = new TypedDocumentString(`
    query ProductCount {
  productCount
}
    `) as unknown as TypedDocumentString<ProductCountQuery, ProductCountQueryVariables>;
export const ProductFindAllDocument = new TypedDocumentString(`
    query ProductFindAll($skip: Int, $take: Int) {
  products(skip: $skip, take: $take) {
    id
    artist {
      name
    }
    title
    category {
      name
    }
    coverImageUrl
  }
}
    `) as unknown as TypedDocumentString<ProductFindAllQuery, ProductFindAllQueryVariables>;
export const ProductFindByIdDocument = new TypedDocumentString(`
    query ProductFindById($productId: ID!) {
  product(id: $productId) {
    id
    artist {
      name
    }
    category {
      name
    }
    coverImageUrl
    variants {
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
}
    `) as unknown as TypedDocumentString<ProductFindByIdQuery, ProductFindByIdQueryVariables>;
export const ProductsSearchDocument = new TypedDocumentString(`
    query ProductsSearch($query: String!) {
  productSearch(query: $query) {
    id
    artist {
      name
    }
    title
    category {
      name
    }
    coverImageUrl
  }
}
    `) as unknown as TypedDocumentString<ProductsSearchQuery, ProductsSearchQueryVariables>;