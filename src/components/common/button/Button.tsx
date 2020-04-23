import React from "react";

interface IProps {
  className: string;
  onClick: () => void;
  name: string;
}

export const Button: React.FC<IProps> = ({ className, onClick, name }) => (
  <button {...{ className, onClick }}>{name}</button>
);
