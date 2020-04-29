import React from "react";

interface IProps {
  count: number;
}

export const Count: React.FC<IProps> = ({ count }) => (
  <span className={"count"}>{count} Items</span>
);
