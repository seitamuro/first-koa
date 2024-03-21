import { StrictMode } from "react"
import * as ReactDOM from "react-dom/client"

import { ApolloProvider } from "@apollo/client"
import { BrowserRouter } from "react-router-dom"
import Routes from "./components/application/Routes"

import { apolloClient } from "./utils/apollo"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ApolloProvider client={apolloClient}>
    <BrowserRouter>
      <StrictMode>
        <Routes />
      </StrictMode>
    </BrowserRouter >
  </ApolloProvider >
)