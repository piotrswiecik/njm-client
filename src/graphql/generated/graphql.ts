/* eslint-disable */
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
  products?: Maybe<Array<Product>>;
};


export type CategoryProductsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type Collection = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products?: Maybe<Array<Product>>;
};

export type Product = {
  artist?: Maybe<Artist>;
  category?: Maybe<Category>;
  coverImageUrl: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  releaseDate: Scalars['String']['output'];
  title: Scalars['String']['output'];
  tracks?: Maybe<Array<Maybe<Track>>>;
  variants?: Maybe<Array<Maybe<Variant>>>;
};

export type Query = {
  category?: Maybe<Category>;
  categoryCount: Scalars['Int']['output'];
  collection?: Maybe<Collection>;
  collections?: Maybe<Array<Collection>>;
  product?: Maybe<Product>;
  productCount: Scalars['Int']['output'];
  productSearch?: Maybe<Array<Maybe<Product>>>;
  products?: Maybe<Array<Maybe<Product>>>;
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

export type Stock = {
  qtyCd: Scalars['Int']['output'];
  qtyLp: Scalars['Int']['output'];
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
