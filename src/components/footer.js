import React from "react"
import {Navbar} from "react-bootstrap"

const Footer = () => (
  <Navbar  sticky ="bottom"  bg="dark" expand="lg" variant="dark" role="navigation" style={{minHeight:35,justifyContent:"center"}}>
 <a style={{color:'white',fontFamily:"Trebuchet MS",fontSize:15}}> Build by AnveshReddy Mekala with Gatsby and GraphQL</a>  
  </Navbar>
)

export default Footer
