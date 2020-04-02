import * as React from 'react'
import { Button } from '../../common/button/Button'

export const Filters = ({
    onlyCompleted,
    onlyIncompleted,
    onFilterCompletedClicked,
    onFilterIncompletedClicked,
}) => {

    const completedClasses = onlyCompleted ? 'filter-button active' : 'filter-button';
    const incompletedClasses = onlyIncompleted ? 'filter-button active' : 'filter-button';

    return (
        <>
            <label>Show: </label>
            <Button
                className={completedClasses}
                onClick={onFilterCompletedClicked}
                name={'Completed'}
            />
            <label className="pipe"> | </label>
            <Button
                className={incompletedClasses}
                onClick={onFilterIncompletedClicked}
                name={'Incompleted'}
            />
        </>
    )
}
