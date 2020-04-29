import React from "react";
import { Count } from "../count/Count";
// import { Filters } from '../filters/Filters';

interface IProps {
  count: number;
  onlyCompleted: boolean;
  onlyIncompleted: boolean;
  onFilterCompletedClicked: Function;
  onFilterIncompletedClicked: Function;
}

export const Footer: React.FC<IProps> = ({ count, ...props }) => (
  <footer>
    <Count count={count} />
    {/* <Filters
            {...props}
        /> */}
  </footer>
);
