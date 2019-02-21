import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteFooter }) => (
  <footer
    style={{
      background: `#333333`,
      
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1rem 1rem`,

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
         <h3> {siteFooter}</h3>
        </Link>
      </h1>
    </div>
  </footer>
)

Footer.propTypes = {
  siteFooter: PropTypes.string,
}
Footer.defaultProps = {
  siteFooter: ``,
}

export default Footer
