import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const BlogPage = ({ data, pageContext }) => {
  const title = data.markdownRemark.frontmatter.title
  const html = data.markdownRemark.html
  const publishDate = data.markdownRemark.frontmatter.date

  return (
    <Layout>
      <Helmet title={title} />
      <h2>{title}</h2>
      <small>{publishDate}</small>
      <br />
      <div
        style={{ marginTop: `10px` }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <hr />
      <strong>Comments:</strong>
      <div 
        style={{ marginTop: `10px` }}>
        Nothing good has ever come out of the comments section on the internet. But I would love to hear your thoughts on <a href="https://mobile.twitter.com/kapsii">twitter</a>.
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

export default BlogPage
