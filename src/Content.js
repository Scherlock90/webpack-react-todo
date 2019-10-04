import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Notfound from './components/NotFound';
// import './style/app.css';

import HomePage from './components/HomePage'
import CustomTodo from './components/Todo/CustomTodo'
import Input from './components/Input'

// const HomePage = React.lazy(() => import('./components/HomePage'));
// const CustomTodo = React.lazy(() => import('./components/Todo/CustomTodo'));
// const Input = React.lazy(() => import('./components/Input'));

function Content() {

    return (
        <div>
                <HomePage path="/"/>
                <CustomTodo path="todo" />
                <Input path="/input" />
        </div>
    )
}

export default Content;