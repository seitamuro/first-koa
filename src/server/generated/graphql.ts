import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
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
  createPhoto: Photo;
  createShop: Shop;
};


export type MutationCreateBookArgs = {
  author: Scalars['String']['input'];
  price: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};


export type MutationCreatePhotoArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  metadata: PhotoMetadataInput;
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateShopArgs = {
  name: Scalars['String']['input'];
};

export type Photo = {
  __typename?: 'Photo';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  metadata: PhotoMetadata;
  name?: Maybe<Scalars['String']['output']>;
};

export type PhotoMetadata = {
  __typename?: 'PhotoMetadata';
  createdAt: Scalars['DateTime']['output'];
  height: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  width: Scalars['Int']['output'];
};

export type PhotoMetadataInput = {
  height: Scalars['Int']['input'];
  width: Scalars['Int']['input'];
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
  photos: Array<Photo>;
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Book: ResolverTypeWrapper<Book>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Photo: ResolverTypeWrapper<Photo>;
  PhotoMetadata: ResolverTypeWrapper<PhotoMetadata>;
  PhotoMetadataInput: PhotoMetadataInput;
  PriceSearchInput: PriceSearchInput;
  Query: ResolverTypeWrapper<{}>;
  Shop: ResolverTypeWrapper<Shop>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Book: Book;
  Boolean: Scalars['Boolean']['output'];
  DateTime: Scalars['DateTime']['output'];
  Int: Scalars['Int']['output'];
  Mutation: {};
  Photo: Photo;
  PhotoMetadata: PhotoMetadata;
  PhotoMetadataInput: PhotoMetadataInput;
  PriceSearchInput: PriceSearchInput;
  Query: {};
  Shop: Shop;
  String: Scalars['String']['output'];
};

export type BookResolvers<ContextType = any, ParentType extends ResolversParentTypes['Book'] = ResolversParentTypes['Book']> = {
  author?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createBook?: Resolver<ResolversTypes['Book'], ParentType, ContextType, RequireFields<MutationCreateBookArgs, 'author' | 'price' | 'title'>>;
  createPhoto?: Resolver<ResolversTypes['Photo'], ParentType, ContextType, RequireFields<MutationCreatePhotoArgs, 'metadata'>>;
  createShop?: Resolver<ResolversTypes['Shop'], ParentType, ContextType, RequireFields<MutationCreateShopArgs, 'name'>>;
};

export type PhotoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Photo'] = ResolversParentTypes['Photo']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  metadata?: Resolver<ResolversTypes['PhotoMetadata'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PhotoMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['PhotoMetadata'] = ResolversParentTypes['PhotoMetadata']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  height?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  width?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  book?: Resolver<ResolversTypes['Book'], ParentType, ContextType, RequireFields<QueryBookArgs, 'id'>>;
  books?: Resolver<Array<ResolversTypes['Book']>, ParentType, ContextType>;
  findBookByAuthor?: Resolver<Array<ResolversTypes['Book']>, ParentType, ContextType, RequireFields<QueryFindBookByAuthorArgs, 'author'>>;
  findBookByPrice?: Resolver<Array<ResolversTypes['Book']>, ParentType, ContextType, RequireFields<QueryFindBookByPriceArgs, 'where'>>;
  findBookByTitle?: Resolver<Array<ResolversTypes['Book']>, ParentType, ContextType, RequireFields<QueryFindBookByTitleArgs, 'title'>>;
  photos?: Resolver<Array<ResolversTypes['Photo']>, ParentType, ContextType>;
  shops?: Resolver<Array<ResolversTypes['Shop']>, ParentType, ContextType>;
};

export type ShopResolvers<ContextType = any, ParentType extends ResolversParentTypes['Shop'] = ResolversParentTypes['Shop']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Book?: BookResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Photo?: PhotoResolvers<ContextType>;
  PhotoMetadata?: PhotoMetadataResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Shop?: ShopResolvers<ContextType>;
};

