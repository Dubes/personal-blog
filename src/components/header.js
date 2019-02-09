import { Link } from 'gatsby'
import React from 'react'

const Header = () => (
  <>
    <div
      className="website-header"
    />
    <div className="website-headertext">
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          Observance
        </Link>
      </h1>
    </div>
  </>
)

export default Header
