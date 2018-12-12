import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

import styles from './blog-post.module.css'

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
        <div className={styles['post--content']}>
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.body.processed }} />
        </div>
        <div className={styles.postComments}>
          { comments.map(({node}) => (
            <div key={node.id} className={styles.postComment}>
              <h3 className={styles.postCommentTitle}>{ node.subject }</h3>
              <div dangerouslySetInnerHTML={{ __html: node.comment_body.processed }} />
            </div>
          ))}
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