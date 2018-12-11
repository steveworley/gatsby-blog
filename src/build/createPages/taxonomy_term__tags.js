const path = require('path')

/**
 * Create the slug pages for the blog posts.
 */
module.exports = (graphql, actions) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allTaxonomyTermTags {
          edges {
            node {
              id
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allTaxonomyTermTags.edges.forEach(({node}) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve('./src/templates/terms.js'),
          context: {
            "id": {
              "eq": node.id
            },
            "filter": {
              "relationships": {
                "field_tags": {
                  "elemMatch": {
                    "id": {
                      "in": [
                        node.id
                      ]
                    }
                  }
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