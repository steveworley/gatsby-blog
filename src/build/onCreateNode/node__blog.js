const slugify = require('slugify')

/**
 * Add a slug field to the node__blog content type.
 */
module.exports = async ({node, actions}) => {
  const { createNodeField, createNode } = actions;
  const slug = slugify(node.title).toLowerCase();
  createNodeField({
    node,
    name: 'slug',
    value: slug
  })
}

