import { Shop } from "../../schema/shop";
import { dataSource } from "../data_source";
import { ShopResolvers } from "../generated/graphql";

export const shopResolver: ShopResolvers = {
  id: async (parent: Shop) => {
    const shop = await dataSource.manager.findOneOrFail(Shop, {
      where: {
        id: parent.id,
      },
    });
    return shop.id;
  },
  name: async (parent: Shop) => {
    const shop = await dataSource.manager.findOneOrFail(Shop, {
      where: {
        id: parent.id,
      },
    });
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return shop.name;
  },
};
