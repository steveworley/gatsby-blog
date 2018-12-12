import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import BlogListItem from "../components/blog/list"

export default ({ data }) => {
  const posts = data ? data.allNodeBlog.edges : []

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Steve Worley - Decoupled blog</title>
        <link rel="canonical" href="http://steveworley.github.io" />
      </Helmet>
      <div>
        {posts.map(({ node }) => (
          <BlogListItem key={node.id} node={node} />
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allNodeBlog {
      totalCount
      edges {
        node {
          title
          nid
          id
          body {
            processed
          }
          fields {
            slug
          }
        }
      }
    }
  }
`