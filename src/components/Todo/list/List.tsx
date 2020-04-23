import React from "react";
import { ButtonsTodo } from "../buttons-todo/ButtonsTodo";

interface IProps {
  items: { title: string; id: string }[];
  completed: boolean;
  onCompleted: Function;
  onDeleted: Function;
}

export const List: React.FC<IProps> = ({
  items,
  completed,
  onCompleted,
  onDeleted
}) => (
  <ul className={"todo-list"}>
    {items.map((item, idx: number) => (
      <ButtonsTodo
        key={idx}
        {...item}
        completed={completed}
        onCompleted={onCompleted}
        onDeleted={onDeleted}
      />
    ))}
  </ul>
);
