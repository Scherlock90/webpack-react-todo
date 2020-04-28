import React from "react";

interface IProps {
  className: string;
  onClick: () => void;
  children: string | React.ReactNode;
}
const fir = () => console.log( 'test button' )

export const Button: React.FC<IProps> = ({ className, onClick, children }) => (
  <button {...{ className, onClick }}>{children}</button>
);
