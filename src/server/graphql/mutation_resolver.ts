import { dataSource } from "../data_source";
import { Book } from "../../schema/book";
import { MutationResolvers } from "../generated/graphql";

export const mutationResolver: MutationResolvers = {
  createBook: async (_parent, _args, _context, _info) => {
    const book: Book = await dataSource.transaction(async (manager) => {
      const exists = await manager.findOne(Book, {
        where: { title: _args.title },
      });
      if (exists) {
        return exists;
      }

      const book = new Book();
      book.title = _args.title;
      book.author = _args.author;
      book.price = _args.price;
      return book;
    });
    await dataSource.manager.save(book);
    return book;
  },
};
