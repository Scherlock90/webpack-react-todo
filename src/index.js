import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Content from './Content';

ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Content />
    </BrowserRouter>,
    document.getElementById('root')
);