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
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  product?: Maybe<Array<Product>>;
};

export type Collection = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  product?: Maybe<Array<Product>>;
};

export type CoverImage = {
  height: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  product?: Maybe<Product>;
  url: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};

export type Product = {
  artist: Scalars['String']['output'];
  category: Scalars['String']['output'];
  collection?: Maybe<Array<Collection>>;
  coverImg: CoverImage;
  id: Scalars['ID']['output'];
  price: Scalars['Int']['output'];
  releaseDate: Scalars['String']['output'];
  stock: Stock;
  title: Scalars['String']['output'];
  tracks: Array<Track>;
};

export type Query = {
  count: Scalars['Int']['output'];
  product?: Maybe<Product>;
  products?: Maybe<Array<Maybe<Product>>>;
};


export type QueryProductArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type Stock = {
  id: Scalars['ID']['output'];
  product?: Maybe<Product>;
  qtyCd: Scalars['Int']['output'];
  qtyLp: Scalars['Int']['output'];
};

export type Track = {
  artist?: Maybe<Artist>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  product?: Maybe<Product>;
  url: Scalars['String']['output'];
};

export type ProductsOverviewDataQueryVariables = Exact<{
  take: Scalars['Int']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ProductsOverviewDataQuery = { products?: Array<{ artist: string, category: string, id: string, price: number, title: string, collection?: Array<{ name: string }> | null, coverImg: { url: string, height: number, width: number } } | null> | null };

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

export const ProductsOverviewDataDocument = new TypedDocumentString(`
    query ProductsOverviewData($take: Int!, $skip: Int) {
  products(take: $take, skip: $skip) {
    artist
    category
    collection {
      name
    }
    coverImg {
      url
      height
      width
    }
    id
    price
    title
  }
}
    `) as unknown as TypedDocumentString<ProductsOverviewDataQuery, ProductsOverviewDataQueryVariables>;