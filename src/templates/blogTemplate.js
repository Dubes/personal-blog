import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogPage = ({ data, pageContext }) => {
  console.log(pageContext)
  console.log(data)
  const title = data.markdownRemark.frontmatter.title
  const html = data.markdownRemark.html

  return (
    <Layout>
      <div>{title}</div>
      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
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
