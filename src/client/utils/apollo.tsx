import { ApolloClient, HttpLink, InMemoryCache, createQueryPreloader } from "@apollo/client";

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  connectToDevTools: true,
  link: new HttpLink(),
  queryDeduplication: false,
  uri: "/graphql"
})


export const preloadQuery = createQueryPreloader(apolloClient)