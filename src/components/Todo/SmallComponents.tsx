import * as React from 'react';
import Filters from './Filters';

interface CountProps {
    count: number 
}

export const badId = pre => {
    return `${pre}_${new Date().getTime()}`;
}

export const Count: React.FC<CountProps> = props => {
    return (
        <span className='count'>
            {props.count} Items
      </span>
    );
}

interface FilterProps extends CountProps {
    onlyCompleted: boolean
    onlyIncompleted: boolean
    onFilterCompletedClicked: () => void | Function  
    onFilterIncompletedClicked: () => void | Function 
    onFilterAllClicked: () => void | Function  
}

export const Footer: React.FC<FilterProps> = props => {
    return (
        <footer>
            <Count count={props.count} />
            <Filters
                onlyCompleted={props.onlyCompleted}
                onlyIncompleted={props.onlyIncompleted}
                onFilterAllClicked={props.onFilterAllClicked}
                onFilterIncompletedClicked={props.onFilterIncompletedClicked}
                onFilterCompletedClicked={props.onFilterIncompletedClicked}
            />
        </footer>
    );
}