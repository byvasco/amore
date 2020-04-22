const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const animalTemplate = path.resolve('src/templates/animal.js');

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  if (result.error) {
    reporter.panicOnBuild('Error while running GraphQL query.')
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/${node.frontmatter.title.toLowerCase()}`,
      component: animalTemplate,
      context: {
        title: node.frontmatter.title
      },
    })
  })
}