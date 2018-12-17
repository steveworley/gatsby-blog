require('dotenv').config({
  "path": `.env.${process.env.NODE_ENV}`
})


module.exports = {
  siteMetadata: {
    title: `Steve Worley - Decoupled blog`,
  },
  plugins: [
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: process.env.GATSBY_API_URL,
        apiBase: `jsonapi`, // optional, defaults to `jsonapi`
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Steve Worley Blog",
        short_name: "steveworley",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        display: "minimal-ui",
      },
    },
    'gatsby-plugin-sass',
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`
  ],
}