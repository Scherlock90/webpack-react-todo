import React, { useState } from 'react';
import './Todo.css';

const badId = pre => {
  return `${pre}_${new Date().getTime()}`;
}

const AddForm = props => {
  const [inputValue, setInputValue] = useState('');
  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (inputValue) {
        props.onAdd(inputValue);
        setInputValue('');
      }
    }
  }
  return (
    <form>
      <input
        onKeyDown={handleKeyDown}
        onChange={e => setInputValue(e.currentTarget.value)}
        value={inputValue}
        className='todo-input'
        type='text'
        placeholder='Type a task and hit ENTER to add...'
      />
    </form>
  );
}

const Todo = ({ completed, onCompleted, onDeleted, title, id }) => {
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

const Filters = props => {
  const completedClasses = props.onlyCompleted ? 'filter-button active' : 'filter-button';
  const incompletedClasses = props.onlyIncompleted ? 'filter-button active' : 'filter-button';
  const allClasses = !props.onlyCompleted && !props.onlyIncompleted ? 'filter-button active' : 'filter-button';
  return (
    <>
      <label>Show: </label>
      <button 
        className={completedClasses} 
        onClick={props.onFilterCompletedClicked}
      >
        Completed
      </button>
      <span className="pipe"> | </span>
      <button 
        className={incompletedClasses} 
        onClick={props.onFilterIncompletedClicked}
      >
        Incomplete
      </button>
      <span className="pipe"> | </span>
      <button 
        className={allClasses} 
        onClick={props.onFilterAllClicked}
      >
        All
      </button>
    </>
  );
}
const Count = props => {
  return (
    <span className='count'>
      {props.count} Items
    </span>
  );
}
const Footer = props => {
  return (
    <footer>
      <Count count={props.count} />
      <Filters {...props} />
    </footer>
  );
}
const CustomTodo = () => {
  const [todos, setTodos] = useState([{
    title: 'Code up a React Todo App',
    id: badId('yogabba'),
    completed: false
  }]);
  const [onlyCompleted, setOnlyCompleted] = useState(false);
  const [onlyIncompleted, setOnlyIncompleted] = useState(false);

  const handleAddItem = value => {
    const newTodos = [
      ...todos, 
      { title: value, id: badId('yogabba'), completed: false }
    ];
    setTodos(newTodos);
  };

  const handleCompleted = id => {
    const currentTodos = [...todos];
    const index = currentTodos.findIndex(el => el.id === id);
    currentTodos[index].completed = !currentTodos[index].completed;
    setTodos(currentTodos);
  };

  const handleDeleted = id => {
    const currentTodos = [...todos];
    const index = currentTodos.findIndex(el => el.id === id);
    currentTodos.splice(index, 1);
    setTodos(currentTodos);
  };

  const handleAllFilterClicked = e => {
    setOnlyCompleted(false);
    setOnlyIncompleted(false);
  };

  const handleCompletedFilterClicked = e => {
    setOnlyCompleted(true);
    setOnlyIncompleted(false);
  };

  const handleIncompletedFilterClicked = e => {
    setOnlyCompleted(false);
    setOnlyIncompleted(true);
  }

  const getTodosToShow = () => {
    let todosToShow = [];
    if (onlyCompleted) {
      todosToShow = todos.filter(todo => todo.completed === true);
    } else if (onlyIncompleted) {
      todosToShow = todos.filter(todo => todo.completed === false);
    } else {
      todosToShow = [...todos];
    }
    return todosToShow;
  }

  return (
    <>
      <AddForm onAdd={handleAddItem} />
      <List
        items={getTodosToShow()}
        onCompleted={handleCompleted}
        onDeleted={handleDeleted} />
      <Footer
        count={todos.length}
        onlyCompleted={onlyCompleted}
        onlyIncompleted={onlyIncompleted}
        onFilterAllClicked={handleAllFilterClicked}
        onFilterCompletedClicked={handleCompletedFilterClicked}
        onFilterIncompletedClicked={handleIncompletedFilterClicked}
      />
    </>
  );
}

export default CustomTodo;