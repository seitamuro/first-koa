import { GetBooksDocument } from "../generated/graphql"
import { preloadQuery } from "../utils/apollo"

export const preloadedGetBooks = preloadQuery(GetBooksDocument)