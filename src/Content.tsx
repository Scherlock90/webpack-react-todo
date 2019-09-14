import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Input from './components/Input';
import CustomTodo from './components/Todo/CustomTodo';
import Nav from './components/Nav';

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
            </Switch>
        </div>
    )
}