import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

export default ({ data }) => {
  const post = data.nodeBlog;

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{ post.title } - Steve Worley</title>
        <link rel="canonical" href={"http://steveworley.github.io/" + post.fields.slug } />
      </Helmet>
      <div>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.body.processed }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($nid: Int!) {
    nodeBlog(nid: { eq: $nid } ) {
      title
      body {
        processed
      }
      fields {
        slug
      }
    }
  }
`