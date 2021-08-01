const path = require('path')

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark` ) {

    let postCategory = `blog`
    if (getNode(node.parent).sourceInstanceName === "drafts") {
      postCategory = `draft`
    }


    createNodeField({
      name: "category",
      node,
      value: `${postCategory}`
    })
  }
}


exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/templates/blogTemplate.js')
    resolve(
      graphql(
        `
          query {
            allMarkdownRemark {
              edges {
                node {
                  frontmatter {
                    path
                  }
                  fields {
                    category
                  }
                }
              }
            }
          }
        `,
      ).then(result => {
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          const path = node.frontmatter.path
          const publishPath = (node.fields.category === 'draft' ? `/drafts${path}` : `/blog${path}`)
          
          createPage({
            path: `${publishPath}`,
            component: blogPostTemplate,
            context: {
              pathSlug: path,
            },
          })

          resolve()
        })
      }),
    )
  })
}
