import { dataSource } from "../data_source";
import { Book } from "../../model/book";

type MutationResolver = {
  createBook: (
    _parent: unknown,
    _args: { title?: string; author?: string; price?: number },
    _context: unknown,
    _info: unknown
  ) => Promise<Book>;
};

export const mutationResolver: MutationResolver = {
  createBook: async (_parent, _args, _context, _info) => {
    const book: Book = await dataSource.transaction(async (manager) => {
      const exists = await manager.findOne(Book, {
        where: { title: _args.title },
      });
      if (exists) {
        return exists;
      }
      return book;
    });
    await dataSource.manager.save(book);
    return book;
  },
};
