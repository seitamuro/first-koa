import DataLoader from "dataloader";

import type { GraphQLModelResolver } from "./model_resolver";
import { dataSource } from "../data_source";
import { Book } from "../../model/book";

export const bookResolver: GraphQLModelResolver<Book> = {
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
    return book.price;
  },
};