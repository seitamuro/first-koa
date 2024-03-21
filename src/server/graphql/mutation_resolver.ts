import { Book } from "../../schema/book";
import { Photo } from "../../schema/photo";
import { PhotoMetadata } from "../../schema/photometadata";
import { Shop } from "../../schema/shop";
import { dataSource } from "../data_source";
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
  createShop: async (_parent, _args, _context, _info) => {
    const shop: Shop = await dataSource.transaction(async (manager) => {
      const exists = await manager.findOne(Shop, {
        where: { name: _args.name },
      });
      if (exists) {
        return exists;
      }
      const shop = new Shop();
      shop.name = _args.name;
      return shop;
    });
    await dataSource.manager.save(shop);
    return shop;
  },
  createPhoto: async (_parent, _args, _context, _info) => {
    const metadata = new PhotoMetadata();
    metadata.height = _args.metadata.height;
    metadata.width = _args.metadata.width;
    metadata.createdAt = new Date();

    await dataSource.manager.save(metadata);

    const photo = new Photo();
    if (_args.name) {
      photo.name = _args.name;
    }

    if (_args.description) {
      photo.description = _args.description;
    }

    photo.metadata = metadata;
    await dataSource.manager.save(photo);

    return photo;
  },
};
