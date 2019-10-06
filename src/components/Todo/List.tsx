import * as React from 'react';
import Todo from './Todo';

interface TestProps<T> {
    // children: (item: T) => React.ReactNode
    items: Array<T>
    item: (title: string, id: string) => React.ReactNodeArray
}

function List<T>({items}: TestProps<T>) {
    let todos = items.map((item, id: number | null) => {
        return (
            <Todo
                key={id}
                // {...props}
                {...item}
            />
            // <div>
            //     {/* {children} */}
            //     {console.log(item)}
            //     {item.title}
            // </div>
        );
    });
    return (
        <ul className="todo-list">
            {todos}
        </ul>
    );
}

export default List;