// import React, { Suspense } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link } from '@reach/router';
import Content from './Content';
import HomePage from './components/HomePage';
import CustomTodo from './components/Todo/CustomTodo';
import Input from './components/Input';
import Nav from './components/Nav';

// ReactDOM.render(
//     <Suspense fallback={<h1>loading state...</h1>} >
//         <BrowserRouter basename={'/webpack-react-todo'}>
//             <Content />
//         </BrowserRouter>
//     </Suspense>,
//     document.getElementById('root')
// );


function Index() {
    return(
        // <Suspense fallback={<h1>loading state...</h1>} >
        <div>
            
            <Nav />
        <Router >
            {/* <Nav path="/" /> */}
            <HomePage path="/">

            </HomePage>
                <CustomTodo path="/todo" />
                <Input path="/input" />
            
        </Router>
        </div>
        // </Suspense>
    )
}

export default Index;