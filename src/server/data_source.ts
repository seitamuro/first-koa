import "reflect-metadata";
import { DataSource } from "typeorm";

import { Book } from "../schema/book";
import { Shop } from "../schema/shop";
import { DATABASE_PATH } from "./utils/database_paths";

export const dataSource = new DataSource({
  database: DATABASE_PATH,
  entities: [Book, Shop],
  logging: false,
  migrations: [],
  subscribers: [],
  synchronize: true,
  type: "sqlite",
});
