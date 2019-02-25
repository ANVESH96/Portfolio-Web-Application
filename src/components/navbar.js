import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Navbar = () => (
  <header
    style={{
      background: `#333333`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        maxHeight:30,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
           style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <h4>Home</h4>
        </Link>
        <Link /> <h4>Skills</h4>
        
          <h4>Projects</h4>
          <h4>Blog</h4>
          <h4>Contact</h4>
      </h1>
    </div>
  </header>
)


export default Navbar