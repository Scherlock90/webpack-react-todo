import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Notfound from './components/NotFound';

const HomePage = React.lazy(() => import('./components/HomePage'));
const CustomTodo = React.lazy(() => import('./components/Todo/CustomTodo'));
const Input = React.lazy(() => import('./components/Input'));


export default function Content() {

    return (
        <div>
            <Nav />
            <Switch>
                <Route
                    exact
                    path="/"
                    component={HomePage}
                />
                <Route
                    path="/todo"
                    component={CustomTodo}
                />
                <Route
                    path="/input"
                    component={Input}
                />
                <Route component={Notfound} />
            </Switch>
        </div>
    )
}