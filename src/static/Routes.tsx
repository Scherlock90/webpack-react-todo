import HomePage from "../components/home-page/HomePage";
import Custom from "../components/todo/Todo";
import Input from "../components/input/Input";

import { Notfound } from "../components/not-found/NotFound";

export const routesArray = [
  { path: "/", component: HomePage, exact: true },
  { path: "/todo", component: Custom, exact: false },
  { path: "/input", component: Input, exact: false },
  { path: "", component: Notfound, exact: false }
];
