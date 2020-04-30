import React from "react";
import { shallow } from "enzyme"
import { Count } from '../Count'

describe( "check <Count /> correctly render", () => {
  const wrapper = shallow(<Count count={0} />)

  it( "should render new count value", () => {
    expect(
      wrapper
      .setProps( { count: 2 } )
      .props()
      .children
    ).toContain(2)
  })
})