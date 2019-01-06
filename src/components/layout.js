import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import Footer from './footer'
import './layout.css'

const Layout = ({ children }) => (
  <div className="site-layout">
    <Header />
    <div className="blog-content">{children}</div>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
