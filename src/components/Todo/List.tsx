import * as React from 'react';
import Todo from './Todo';

interface TestProps<T> {
    // children: (item: T) => React.ReactNode
    items: Array<T>
    item: [{title: string, id: string}] 
    completed: boolean
    onCompleted: Function
    onDeleted: Function
    // title: string
    // id: string | null
}

function List<T>({items, completed, onCompleted, onDeleted}: TestProps<T>) {
    let todos = items.map(item => {
        return (
            <Todo
                // key={title}
                {...item}
                completed={completed}
                onCompleted={onCompleted}
                onDeleted={onDeleted}
                title={item.title}
                id={item.id} 
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