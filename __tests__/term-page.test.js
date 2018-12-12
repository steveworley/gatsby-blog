import React from 'react'
import renderer from 'react-test-renderer'
import Term from '../src/templates/terms'

import { withPosts, withoutPosts } from '../__mocks__/taxonomy_term__tags.mock'

jest.mock('../src/components/layout',  () => 'Layout')

describe('Taxonomy Term', () => {
  it ('renders correctly with posts', () => {
    const tree = renderer.create(<Term data={withPosts} />).toJSON()
    expect(tree).toMatchSnapshot();
  })

  it ('renders correctly without posts', () => {
    const tree = renderer.create(<Term data={withoutPosts} />).toJSON()
    expect(tree).toMatchSnapshot();
  })
})