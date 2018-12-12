import React from 'react'
import renderer from 'react-test-renderer'
import BlogPost from '../src/templates/blog-post'

import { withComments, withoutComments } from '../__mocks__/blog-post.mock'

jest.mock('../src/components/layout',  () => 'Layout')

describe('Blog post', () => {
  it ('renders correctly with comments', () => {
    const tree = renderer.create(<BlogPost data={withComments} />).toJSON()
    expect(tree).toMatchSnapshot();
  })

  it ('renders correctly without comments', () => {
    const tree = renderer.create(<BlogPost data={withoutComments} />).toJSON()
    expect(tree).toMatchSnapshot();
  })
})