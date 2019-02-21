import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const linkStyle ={
    color: `white`,
    textDecoration: `none`,
    fontFamily: 'sans-serif',
}
const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#333333`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        maxHeight:80,
        padding: `0rem 2rem`,}}> 
        <table>
      <td>
      <a style={{color:'white',fontFamily:'sans-serif',height:40}}> {siteTitle}</a>
      </td>
      <td/><Link to="/" style={linkStyle}> HOME</Link>
      <td/><Link to="/" style={linkStyle}> SKILLS</Link>
      <td/><Link to="/" style={linkStyle}> PROJECT</Link>
      <td/><Link to="/" style={linkStyle}> BLOG</Link>
      <td/><Link to="/" style={linkStyle}> CONTACT</Link>  
      </table>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
