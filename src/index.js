import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CustomTodo from './Todo';

if (process.env.NODE_ENV === 'development') {
    console.log('Looks like we are in development mode!');
}
ReactDOM.render(
    <BrowserRouter>
        <CustomTodo />
    </BrowserRouter>,
    document.getElementById('root')
);