import React from "react"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"

import { trim } from '../utils/stringUtils'

export default ({ data }) => {
  const posts = data ? data.allNodeBlog.edges : []
  const firstPost = posts.shift()

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Steve Worley - Decoupled blog</title>
        <meta name="description" content="A Decoupled blog powered by Drupal" />
        <link rel="canonical" href="http://steveworley.github.io" />
      </Helmet>
      <div id="main">
        <section id="one">
          <header className="major">
            <h2>{firstPost.node.title}</h2>
          </header>
          <p>{trim(firstPost.node.body.processed)}</p>
          <ul className="actions">
            <li><a href={firstPost.node.fields.slug} className="button">Continue reading</a></li>
          </ul>
        </section>

        <section id="two">
          <h2>Recent Posts</h2>
          <ul className="actions">
            {posts.map(({node}) => (
              <li><Link to={node.fields.slug}>{node.title}</Link></li>
            ))}
          </ul>
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allNodeBlog(sort: {fields: [created], order: DESC}) {
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