import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { PATH } from "../constants/paths";
const Order = lazy(() => import("../pages/Order"));

export default function OrderRoutes() {
  return (
    <Switch>
      <Route
        exact
        path={PATH.ORDER}
        component={() => (
          <Suspense fallback={<div>Loading...</div>}>
            <Order />
          </Suspense>
        )}
      />
    </Switch>
  );
}
