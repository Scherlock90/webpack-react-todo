import * as React from 'react';
import Todo from './Todo';

interface item {
    title: string, 
    id: string 
}

interface TestProps {
    items: item[]
    // item: [{ title: string, id: string }]
    completed: boolean
    onCompleted: Function
    onDeleted: Function
}

const List: React.FC<TestProps> = props => {
    let todos = props.items.map((item, idx: number) => {
        return (
            <Todo
                key={idx}
                {...item}
                completed={props.completed}
                onCompleted={props.onCompleted}
                onDeleted={props.onDeleted}
            />
        );
    });
    return (
        <ul className="todo-list">
            { todos }
        </ul>
    );
}

export default List;