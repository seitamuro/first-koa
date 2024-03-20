import { FC, Suspense } from "react";
import * as Router from "react-router-dom"
import { lazy } from "react"

const SuspenseSelect = lazy(() => import("../../../pages/SuspenseSelect"))
const Top = lazy(() => import("../../../pages/Top"))
const Select = lazy(() => import("../../../pages/Select"))

export const Routes: FC = () => {
  return (
    <Router.Routes>
      <Router.Route element={<Top />} path="/" />
      <Router.Route element={<Suspense fallback={<p>Loading...</p>}><SuspenseSelect /></Suspense>} path="/suspense-select" />
      <Router.Route element={<Select />} path="/select" />
    </Router.Routes>
  )
}