import React from "react";
import { BrowserRouter } from "react-router-dom";
import HomeRoutes from "./HomeRoutes";
import OrderRoutes from "./OrderRoutes";

export default function Routes() {
  return (
    <BrowserRouter>
      <HomeRoutes />
      <OrderRoutes />
    </BrowserRouter>
  );
}
