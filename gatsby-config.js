const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Gundoggin`,
    description: `The best place on the web to find supplies and learn how to train your bird dog.`,
    keywords: 'gundog, gundoggin, dog, german shorthair pointer, gsp, dog training, gundog training',
    author: `Michael Foster`,
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "xkbrerkt",
        dataset: "production",
      },
    },
    {
      resolve: `gatsby-plugin-snipcart-advanced`,
      options: {
        version: '3.0.15',
        publicApiKey: 'MTYyN2M4Y2QtNzRkMC00YTQ4LThmOTYtMTg3M2FjOWRhMjllNjM3NDQ0NjYxOTMxODc1MTgw', // use public api key here or in environment variable
        openCartOnAdd: false,
        locales: {
          fr: {
            actions: {
              checkout: 'Valider le panier',
            },
          }
        },
        innerHTML: `
          <billing section="bottom">
              <!-- Customization goes here -->
          </billing>`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Proxima Nova']
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
