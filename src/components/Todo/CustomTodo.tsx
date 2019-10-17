import * as React from 'react';
import AddForm from './AddForm';
import List from './List';
import { badId, Footer } from './SmallComponents';

const CustomTodo = () => {
  const [todos, setTodos] = React.useState([{
    title: 'Code up a React Todo App',
    id: badId('yogabba'),
    completed: false
  }]);
  const [onlyCompleted, setOnlyCompleted] = React.useState(false);
  const [onlyIncompleted, setOnlyIncompleted] = React.useState(false);

  const handleAddItem = (value: string) => {
    const newTodos = [
      ...todos,
      { title: value, id: badId('yogabba'), completed: false }
    ];
    setTodos(newTodos);
  };

  const handleCompleted = (id: string) => {
    const currentTodos = [...todos];
    const index = currentTodos.findIndex(el => el.id === id);
    currentTodos[index].completed = !currentTodos[index].completed;
    setTodos(currentTodos);
  };

  const handleDeleted = (id: string) => {
    const currentTodos = [...todos];
    const index = currentTodos.findIndex(el => el.id === id);
    currentTodos.splice(index, 1);
    setTodos(currentTodos);
  };

  const handleAllFilterClicked = (e: any) => {
    setOnlyCompleted(false);
    setOnlyIncompleted(false);
  };

  const handleCompletedFilterClicked = (e: any) => {
    setOnlyCompleted(true);
    setOnlyIncompleted(false);
  };

  const handleIncompletedFilterClicked = (e: any) => {
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