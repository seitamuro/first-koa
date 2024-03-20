import { dataSource } from "../data_source";
import { Book } from "../../schema/book";
import type { BookResolvers } from "../generated/graphql";

export const bookResolver: BookResolvers = {
  id: async (parent: Book) => {
    const book = await dataSource.manager.findOneOrFail(Book, {
      where: {
        id: parent.id,
      },
    });
    return book.id;
  },
  title: async (parent: Book) => {
    const book = await dataSource.manager.findOneOrFail(Book, {
      where: {
        id: parent.id,
      },
    });
    return book.title;
  },
  author: async (parent: Book) => {
    const book = await dataSource.manager.findOneOrFail(Book, {
      where: {
        id: parent.id,
      },
    });
    return book.author;
  },
  price: async (parent: Book) => {
    const book = await dataSource.manager.findOneOrFail(Book, {
      where: {
        id: parent.id,
      },
    });
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return book.price;
  },
};
