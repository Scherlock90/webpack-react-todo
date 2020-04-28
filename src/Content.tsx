import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Nav } from "./components/nav/Nav";

import "./style/app.css";
import { routesArray } from "./static/Routes";

export const Content = () => (
  <BrowserRouter basename={"/webpack-react-todo"}>
    <Nav />
    <Switch>
      {routesArray.map(({ exact, path, component }, index) => (
        <Route key={index} exact={exact} path={path} component={component} />
      ))}
    </Switch>
  </BrowserRouter>
);
