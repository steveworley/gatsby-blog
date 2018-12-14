import React, { Component } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

class BlogPost extends Component {
  render() {
    const post = this.props.data.nodeBlog
    const comments = this.props.data.allCommentComment ? this.props.data.allCommentComment.edges : []

    return (
      <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{ post.title } - Steve Worley</title>
          <link rel="canonical" href={"http://steveworley.github.io." + post.fields.slug } />
        </Helmet>
        <div id="main">
          <section id="one">
            <ul className="actions"><li><Link to="/">&laquo; Home</Link></li></ul>
            <h1>{post.title}</h1>
            <div>
              <ul className="actions">
                { post.relationships.field_tags.map(({id, name, fields}) => (
                  <li key={id}><Link to={fields.slug}>{name}</Link></li>
                )) }
              </ul>
            </div>
            <div dangerouslySetInnerHTML={{ __html: post.body.processed }} />
            <div>
              { comments.map(({node}) => (
                <div key={node.id}>
                  <h3>{ node.subject }</h3>
                  <div dangerouslySetInnerHTML={{ __html: node.comment_body.processed }} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </Layout>        
    )
  }
}

export default BlogPost

export const query = graphql`
  query($nid: Int!, $filter: filterCommentComment) {
    nodeBlog(nid: { eq: $nid } ) {
      title
      nid
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
          fields {
            slug
          }
        }
      }
    }
    allCommentComment(filter:$filter){
      totalCount
      edges{
        node{
          subject
          comment_body{
            processed
          }
          id
          relationships{
            entity_id{
              id
            }
          }
        }
      }
    }
  }
`