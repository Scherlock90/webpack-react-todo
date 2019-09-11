import React, { useState } from 'react';
import AddForm from './AddForm';
import List from './List';
import { badId, Footer } from './SmallComponents';
import '../../style/todo.css';

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