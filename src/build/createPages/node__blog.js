const path = require('path')

/**
 * Create the slug pages for the blog posts.
 */
module.exports = (graphql, actions) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allNodeBlog{
          edges{
            node{
              nid
              id
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allNodeBlog.edges.forEach(({node}) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve('./src/templates/blog-post.js'),
          context: {
            nid: node.nid,
            filter: {
              relationships: {
                entity_id: {
                  id: { eq: node.id }
                }
              }
            }
          }
        })
      })
      resolve()
    }).catch(err => reject(err))

  })
}