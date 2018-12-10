import React from 'react'
import renderer from 'react-test-renderer'
import About from '../src/pages/about'

jest.mock('../src/components/layout',  () => 'Layout')

const data = {
  data: {
    site: {
      siteMetadata: {
        title: 'Testing'
      }
    }
  }
}

describe("About", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<About {...data} />).toJSON()
    expect(tree).toMatchSnapshot();
  })
})