import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/bootstrap.min.css"
import {Nav,Navbar} from "react-bootstrap"
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
//           

const Header = ({ siteTitle }) => (
  <Navbar  sticky ="top"  bg="dark" expand="lg" variant="dark" role="navigation" style={{minHeight:90}}>
  <Navbar.Brand ><a style={{fontFamily:'Trebuchet MS',fontSize:30}}>{'ANVESHREDDY MEKALA'}</a></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
   <Navbar.Collapse id="basic-navbar-nav">
     <Nav className="mr-auto">
       <Nav> <Link to={"/home"} ><a style={{fontFamily:'Trebuchet MS',fontSize:15,color:'white'}}> HOME </a> </Link> </Nav>
       <Nav><Link to={"/page-2"}><a style={{fontFamily:'Trebuchet MS',fontSize:15,color:'white'}}>SKILLS </a> </Link></Nav>
       <Nav><Link to={"/page-2"}><a style={{fontFamily:'Trebuchet MS',fontSize:15,color:'white'}}>PROJECTS </a> </Link></Nav>
       <Nav><Link to={"/page-2"}><a style={{fontFamily:'Trebuchet MS',fontSize:15,color:'white'}}>BLOG </a> </Link></Nav>
       <Nav><Link to={"/page-2"}><a style={{fontFamily:'Trebuchet MS',fontSize:15,color:'white'}}>CONTACT </a> </Link></Nav>
     </Nav>
     </Navbar.Collapse>
   </Navbar>
  //  <nav class="navbar navbar-expand-sm navbar-dark bg-dark" >
        
  //       <a class="navbar-brand ml-100" style={{color:'white',fontFamily:'Trebuchet MS',fontSize:27}}> {siteTitle}</a>
  //       <button class="navbar-toggler" data-toggle="collapse" data-target="#navbar-menu">
  //       <span class="navbar-toggler-icon"/>
  //       </button>
  //       <div class="collapse navbar-collapse" id="navbar-menu"> 
  //       <ul class="navbar-nav mr-auto w-80" style={{justifyContent:'spaced-around'}}>
  //       <li class="nav-item"><a class="nav-link"/> <Link to="./home" style={linkStyle}> HOME</Link></li>
  //       <li class="nav-item"><a class="nav-link"/><Link to="./page-2" style={linkStyle}> SKILLS</Link> </li>
  //       <li class="nav-item"><a class="nav-link"/><Link to="./page-2" style={linkStyle}> PROJECTS</Link> </li>
  //       <li class="nav-item"><a class="nav-link"/><Link to="./page-2" style={linkStyle}> BLOG</Link> </li>
  //       <li class="nav-item"><a class="nav-link"/><Link to="./page-2" style={linkStyle}> CONTACT</Link> </li>
  //      </ul>
  //      </div>
  // </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
