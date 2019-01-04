import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="site-content">
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <ul>
        {data &&
          data.allMarkdownRemark.edges.map(edge => (
            <Link
              key={edge.node.frontmatter.path}
              to={edge.node.frontmatter.path}
            >
              <li>
                {edge.node.frontmatter.title}
                {edge.node.frontmatter.excerpt}
              </li>
            </Link>
          ))}
      </ul>
    </div>
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
