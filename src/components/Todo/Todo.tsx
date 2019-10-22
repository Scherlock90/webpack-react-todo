import * as React from 'react';

interface ITodoProps {
    id: string
    title: string
    onDeleted: Function
    onCompleted: Function
    completed: boolean
}

const Todo: React.FC<ITodoProps> = ({ completed, onCompleted, onDeleted, title, id }) => {
    const titleClasses = completed ? 'title completed' : 'title';
    return (
        <li className="todo-item">
            <input
                type="checkbox"
                checked={completed}
                onChange={e => onCompleted(id)}
                className='toggle-complete'
            />
            <span className={titleClasses}>{title}</span>
            <button onClick={e => onDeleted(id)} className="delete" >x</button>
        </li>
    );
}

export default Todo;