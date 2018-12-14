import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

export default ({ data }) => {
  const term = data.taxonomyTermTags
  const posts = data.allNodeBlog ? data.allNodeBlog.edges : [];

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{term.name} - Steve Worley</title>
      </Helmet>
      <div id="main">
        <section id="one">
          <ul className="actions"><li><Link to="/">&laquo; Home</Link></li></ul>
          <h2>Showing posts tagged with: <em>{term.name}</em></h2>
          <ul className="actions">
            {posts.map(({ node }) => (
              <li key={node.nid}><Link to={node.fields.slug}>{node.title}</Link></li>
            ))}
          </ul>
        </section>
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