import React from 'react';
import Filters from './Filters';

export const badId = pre => {
    return `${pre}_${new Date().getTime()}`;
}

export const Count = props => {
    return (
        <span className='count'>
            {props.count} Items
      </span>
    );
}

export const Footer = props => {
    return (
        <footer>
            <Count count={props.count} />
            <Filters {...props} />
        </footer>
    );
}