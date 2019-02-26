import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/bootstrap.min.css"
import {Nav,Navbar,Row,Col} from "react-bootstrap"
import "../styles/styles.css"

const Header = ({ siteTitle }) => (
  <Navbar  sticky ="top"  bg="dark" expand="lg" variant="dark" role="navigation" style={{minHeight:90,fontFamily:'lato',color:'white'}}>
  <Navbar.Brand  className= "lg mx-5 "style={{fontSize:25}} >{'ANVESHREDDY MEKALA'}</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
   <Navbar.Collapse id="basic-navbar-nav">
     <Nav expand="md"  className="mr-auto" >
       <Nav style={{padding:"0rem 0rem 0rem 5rem"}} > <Link to={"/"} style={{color:'white'}}> HOME </Link> </Nav>
       <Nav style={{padding:"0rem 0rem 0rem 5rem"}}><Link to={"/skills"} style={{color:'white'}}>SKILLS </Link></Nav>
       <Nav style={{padding:"0rem 0rem 0rem 5rem"}}><Link to={"/projects"} style={{color:'white'}}>PROJECTS</Link></Nav>
       <Nav  style={{padding:"0rem 0rem 0rem 5rem"}}><Link to={"/contact"} style={{color:'white'}}>CONTACT </Link></Nav>
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
