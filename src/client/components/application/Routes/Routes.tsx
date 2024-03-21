import { FC, Suspense, lazy } from "react";
import * as Router from "react-router-dom";

const SuspenseSelect = lazy(() => import("../../../pages/SuspenseSelect"))
const Top = lazy(() => import("../../../pages/Top"))
const Select = lazy(() => import("../../../pages/Select"))
const RenderingPartialData = lazy(() => import("../../../pages/RenderingPartialData"))
const NotAvoidingRequestWaterfalls = lazy(() => import("../../../pages/NotAvoidingRequestWaterfalls"))
const AvoidingRequestWaterfalls = lazy(() => import("../../../pages/AvoidingRequestWaterfalls"))

export const Routes: FC = () => {
  return (
    <Router.Routes>
      <Router.Route element={<Top />} path="/" />
      <Router.Route element={<Suspense fallback={<p>Loading...</p>}><SuspenseSelect /></Suspense>} path="/suspense-select" />
      <Router.Route element={<Select />} path="/select" />
      <Router.Route element={<Suspense fallback={<p>Loading...</p>}><RenderingPartialData /></Suspense>} path="/rendering-partial-data" />
      <Router.Route element={<Suspense fallback={<div>Loading...</div>}><NotAvoidingRequestWaterfalls /></Suspense>} path="/not-avoiding-request-waterfalls" />
      <Router.Route element={<Suspense fallback={<div>Loading...</div>}><AvoidingRequestWaterfalls /></Suspense>} path="/avoiding-request-waterfalls" />
    </Router.Routes>
  )
}