import * as React from 'react';
import { AddForm } from './add-form/AddForm';
import { List } from './list/List';
import { badId } from './utils';
import { Footer } from './footer/Footer';

const CustomTodo = () => {
  const [todo, setTodo] = React.useState([
    {
      title: 'Code up a React Todo App',
      id: badId('id'),
      completed: false
    }
  ]);

  const [completed] = React.useState(false);
  const [onlyCompleted, setOnlyCompleted] = React.useState(false);
  const [onlyIncompleted, setOnlyIncompleted] = React.useState(true);

  const handleAddItem = (value: string) => {
    const newTodo = [
      ...todo,
      { title: value, id: badId('id_'), completed: false }
    ];

    setTodo(newTodo);
  };

  const handleCompleted = (id: string) => {
    const currentTodo = [...todo];
    const index = currentTodo.findIndex(el => el.id === id);
    currentTodo[index].completed = !currentTodo[index].completed;

    setTodo(currentTodo);
  };

  const handleDeleted = (id: string) => setTodo(todo.filter( item => item.id !== id ));

  const handleCompletedFilterClicked = () => {
    setOnlyCompleted(true);
    setOnlyIncompleted(false);
  };

  const handleIncompletedFilterClicked = () => {
    setOnlyCompleted(false);
    setOnlyIncompleted(true);
  }

  const getTodosToShow = () => {
    let todoToShow = [];

    if (onlyCompleted) {
      todoToShow = todo.filter(todo => todo.completed === true);
    } else if (onlyIncompleted) {
      todoToShow = todo.filter(todo => todo.completed === false);
    } else {
      todoToShow = [...todo];
    }

    return todoToShow;
  }

  return (
    <>
      <AddForm onAdd={handleAddItem} />
      <List
        completed={completed}
        items={getTodosToShow()}
        onCompleted={(id: string) => handleCompleted(id)}
        onDeleted={(id: string) => handleDeleted(id)} />
      <Footer
        count={todo.length}
        onlyCompleted={onlyCompleted}
        onlyIncompleted={onlyIncompleted}
        onFilterCompletedClicked={handleCompletedFilterClicked}
        onFilterIncompletedClicked={handleIncompletedFilterClicked}
      />
    </>
  );
}

export default CustomTodo;