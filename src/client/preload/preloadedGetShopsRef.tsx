import { GetShopsDocument } from "../generated/graphql";
import { preloadQuery } from "../utils/apollo";

export const preloadedGetShopsRef = preloadQuery(GetShopsDocument);