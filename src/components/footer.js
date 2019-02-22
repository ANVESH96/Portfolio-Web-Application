import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const divStyle = {
    margin: `0 auto`,
    width: 960,
    maxHeight: 50,
    padding: `1rem 1rem`,
  };
const h6Style = {
    color:'white',
  }
const  footerStyle={
    background: `#333333`,
  }
const Footer = ({ siteFooter }) => (
  <footer style={footerStyle}>
    <div style={divStyle}>
         <h6 style={h6Style}> {siteFooter}</h6>
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
