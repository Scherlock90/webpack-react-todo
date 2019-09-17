import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Content from './Content';

ReactDOM.render(
    <BrowserRouter basename={'/webpack-react-todo'}>
        <Content />
    </BrowserRouter>,
    document.getElementById('root')
);
