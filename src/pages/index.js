import React from "react"
import { css } from "@emotion/core"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { rhythm } from "../utils/typography"

import Layout from "../components/layout"
import BlogListItem from "../components/blog/list"

import styles from './index.module.css'

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
        {posts.map(({ node }) => (
          <BlogListItem key={node.nid} node={node} />
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