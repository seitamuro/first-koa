import { FC } from "react";
import * as Router from "react-router-dom"
import { lazy } from "react"

const Top = lazy(() => import("../../../pages/Top"))

export const Routes: FC = () => {
  return (
    <Router.Routes>
      <Router.Route element={<Top />} path="/" />
    </Router.Routes>
  )
}