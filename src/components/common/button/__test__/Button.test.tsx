import React from "react";
import { HTMLAttributes, shallow, ShallowWrapper } from "enzyme"
import { Button } from '../Button'

describe('Hero', () => {
  const testButtonProps = {
    className: 'test',
    onClick: () => console.log('onClick'),
    name: 'test'
  };
  let child: ShallowWrapper<undefined, undefined>
  beforeEach(() =>
    child = shallow(<Button {...testButtonProps} />))
  it("should render without error", () =>
    expect(Button.length).toBe(1));
  // it("should render paragraph for each item that has been passed
  //     through props", () => {
  //   const pNodes: ShallowWrapper<HTMLAttributes, undefined> =
  //   child.find("p");
  // expect(pNodes.length).toBe(testChildProps.items.length);
  // });
});