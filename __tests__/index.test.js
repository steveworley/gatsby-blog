import React from 'react'
import renderer from 'react-test-renderer'
import Index from '../src/pages/index'

jest.mock('../src/components/layout',  () => 'Layout')
jest.mock('../src/components/blog/list', () => 'ListItem')

const stub = {
  allNodeBlog: {
    totalCount: 1,
    edges: [
      { node: { id: 1, title: 'Blog stub', date: '01 Jan, 1970'  }}
    ]
  }
}

describe("Index", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Index data={stub} />).toJSON()
    expect(tree).toMatchSnapshot();
  })
})