import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
<<<<<<< HEAD
import { Navbar,Nav } from "react-bootstrap"

const Footer = ({ siteFooter }) => (
  <Navbar  sticky ="bottom"  bg="dark" expand="lg" variant="dark" role="navigation" style={{minHeight:35,justifyContent:"center"}}>
 <a style={{color:'white',fontFamily:"Trebuchet MS",fontSize:15}}> Build by AnveshReddy Mekala with Gatsby and GraphQL</a>  
  </Navbar>
)

=======

const divStyle = {
    margin: `0 auto`,
    maxwidth: 960,
    maxHeight: 50,
    padding: `1rem 1rem`,
  };
const h6Style = {
    color:'white',
    textAlign:'center'
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

>>>>>>> 18aadf905890ae32bec9342267028d8d56e66417
export default Footer
