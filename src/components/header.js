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
            color: `hotpink`,
            textDecoration: `none`,
            fontWeight: `900`,
            fontStyle: `italic`
          }}
        >
          Observance
        </Link>
      </h1>
    </div>
  </>
)

export default Header
