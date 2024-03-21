/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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

export type Book = {
  __typename?: 'Book';
  author: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  price: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBook: Book;
  createShop: Shop;
};


export type MutationCreateBookArgs = {
  author: Scalars['String']['input'];
  price: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};


export type MutationCreateShopArgs = {
  name: Scalars['String']['input'];
};

export type PriceSearchInput = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
};

export type Query = {
  __typename?: 'Query';
  book: Book;
  books: Array<Book>;
  findBookByAuthor: Array<Book>;
  findBookByPrice: Array<Book>;
  findBookByTitle: Array<Book>;
  shops: Array<Shop>;
};


export type QueryBookArgs = {
  id: Scalars['Int']['input'];
};


export type QueryFindBookByAuthorArgs = {
  author: Scalars['String']['input'];
};


export type QueryFindBookByPriceArgs = {
  where: PriceSearchInput;
};


export type QueryFindBookByTitleArgs = {
  title: Scalars['String']['input'];
};

export type Shop = {
  __typename?: 'Shop';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type GetBookQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetBookQuery = { __typename?: 'Query', book: { __typename?: 'Book', title: string, author: string, price: number } };

export type GetBooksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBooksQuery = { __typename?: 'Query', books: Array<{ __typename?: 'Book', id: number, title: string, author: string, price: number }> };

export type GetShopsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetShopsQuery = { __typename?: 'Query', shops: Array<{ __typename?: 'Shop', id: number, name: string }> };


export const GetBookDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBook"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"book"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"author"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}}]}}]} as unknown as DocumentNode<GetBookQuery, GetBookQueryVariables>;
export const GetBooksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBooks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"books"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"author"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}}]}}]} as unknown as DocumentNode<GetBooksQuery, GetBooksQueryVariables>;
export const GetShopsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetShops"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shops"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetShopsQuery, GetShopsQueryVariables>;