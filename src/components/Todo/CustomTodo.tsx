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

  const [completed, setCompleted] = React.useState(false);
  const [onlyCompleted, setOnlyCompleted] = React.useState(false);
  const [onlyIncompleted, setOnlyIncompleted] = React.useState(false);

  const handleAddItem = value => {
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
    console.log('completed')
  };

  const handleDeleted = (id: string) => {
    const currentTodos = [...todos];
    const index = currentTodos.findIndex(el => el.id === id);
    currentTodos.splice(index, 1);
    setTodos(currentTodos);
  };

  const handleAllFilterClicked = (e: React.MouseEvent<HTMLElement>): void => {
    setOnlyCompleted(false);
    setOnlyIncompleted(false);
    console.log('change 1')
  };

  const handleCompletedFilterClicked = (e: React.MouseEvent<HTMLElement>): void => {
    setOnlyCompleted(true);
    setOnlyIncompleted(false);
    setCompleted(true);
    console.log('change 2')
  };

  const handleIncompletedFilterClicked = (e: React.MouseEvent<HTMLElement>): void => {
    setOnlyCompleted(false);
    setOnlyIncompleted(true);
    setCompleted(false);
    console.log('change 3')
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
      {/* items to do something */}
      <List
        completed={completed}
        items={getTodosToShow()}
        onCompleted={(id: string) => handleCompleted(id)}
        onDeleted={(id: string) => handleDeleted(id)} />
      <Footer
        count={todos.length}
        onlyCompleted={onlyCompleted}
        onlyIncompleted={onlyIncompleted}
        onFilterAllClicked={() => handleAllFilterClicked}
        onFilterCompletedClicked={() => handleCompletedFilterClicked}
        onFilterIncompletedClicked={() => handleIncompletedFilterClicked}
      />
    </>
  );
}

export default CustomTodo;