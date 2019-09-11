import React from 'react';

const Filters = props => {
    const completedClasses = props.onlyCompleted ? 'filter-button active' : 'filter-button';
    const incompletedClasses = props.onlyIncompleted ? 'filter-button active' : 'filter-button';
    const allClasses = !props.onlyCompleted && !props.onlyIncompleted ? 'filter-button active' : 'filter-button';
    return (
        <>
            <label>Show: </label>
            <button
                className={completedClasses}
                onClick={props.onFilterCompletedClicked}
            >
                Completed
        </button>
            <span className="pipe"> | </span>
            <button
                className={incompletedClasses}
                onClick={props.onFilterIncompletedClicked}
            >
                Incomplete
        </button>
            <span className="pipe"> | </span>
            <button
                className={allClasses}
                onClick={props.onFilterAllClicked}
            >
                All
        </button>
        </>
    );
}

export default Filters;