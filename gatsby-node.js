const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const slugify = require('slugify')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }

  if (node.internal.type === 'node__blog') {
    const slug = slugify(node.title).toLowerCase();
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allNodeBlog {
          edges {
            node {
              nid
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allNodeBlog.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            nid: node.nid,
          },
        })
      })
      resolve()
    })
  })
}