import * as React from "react";

import { Notfound } from "../components/not-found/NotFound";

const HomePage = React.lazy(() => import("../components/home-page/HomePage"));
const Custom = React.lazy(() => import("../components/todo/Todo"));
const Input = React.lazy(() => import("../components/input/Input"));

export const routesArray = [
  { path: "/", component: HomePage, exact: true },
  { path: "/todo", component: Custom, exact: false },
  { path: "/input", component: Input, exact: false },
  { path: "", component: Notfound, exact: false }
];
