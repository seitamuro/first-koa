import { Book } from "../../model/book";
import { dataSource } from "../data_source";
import { QueryResolvers } from "../../generated/graphql";

export const queryResolver: QueryResolvers = {
  book: async (_parent, _args, _context, _info) => {
    return dataSource.manager.findOneOrFail(Book, { where: { id: _args.id } });
  },
  books: () => {
    return dataSource.manager.find(Book);
  },
};
