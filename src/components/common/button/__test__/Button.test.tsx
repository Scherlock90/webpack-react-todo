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

  it( 'renders correctly', () => {
    const { getByText } = render( <Button {...testButtonProps} /> )

    expect(getByText('test buttons')).toBeTruthy()
  } )
})