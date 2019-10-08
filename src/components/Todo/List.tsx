import * as React from 'react';
import Todo from './Todo';

// interface TestProps<T> {
//     // children: (item: T) => React.ReactNode
//     items: Array<T>
//     item: [{title: string, id: string}] 
//     completed: boolean
//     onCompleted: Function
//     onDeleted: Function
//     // title: string
//     // id: string | null
// }


interface TestProps {
    // children: (item: T) => React.ReactNode
    items: []
    item: [{ title: string, id: string }]
    completed: boolean
    onCompleted: Function
    onDeleted: Function
    // title: string
    // id: number | null
}

const List: React.FC<TestProps> = props => {
    let todos = props.items.map((item, idx) => {
        console.log(idx)
        return (
            <Todo
                key={idx}
                {...item}
                completed={props.completed}
                onCompleted={props.onCompleted}
                onDeleted={props.onDeleted}
                // title={ props.items ||props.item[0].title}
                // id={props.item[0].id} 
            />
        );
    });
    return (
        <ul className="todo-list">
            {todos}
        </ul>
    );
}
// function List<T>({items, completed, onCompleted, onDeleted}: TestProps<T>) {
//     let todos = items.map(item => {
//         return (
//             <Todo
//                 // key={title}
//                 {...item}
//                 completed={completed}
//                 onCompleted={onCompleted}
//                 onDeleted={onDeleted}
//                 title={item.title}
//                 id={item.id} 
//             />
//         );
//     });
//     return (
//         <ul className="todo-list">
//             {todos}
//         </ul>
//     );
// }


export default List;