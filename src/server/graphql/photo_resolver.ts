import { PhotoResolvers } from "../generated/graphql";

export const photoResolvers: PhotoResolvers = {
  id: async (parent) => {
    return parent.id;
  },
  name: async (parent) => {
    return parent.name ?? null;
  },
  description: async (parent) => {
    return parent.description ?? null;
  },
  metadata: async (parent) => {
    return {
      id: parent.metadata.id,
      height: parent.metadata.height,
      width: parent.metadata.width,
      createdAt: parent.metadata.createdAt,
    };
  },
};
