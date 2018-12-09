import React from 'react'
import renderer from 'react-test-renderer'
import Index from '../src/pages/index'

describe("Index", () => {
  var stub = {
    allMarkdownRemark: {
      totalCount: 0,
      edges: []
    }
  }
  const tree = renderer.create(<Index data={stub}/>).toJSON()
  expect(tree).toMatchSnapshot();
})