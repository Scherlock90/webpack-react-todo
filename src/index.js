import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Content from './Content';

ReactDOM.render(
    <Suspense fallback={<h1>loading state...</h1>} >
        <BrowserRouter basename={'/webpack-react-todo'}>
            <Content />
        </BrowserRouter>
    </Suspense>,
    document.getElementById('root')
);
