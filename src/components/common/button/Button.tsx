import React from "react";

interface IProps {
  className: string;
  onClick: () => void;
  children: string | React.ReactNode;
}

export const Button: React.FC<IProps> = ({ className, onClick, children }) => (
  <button {...{ className, onClick }}>{children}</button>
);
