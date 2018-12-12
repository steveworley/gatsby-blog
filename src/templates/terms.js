import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import ListItem from "../components/blog/list"

export default ({ data }) => {
  const term = data.taxonomyTermTags
  const posts = data.allNodeBlog ? data.allNodeBlog.edges : [];

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{term.name} - Steve Worley</title>
      </Helmet>
      <div>
        <h2>Showing posts tagged with: <em>{term.name}</em></h2>
        {posts.map(({ node }) => (
          <ListItem key={node.nid} node={node} />
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: taxonomyTermTagsIdQueryString_2, $filter: filterNodeBlog) {
    taxonomyTermTags(id: $id){
      name
    }
    allNodeBlog(filter:$filter){
      totalCount
      edges{
        node{
          title
          nid
          fields {
            slug
          }
        }
      }
    }
  }
`