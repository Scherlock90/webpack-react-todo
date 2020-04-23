import React, { useState } from "react";
import { AddForm } from "./add-form/AddForm";
import { List } from "./list/List";
import { badId } from "./utils";
import { Footer } from "./footer/Footer";

export default function() {
  const [todo, setTodo] = useState([
    {
      title: "Code up a React Todo App",
      id: badId("id"),
      completed: false
    }
  ]);

  const [isCompleted] = React.useState(false);
  const [isOnlyCompleted, setIsOnlyCompleted] = useState(false);
  const [isOnlyIncompleted, setIsOnlyIncompleted] = useState(true);

  const handleAddItem = (value: string) => {
    const newTodo = [
      ...todo,
      { title: value, id: badId("id_"), completed: false }
    ];

    setTodo(newTodo);
  };

  const handleCompleted = (id: string) => {
    const currentTodo = [...todo];
    const index = currentTodo.findIndex(el => el.id === id);
    currentTodo[index].completed = !currentTodo[index].completed;

    setTodo(currentTodo);
  };

  const handleDeleted = (id: string) =>
    setTodo(todo.filter(item => item.id !== id));

  const handleCompletedFilterClicked = () => {
    setIsOnlyCompleted(true);
    setIsOnlyIncompleted(false);
  };

  const handleIncompletedFilterClicked = () => {
    setIsOnlyCompleted(false);
    setIsOnlyIncompleted(true);
  };

  const getTodosToShow = () => {
    let todoToShow = [];

    if (isOnlyCompleted) {
      todoToShow = todo.filter(todo => todo.completed === true);
    } else if (isOnlyCompleted) {
      todoToShow = todo.filter(todo => todo.completed === false);
    } else {
      todoToShow = [...todo];
    }

    return todoToShow;
  };

  return (
    <>
      <AddForm onAdd={handleAddItem} />
      <List
        completed={isCompleted}
        items={getTodosToShow()}
        onCompleted={(id: string) => handleCompleted(id)}
        onDeleted={(id: string) => handleDeleted(id)}
      />
      <Footer
        count={todo.length}
        onlyCompleted={isOnlyCompleted}
        onlyIncompleted={isOnlyIncompleted}
        onFilterCompletedClicked={handleCompletedFilterClicked}
        onFilterIncompletedClicked={handleIncompletedFilterClicked}
      />
    </>
  );
}
