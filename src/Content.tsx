import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import { Nav } from "./components/nav/Nav";

import "./style/app.css";
import { routesArray } from "./static/Routes";

export const Content = () => (
  <BrowserRouter>
    <React.Suspense fallback={<h1>loading state...</h1>}>
      <Nav />
      <Switch>
        {routesArray.map(({ exact, path, component }, index) => (
          <Route key={index} exact={exact} path={path} component={component} />
        ))}
      </Switch>
    </React.Suspense>
  </BrowserRouter>
);
