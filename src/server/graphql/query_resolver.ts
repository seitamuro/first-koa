import { Book } from "../../schema/book";
import { Photo } from "../../schema/photo";
import { Shop } from "../../schema/shop";
import { dataSource } from "../data_source";
import { QueryResolvers } from "../generated/graphql";

export const queryResolver: QueryResolvers = {
  book: async (_parent, _args, _context, _info) => {
    return dataSource.manager.findOneOrFail(Book, { where: { id: _args.id } });
  },
  findBookByTitle: async (_parent, _args, _context, _info) => {
    return dataSource.manager.find(Book, { where: { title: _args.title } });
  },
  findBookByPrice: async (_parent, _args, _context, _info) => {
    const queryBuilder = dataSource.manager.createQueryBuilder(Book, "book");
    if (_args.where._gte) {
      queryBuilder.andWhere("book.price >= :_gte", {
        _gte: _args.where._gte,
      });
    }
    if (_args.where._lte) {
      queryBuilder.andWhere("book.price <= :_lte", {
        _lte: _args.where._lte,
      });
    }
    if (_args.where._eq) {
      queryBuilder.andWhere("book.price = :_eq", { _eq: _args.where._eq });
    }
    return await queryBuilder.getMany();
  },
  books: () => {
    return dataSource.manager.find(Book);
  },
  shops: () => {
    return dataSource.manager.find(Shop);
  },
  photos: () => {
    return dataSource.manager
      .createQueryBuilder(Photo, "photo")
      .leftJoinAndSelect("photo.metadata", "metadata")
      .getMany();
  },
};
