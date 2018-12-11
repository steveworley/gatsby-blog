const slugify = require('slugify')

/**
 * Add a slug field to the taxonomy__tags content type.
 */
module.exports = ({node, actions}) => {
  const { createNodeField } = actions;
  const slug = slugify(node.name).toLowerCase();
  createNodeField({
    node,
    name: 'slug',
    value: `term/${slug}`
  })
}