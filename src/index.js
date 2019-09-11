import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as createHistory from 'history';
import Content from './Content';

const history = createHistory.createBrowserHistory({
    basename: process.env.PUBLIC_URL,
});

ReactDOM.render(
    <BrowserRouter history={history} >
        <Content />
    </BrowserRouter>,
    document.getElementById('root')
);