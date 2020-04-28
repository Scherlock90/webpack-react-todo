import React from "react";
import { render, fireEvent } from "@testing-library/react"
import { shallow, ShallowWrapper } from "enzyme"
import { Button } from '../Button'

describe('Button render correctly', () => {
  const testButtonProps = {
    className: 'test-buttons',
    onClick: () => console.log('this'),
    children: 'test buttons'
  };

  let child: ShallowWrapper<undefined, undefined>

  beforeEach(() =>
    child = shallow( <Button {...testButtonProps} /> )
  )

  it( "should render without error", () =>
    expect( child.hasClass('test-buttons') ).toBeTruthy()
  )

  // it( "updates on click", () => {
  //     const { getByText } = render( <Button {...testButtonProps} /> )
  //     const buttonClick = getByText( 'test buttons' )

  //     fireEvent.click(buttonClick)
  //     expect(buttonClick).toBe('onClick')
  //   }
  // )

  it( 'renders correctly', () => {
    const { getByText } = render( <Button {...testButtonProps} /> )

    expect(getByText('test buttons')).toBeTruthy()
  } )

  // it("check counter increment function is callled", () => {
  //   const wrapper = shallow( <Button {...testButtonProps} /> )
  //   const spy = jest.spyOn(wrapper.instance(), )

  //   wrapper.find( "button" ).simulate( "click" )

  //   expect(spy).toBeCalled()
  // })
})