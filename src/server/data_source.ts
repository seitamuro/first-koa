import "reflect-metadata";
import { DataSource } from "typeorm";

import { DATABASE_PATH } from "./utils/database_paths";
import { Book } from "../model/book";

export const dataSource = new DataSource({
  database: DATABASE_PATH,
  entities: [Book],
  logging: false,
  migrations: [],
  subscribers: [],
  synchronize: true,
  type: "sqlite",
});
