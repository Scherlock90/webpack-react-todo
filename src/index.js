import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// import App from './Todo';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);