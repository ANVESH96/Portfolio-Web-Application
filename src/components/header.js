import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/bootstrap.min.css"

const linkStyle ={
  color: `white`,
  textDecoration: `none`,
  fontFamily: 'Trebuchet MS',
}

// const headerStyle={
//   background: `#333333`,
// }
// const containerStyle={
//   margin: `0 auto`,
//   padding: `0rem 2rem`,
//   height:80,
//   maxHeight:120,
//   display:'block',
//   }
// const nameStyle={
//       maxWidth:580,
//       maxHeight:120,
//       height:80,
//       margin: 0,
//       padding: `1.5rem 6rem`,
//       display:'block',
//       float:'left'
//       }
// const nameDivStyle={
//           maxWidth:580,
//           maxHeight:120,
//           height:80,
//           margin: 0,
//           padding: `1.5rem 6rem`,
//           display:'flex',
//           float:'left'
//           }

const Header = ({ siteTitle }) => (
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        
        <a class="navbar-brand ml-auto" style={{color:'white',fontFamily:'Trebuchet MS',fontSize:27}}> {siteTitle}</a>
        <button class="navbar-toggler" data-toggle="collapse" data-target="#navbar-menu">
        <span class="navbar-toggler-icon"/>
        </button>
        <div class="collapse navbar-collapse" id="navbar-menu"> 
        <ul class="navbar-nav ml-auto nav-fill w-100">
        <li class="nav-item"><a class="nav-link"/> <Link to="./home" style={linkStyle}> HOME</Link></li>
        <li class="nav-item"><a class="nav-link"/><Link to="/" style={linkStyle}> SKILLS</Link> </li>
       </ul>
       </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
