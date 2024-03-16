import type { GraphQLFieldResolver } from "graphql";
import type { Context } from "@apollo/client";
import { Book } from "../model/book";
import { dataSource } from "../data_source";

type QueryResolver = {
  book: GraphQLFieldResolver<unknown, Context, { id: number }, Promise<Book>>;
  books: () => Promise<Book[]>;
};

export const queryResolver: QueryResolver = {
  book: async (_parent, _args, _context, _info) => {
    return dataSource.manager.findOneOrFail(Book, { where: { id: _args.id } });
  },
  books: () => {
    return dataSource.manager.find(Book);
  },
};
