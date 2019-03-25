import * as React from 'react'

import { shallow } from 'enzyme'

import KbnButton from '.'

describe('KbnButton', () => {
  it('is a button element.', () => {
    const kbnButton = shallow(<KbnButton content={""} onClick={() => {}} />)
    expect(kbnButton.is('button')).toEqual(true)
  })
})
