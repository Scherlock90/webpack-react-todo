import * as React from 'react';
import Filters from './Filters';

interface Count {
    count: number
}

export const badId = pre => {
    return `${pre}_${new Date().getTime()}`;
}

export const Count: React.FC<Count> = props => {
    return (
        <span className='count'>
            {props.count} Items
      </span>
    );
}

export const Footer: React.FC<Count> = props => {
    return (
        <footer>
            <Count count={props.count} />
            <Filters {...props} />
        </footer>
    );
}