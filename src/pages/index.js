import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import BlogTeaser from '../components/blogTeaser'
import SEO from '../components/seo'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `blog`, `react`]} />
    <div className="site-content">
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <h3>Latest Posts</h3>
      {data &&
        data.allMarkdownRemark.edges.map(edge => (
          <BlogTeaser
            key={edge.node.frontmatter.path}
            path={edge.node.frontmatter.path}
            date={edge.node.frontmatter.date}
            title={edge.node.frontmatter.title}
            excerpt={edge.node.frontmatter.excerpt}
          />
        ))}
    </div>
  </Layout>
)

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            excerpt
            path
            date
          }
        }
      }
    }
  }
`

export default IndexPage
