import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import slugify from 'slugify'

import styles from './blog-post.module.css'

export default ({ data }) => {
  const post = data.nodeBlog;

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{ post.title } - Steve Worley</title>
        <link rel="canonical" href={"http://steveworley.github.io/" + post.fields.slug } />
      </Helmet>
      <div className={styles['post--content']}>
        <p>{ post.relationships.field_tags.map(({name, id}) => {
          const slug = `term/${slugify(name).toLowerCase()}`
          return (<Link key={id} to={slug}>{name}</Link>)
        }) }</p>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.body.processed }} />
      </div>
      <Link to="/">&laquo; Back</Link>
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
      relationships {
        field_tags {
          id
          name
        }
      }
    }
  }
`