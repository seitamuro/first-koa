import { StrictMode } from "react"
import * as ReactDOM from "react-dom/client"

import { App } from "./components/application/App"
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from "@apollo/client"
import { BrowserRouter } from "react-router-dom"
import { Routes } from "./components/application/Routes/Routes"

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  connectToDevTools: true,
  link: new HttpLink(),
  queryDeduplication: false,
  uri: "/graphql"
})

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ApolloProvider client={apolloClient}>
    <BrowserRouter>
      <StrictMode>
        <Routes />
      </StrictMode>
    </BrowserRouter >
  </ApolloProvider >
)