/**
 * @file
 * The main bootstrap file.
 * 
 * This bootstraps the gatsby build process and allows us to define dynamic
 * attributes for the static site at build time.
 */

const fs = require('fs')
const glob = require('glob')
const axios = require('axios')

/**
 * Extend and transform assets as they're created.
 * 
 * This is called when a new node is created and happens during the build
 * process for the Gatsby static assets.
 *
 * @param {arguments} object
 *   The arguments object which provides:
 *      - node: the data being created
 *      - actions: gatsby API actions
 * 
 * @see https://www.gatsbyjs.org/docs/node-apis/#onCreateNode
 * @see https://www.gatsbyjs.org/docs/actions/#createNode
 * @see https://www.gatsbyjs.org/docs/actions/#createNodeField 
 */
exports.onCreateNode = (args) => {
  const { node } = args
  const path = __dirname + '/src/build/onCreateNode/' + node.internal.type + '.js'
  if (fs.existsSync(path)) {
    const callback = require(path)
    console.info(`[onCreateNode]: Build for ${node.internal.type}`)
    callback(args)
  }
}

/**
 * Dynamically create pages.
 * 
 * This event is used by Gatsby to create dynamic pages. To prevent this file
 * from becoming unweildly we split functionality into smaller chunks in the
 * /src/build directory. This allows for build components to be tested 
 * individually prior to making a deployment artifact.
 * 
 * @param {graphq} graphql
 *   The graphql query object. This can be used to query the dataset 
 * @param {actions} object
 *   The actions object that provides access to various Gatsby callbacks.
 * 
 * @see https://www.gatsbyjs.org/docs/actions/#createPage
 * @see https://www.gatsbyjs.org/docs/node-apis/#createPages
 */
exports.createPages = ({graphql, actions}) => {
  const files = glob.sync('./src/build/createPages/*.js')
  const promises = []

  let callback;

  for (var i = 0; i < files.length; i++) {
    callback = require(files[i])
    promises.push(callback(graphql, actions))
    console.info(`[createPages]: Build for ${files[i]}`)
  }

  return Promise.all(promises)
}
