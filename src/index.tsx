import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Content } from './Content';

ReactDOM.render(
    <React.Suspense fallback={<h1>loading state...</h1>} >
        <BrowserRouter basename={'/webpack-react-todo'}>
            <Content />
        </BrowserRouter>
    </React.Suspense>,
    document.getElementById('root')
);
