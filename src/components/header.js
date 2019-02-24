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
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
