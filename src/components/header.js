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
      height:80,
    }}
  >
  <div class="container"
        style={{
        margin: `0 auto`,
        padding: `0rem 2rem`,
        height:80,
        display:'block',
        }}>  
         <div class="name"
        style={{
        maxWidth:580,
        maxHeight:80,
        margin: 0,
        padding: `1.5rem 6rem`,
        display:'block',
        float:'left'
        }}>  
        <a style={{color:'white',fontFamily:'sans-serif',fontSize:27}}> {siteTitle}</a>
        </div>
      <div class="links"  style={{
        maxWidth :960,
        maxHeight:80,
        margin: `0 auto`,
        padding: `1.5rem 0rem`,
        display:'block',
        float:'left'}}>
        <ul >
        
        <li style={{display:'inline',padding:'0rem 0rem'}}/> <Link to="/" style={linkStyle}> HOME</Link>
        <li style={{display:'inline',padding:'0rem 2rem'}}/><Link to="/" style={linkStyle}> SKILLS</Link>
        <li style={{display:'inline',padding:'0rem 2rem'}}/><Link to="/" style={linkStyle}> PROJECT</Link>
        <li style={{display:'inline',padding:'0rem 2rem'}}/><Link to="/" style={linkStyle}> BLOG</Link>
        <li style={{display:'inline',padding:'0rem 2rem'}}/><Link to="/" style={linkStyle}> CONTACT</Link> 
      </ul> 
      </div>
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
