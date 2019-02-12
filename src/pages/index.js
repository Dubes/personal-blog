import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import ShortBio from '../components/shortBio'
import BlogTeaser from '../components/blogTeaser'
import SEO from '../components/seo'
import Helmet from 'react-helmet'
import icon16 from '../assets/favicon-16x16.png'
import icon32 from '../assets/favicon-32x32.png'

const IndexPage = ({ data }) => (
  <html>
    <Helmet
      link={[
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: `${icon16}` },
        { rel: 'icon', type: 'image/png', sizes: '32x32',href: `${icon32}` },
      ]}
    />

    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `blog`, `react`]} />
      <div className="site-content">
        <ShortBio />
        <h5>Latest Posts</h5>
        {data &&
          data.allMarkdownRemark.edges.map(edge => (
            <BlogTeaser
              key={edge.node.frontmatter.path}
              path={`/blog${edge.node.frontmatter.path}`}
              date={edge.node.frontmatter.date}
              title={edge.node.frontmatter.title}
              excerpt={edge.node.frontmatter.excerpt}
            />
          ))}
      </div>
    </Layout>
  </html>
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
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

export default IndexPage
