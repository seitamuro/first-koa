import { Shop } from "../../schema/shop";
import { ShopResolvers } from "../generated/graphql";

export const shopResolver: ShopResolvers = {
  id: async (parent: Shop) => {
    return parent.id;
  },
  name: async (parent: Shop) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return parent.name;
  },
};
