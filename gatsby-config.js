const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `1Leash`,
    description: `Multiple dogs. One leash, easier walks.`,
    keywords: 'leash, dog, cat, two dog leash, three dog leash, 1leash, one leash, 1 leash, 1 dog leash, 2 dog leash, 3 dog leash, multiple dog leash',
    author: `Michael Foster`,
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "88evuh9f",
        dataset: "production",
      },
    },
    {
      resolve: `gatsby-plugin-snipcart-advanced`,
      options: {
        version: '3.0.15',
        publicApiKey: 'ODQyN2U3OGEtYmE4ZS00NGE3LWIwZWUtODA0MGMwMzkxZDllNjM3NDg4NTQ0OTExOTYzNTk3', // use public api key here or in environment variable
        openCartOnAdd: true,
        locales: {
          en: {
            actions: {
              checkout: 'Checkout',
            },
          }
        },
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Helvetica Neue', 'Alegreya']
        }
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
