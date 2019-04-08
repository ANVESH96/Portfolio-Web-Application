import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/bootstrap.min.css"
import {Nav,Navbar,Row,Col,NavDropdown} from "react-bootstrap"


const Header = ({ siteTitle }) => (
  
  <Navbar  sticky ="top"  bg="dark" expand="lg" variant="dark" role="navigation" style={{minHeight:75,fontFamily:'lato',color:'white',justifyContent:"center"}}>
  <div className="container">
  <Navbar.Brand className="ml-auto mr-auto" style={{fontSize:25}} >{'ANVESHREDDY MEKALA'}</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
   <Navbar.Collapse id="basic-navbar-nav">
     <Nav expand="md"  className="ml-auto mr-auto" >
       <Nav style={{padding:"0rem 0rem 0rem 5rem"}} > <Link to={"/"} style={{color:'white'}}> HOME </Link> </Nav>
       <Nav style={{padding:"0rem 0rem 0rem 5rem"}}><Link to={"/skills"} style={{color:'white'}}>SKILLS </Link></Nav>
       <Nav style={{padding:"0rem 0rem 0rem 5rem"}}><Link to={"/projects"} style={{color:'white'}}>PROJECTS</Link></Nav>
       <Nav  style={{padding:"0rem 0rem 0rem 5rem"}}><Link to={"/contact"} style={{color:'white'}}>CONTACT </Link></Nav>
       <Nav> </Nav>
     </Nav>
     </Navbar.Collapse>
     </div>
   </Navbar>  
   
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
