import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <div className="site-layout">
    <Header />
    <div className="blog-content">{children}</div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
