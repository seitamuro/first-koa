import { dataSource } from "../data_source";
import { Book } from "../model/book";

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
    const book = dataSource.manager.create(Book, {
      title: _args.title,
      author: _args.author,
      price: _args.price,
    });
    await dataSource.manager.save(book);
    return book;
  },
};
