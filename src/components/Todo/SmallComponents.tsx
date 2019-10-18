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

interface FilterProps extends Count {
    onlyCompleted: boolean
    onlyIncompleted: boolean
    onFilterCompletedClicked: () => void
    onFilterIncompletedClicked: () => void
    onFilterAllClicked: () => void
}

export const Footer: React.FC<FilterProps> = ({ ...props}) => {
    return (
        <footer>
            <Count count={props.count} />
            <Filters 
                {...props} 
            />
        </footer>
    );
}