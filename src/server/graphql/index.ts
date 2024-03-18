import fs from "node:fs/promises";

import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";

import { Context } from "../context";
import { rootResolve } from "../utils/root_resolve";
import { bookResolver } from "./book_resolver";
import { queryResolver } from "./query_resolver";
import { mutationResolver } from "./mutation_resolver";

export async function initializeApolloServer(): Promise<ApolloServer<Context>> {
  const typeDefs = await Promise.all(
    [
      rootResolve("./src/schema/book.graphql"),
      rootResolve("./src/schema/price_range.graphql"),
      rootResolve("./src/schema/query.graphql"),
      rootResolve("./src/schema/mutation.graphql"),
    ].map((filepath) => fs.readFile(filepath, { encoding: "utf-8" }))
  );

  const server = new ApolloServer<Context>({
    plugins: [
      ApolloServerPluginLandingPageLocalDefault({ includeCookies: true }),
    ],
    resolvers: {
      Book: bookResolver,
      Query: queryResolver,
      Mutation: mutationResolver,
    },
    typeDefs,
  });

  return server;
}
