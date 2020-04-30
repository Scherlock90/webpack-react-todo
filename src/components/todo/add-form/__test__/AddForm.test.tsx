import React from "react";
import { shallow } from "enzyme";

import { AddForm } from "../AddForm";

describe("<AddForm /> correct", () => {
  const event = {
    currentTarget: { value: 'the-value' }
  };
  const wrapper = shallow(<AddForm onAdd={() => console.log("onAdd")} />)

  wrapper.find('input').simulate('change', event)
  wrapper.update()

  it("should change input value", () => {
    expect(wrapper.find('input').prop('value')).toBe('the-value');
  })
})