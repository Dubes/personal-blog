import { Link } from 'gatsby'
import React from 'react'

const Header = () => (
  <>
    <div
      className="website-header"
      style={{
        background: `rebeccapurple`,
      }}
    />
    <div className="website-headertext">
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          //KDU
        </Link>
      </h1>
    </div>
  </>
)

export default Header
