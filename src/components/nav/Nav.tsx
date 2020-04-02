import * as React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () =>
    <>
        <Link to="/"> Go to Home </Link>
        <span> | </span>
        <Link to="/input"> Go to input </Link>
        <span> | </span>
        <Link to="/todo"> Go to Todo </Link>
    </>