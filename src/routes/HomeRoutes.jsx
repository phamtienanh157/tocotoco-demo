import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { PATH } from "../constants/paths";
const Home = lazy(() => import("../pages/Home"));

export default function HomeRoutes() {
  return (
    <Switch>
      <Route
        path={PATH.HOME}
        component={() => (
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        )}
      />
    </Switch>
  );
}
