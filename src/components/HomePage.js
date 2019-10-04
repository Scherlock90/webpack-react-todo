import React from 'react';
import { Link } from '@reach/router';
import Nav from './Nav';

export default function HomePage() {
    const title = <h1 className="main-title"> WebPack custom configuration </h1>;
    return (
        <div className="container-home-page">
            {/* <Link to="/">
                Go to Home
            </Link>
            <span> | </span>
            <Link to="input">
                Go to input
            </Link>
            <span> | </span>
            <Link to="todo">
                Go to Todo
            </Link> */}
            {/* <Link to="todo"> Todo </Link> */}
            {/* <Nav /> */}
        </div>
    )
}