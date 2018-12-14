import React from 'react'
import renderer from 'react-test-renderer'
import Index from '../src/pages/index'

import { stub } from '../__mocks__/index.mock'

jest.mock('../src/components/layout',  () => 'Layout')

describe("Index", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Index data={stub} />).toJSON()
    expect(tree).toMatchSnapshot();
  })
})