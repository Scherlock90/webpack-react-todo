import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Input from './Input';
import CustomTodo from './Todo';
import Nav from './Nav';

export default function Content() {

    return (
        <div>
            <Nav />
            <Switch>
                <Route
                    exact
                    path="/"
                    component={CustomTodo}
                />
                <Route
                    path="/todo"
                    component={CustomTodo}
                />
                <Route
                    path="/input"
                    component={Input}
                />
            </Switch>
        </div>
    )
}