import * as React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <div>
            <Link to="/input">
                Go to input
                </Link>
            <span> | </span>
            <Link to="/todo">
                Go to Todo
                </Link>
        </div>
    )
}