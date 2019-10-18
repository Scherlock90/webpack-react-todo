import * as React from 'react';
import Todo from './Todo';

interface TestProps {
    items: []
    item: [{ title: string, id: string }]
    completed: boolean
    onCompleted: () => void
    onDeleted: () => void
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
            {todos}
        </ul>
    );
}

export default List;