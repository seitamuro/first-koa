import { FC, Suspense } from "react";
import * as Router from "react-router-dom"
import { lazy } from "react"

const Top = lazy(() => import("../../../pages/Top"))
const Select = lazy(() => import("../../../pages/SuspenseSelect"))

export const Routes: FC = () => {
  return (
    <Router.Routes>
      <Router.Route element={<Top />} path="/" />
      <Router.Route element={<Suspense fallback={<p>Loading...</p>}><Select /></Suspense>} path="/suspense-select" />
    </Router.Routes>
  )
}