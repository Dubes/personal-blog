import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const BlogTeaser = ({ path, date, title, excerpt }) => (
  <>
  <h3 style={{marginBottom: `5px`}}>
    <Link
      key={path}
      to={path}
      style={{
        textDecoration: `none`,
        color: `#d23669`,
      }}
      rel='bookmark'
    >
      {title}
    </Link>
    </h3>
    <small>{date}</small>
    <p>{excerpt}</p>
  </>
)

BlogTeaser.propTypes = {
  path: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
}

export default BlogTeaser
