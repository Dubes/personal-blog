import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ul>
      {data &&
        data.allMarkdownRemark.edges.map(edge => (
          <li key={edge.node.frontmatter.path}>
            {edge.node.frontmatter.excerpt}
          </li>
        ))}
    </ul>
  </Layout>
)

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            path
            date
            excerpt
          }
        }
      }
    }
  }
`

export default IndexPage
