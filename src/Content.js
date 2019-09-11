import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Loadable from 'react-loadable';
import Contact from './Contact';

function Loading({ error }) {
    if (error) {
        return 'oh-noes!';
    } else {
        return <h3>Loading...</h3>;
    }
}

const LoadableTodo = Loadable({
    loader: () => import('./Todo'),
    loading: Loading,
    modules: ['./Todo'],
    webpack: () => [require.resolveWeak('./Todo')],
});

const LoadableContact = Loadable({
    loader: () => import('./Contact'),
    loading: Loading
});

export default function Content() {

    return (
        <div>
            <div>
                <Link to="/contact">
                    Go to Contact!
                </Link>
                <Link to="/todo">
                    Go to Todo!
                </Link>
            </div>
            <Switch>
                <Route 
                    exact 
                    path="/" 
                    component={LoadableTodo}
                />
                <Route 
                    path="/todo" 
                    component={LoadableTodo} 
                />
                <Route 
                    path="/contact" 
                    component={Contact} 
                />
            </Switch>
        </div>
    )
}