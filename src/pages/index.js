import React from "react"
import { css } from "@emotion/core"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { rhythm } from "../utils/typography"

import Layout from "../components/layout"
import ListItem from "../components/blog/list"

export default ({ data }) => {
  const posts = data ? data.allNodeBlog.edges : []
  const postCount = data ? data.allNodeBlog.totalCount : 0

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Steve Worley - Decoupled blog</title>
        <link rel="canonical" href="http://steveworley.github.io" />
      </Helmet>
      <div>
        <h4 css={css`
        margin: ${rhythm(1/2)} 0 ${rhythm(1 / 4)} 0;
      `}>{postCount} Posts</h4>
        {posts.map(({ node }) => (
          <ListItem key={node.nid} node={node} />
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
          fields {
            slug
          }
        }
      }
    }
  }
`