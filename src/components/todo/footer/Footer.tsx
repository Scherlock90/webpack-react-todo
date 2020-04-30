import React from "react";
import { Count } from "../count/Count";
import { Filters } from "../filters/Filters";

interface IProps {
  count: number;
  onlyCompleted: boolean;
  onlyIncompleted: boolean;
  onFilterCompletedClicked: () => void;
  onFilterIncompletedClicked: () => void;
}

export const Footer: React.FC<IProps> = ({
  count,
  onlyCompleted,
  onlyIncompleted,
  onFilterCompletedClicked,
  onFilterIncompletedClicked
}) => (
  <footer>
    <Count count={count} />
    <Filters
      {...{
        onlyCompleted,
        onlyIncompleted,
        onFilterCompletedClicked,
        onFilterIncompletedClicked
      }}
    />
  </footer>
);
