import React from 'react'
import PropTypes from 'prop-types'

import Helmet from 'react-helmet'
import icon16 from '../assets/favicon-16x16.png'
import icon32 from '../assets/favicon-32x32.png'
import Header from './header/header'
import './layout.css'

const Layout = ({ children }) => (
  <div className="site-layout">
    <Helmet
      link={[
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: `${icon16}` },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${icon32}` },
      ]}
    />
    <Header />
    <div className="blog-content">{children}</div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
