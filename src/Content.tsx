import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Nav } from './components/nav/Nav';
import { Notfound } from './components/not-found/NotFound';

import './style/app.css';

const HomePage = React.lazy(() => import('./components/home-page/HomePage'));
const Custom = React.lazy(() => import('./components/todo/custom-todo/CustomTodo'));
const Input = React.lazy(() => import('./components/input/Input'));

export const Content = () =>
    <>
        <Nav />
        <Switch>
            <Route
                exact
                path="/"
                component={HomePage}
            />
            <Route
                path="/"
                component={Custom}
            />
            <Route
                path="/input"
                component={Input}
            />
            <Route component={Notfound} />
        </Switch>
    </>