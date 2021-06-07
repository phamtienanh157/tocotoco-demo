import React, { lazy, Suspense } from "react";
// import { Switch } from "react-router-dom";
// import Loading from "src/components/Loading/Loading";
// import { PATH } from "src/constants/paths";
// import PublicGuard from "src/guards/PublicGuard";
const Home = lazy(() => import("../pages/Home"));

export default function HomeRoutes() {
  return (
    <Suspense fallback="hi">
      <Home />
    </Suspense>
  );
}
