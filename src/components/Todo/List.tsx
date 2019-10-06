import * as React from 'react';
import Todo from './Todo';

interface TestProps<T> {
    // children: (item: T) => React.ReactNode
    items: Array<T>
    item: (title: string, id: number) => React.ReactNodeArray
    completed: boolean
    onCompleted: Function
    onDeleted: Function
    title: string
    // id: number
}

function List<T>({items, completed, onCompleted, onDeleted, title, id}: TestProps<T>) {
    let todos = items.map((item) => {
        return (
            <Todo
                key={title + id}
                // {...props}
                {...item}
                completed={completed}
                onCompleted={onCompleted}
                onDeleted={onDeleted}
                // title={title}
                // id={item} 
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