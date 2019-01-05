import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const BlogPage = ({ data, pageContext }) => {
  const title = data.markdownRemark.frontmatter.title
  const html = data.markdownRemark.html

  return (
    <Layout>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default BlogPage
