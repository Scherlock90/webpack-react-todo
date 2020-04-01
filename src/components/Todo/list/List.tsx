import * as React from 'react';
import Todo from '../Todo';

interface IProps {
    items: { title: string, id: string }[]
    completed: boolean
    onCompleted: Function
    onDeleted: Function
}

export const List: React.FC<IProps> = ({
    items,
    completed,
    onCompleted,
    onDeleted,
}) => {

    let todos = items.map((item, idx: number) => {
        return (
            <Todo
                key={idx}
                {...item}
                completed={completed}
                onCompleted={onCompleted}
                onDeleted={onDeleted}
            />
        );
    });

    return <ul className="todo-list">{ todos }</ul>
}
