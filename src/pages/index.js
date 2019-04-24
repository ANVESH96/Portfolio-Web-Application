import React from "react"
import {Jumbotron} from "react-bootstrap"
import Typed from 'react-typed';
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Container,Col,Row} from "react-bootstrap"
import { graphql } from "gatsby"
import { StaticQuery} from "gatsby"
import Img from "gatsby-image"
import Avatar from 'react-avatar';
// import {FaGithub,FaLinkedin,FaInstagram,FaFacebook} from "react-icons/fa"
// import { GoCode,GoBrowser,GoGraph,GoDatabase} from "react-icons/go"
// import {IoIosCloudCircle} from "react-icons/io"
// import {MdOpenInBrowser} from "react-icons/md"
import Profileimage from "../components/image"


export const  displayimage = graphql`
query imagedisplay{
  profilepic: file(relativePath: { eq: "profile-pic.jpeg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`
 
const homepage = ({data}) => (
    <Layout>
    <SEO title="Home" keywords={[`gatsby`,'UNCC','UNCCHARLOTTE',`react`,'graphql','AnveshReddy Mekala','anveshmekala','Anvesheddy mekala']} />
    <Container >
    <Jumbotron className="flex flex-column" style={{fontFamily:'lato',background:"#ffffff",paddingBottom:"2.5rem",minHeight:'600px',justifyContent:'center'}}>    
    <Row style={{justifyContent:"center",paddingTop:"4rem"}}>
    <Avatar githubHandle="ANVESH96" size={150} round="120px" />
    </Row>
    <Row  id= "main"  style={{fontFamily:"lato",fontSize:"28px",justifyContent:"center"}}>
          {"I BUILD END TO END SOLUTIONS THAT ARE  "}
    </Row>
    <Row  id= "typewriter"  style={{justifyContent:"center"}}>
        <Typed style={{color:"orange",fontSize:"30px"}}
                  strings={["DATA DRIVEN","SCALABLE TO USERS","INNOVATIVE","PERFORMANCE OPTIIMIZED"]} 
                  typeSpeed={50} 
                  backSpeed={20}
                  loop ='true' 
                  startDelay={50}
                  fadeOut='true'
              /> 
    </Row>
    </Jumbotron>
    </Container>
  
    </Layout>
)

export default homepage

