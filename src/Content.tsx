import * as React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Input from './Input';
import CustomTodo from './Todo';

export default function Content() {

    return (
        <div>
            <div>
                <Link to="/input">
                    Go to input
                </Link>
                <span> | </span>
                <Link to="/todo">
                    Go to Todo
                </Link>
            </div>
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