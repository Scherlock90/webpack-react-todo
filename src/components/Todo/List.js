import * as React from 'react';
import Todo from './Todo';

const List = props => {
    const todos = props.items.map((item, id) => {
        return (
            <Todo
                key={id}
                {...props}
                {...item}
            />
        );
    });
    return (
        <ul className="todo-list">
            {todos}
        </ul>
    );
}

export default List;