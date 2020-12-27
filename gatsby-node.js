/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityProduct(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            title
            id
            slug {
              current
            }
            defaultProductVariant {
              price
              images {
                asset {
                  url
                }
              }
            }
            body {
              en {
                children {
                  text
                }
              }
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    throw result.errors
  }
  const projects = result.data.allSanityProduct.edges || []
  projects.forEach((edge, index) => {
    const path = `/shop/${edge.node.slug.current}`
    createPage({
      path,
      component: require.resolve("./src/templates/product-page.js"),
      context: { product: edge.node },
    })
  })
}