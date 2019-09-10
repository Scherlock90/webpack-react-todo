import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CustomTodo from './Todo';

ReactDOM.render(
    <BrowserRouter>
        <CustomTodo />
    </BrowserRouter>,
    document.getElementById('root')
);