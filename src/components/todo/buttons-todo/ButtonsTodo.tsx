import React from "react";
import { Button } from "../../common/button/Button";

interface ITodoProps {
  id: string;
  title: string;
  onDeleted: Function;
  onCompleted: Function;
  completed: boolean;
}

export const ButtonsTodo: React.FC<ITodoProps> = ({
  id,
  completed,
  onCompleted,
  onDeleted,
  title
}) => (
  <li className={"todo-item"}>
    <input
      type={"checkbox"}
      checked={completed}
      onChange={() => onCompleted(id)}
      className={"toggle-complete"}
    />
    <span className={"title"}>{title}</span>
    <Button onClick={() => onDeleted(id)} className={"delete"}>
      X
    </Button>
  </li>
);
