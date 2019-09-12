import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import Content from './Content';

ReactDOM.render(
    <HashRouter basename={process.env.PUBLIC_URL}>
        <Content />
    </HashRouter>,
    document.getElementById('root')
);