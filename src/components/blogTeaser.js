import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const BlogTeaser = ({ path, date, title, excerpt }) => (
  <>
    <div>
      <Link key={path} to={path}>
        {title}
      </Link>
    </div>
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
