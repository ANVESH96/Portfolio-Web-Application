import React from "react"
import Typed from 'react-typed';
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Jumbotron,Container,Col,Row,Card,Button} from "react-bootstrap"
import { graphql } from "gatsby"
import { StaticQuery} from "gatsby"
import Img from "gatsby-image"
import Avatar from 'react-avatar';
import Profileimage from "../components/image"


export const  displayimage = graphql`
query homeprojectdisplay{
  allMarkdownRemark(sort :{fields:[frontmatter___projectnumber],order:ASC}) {
   edges{
     node{
       id
       frontmatter{
         title
         description
         projectnumber
         image {
           childImageSharp{
            fluid(maxWidth:1000){
              ...GatsbyImageSharpFluid
            }
           }
         }
       }
     
     }
   }
 }
}`

 
const homepage = ({data}) => (
    <Layout>
    <SEO title="Home" keywords={[`gatsby`,'UNCC','UNCCHARLOTTE',`react`,'graphql','AnveshReddy Mekala','anveshmekala','Anvesheddy mekala']} />
    <Container >
    <Jumbotron className="flex flex-column" style={{fontFamily:'lato',background:"#ffffff",paddingBottom:"2.5rem",minHeight:'650px',justifyContent:'center'}}>    
    <Row style={{justifyContent:"center",paddingTop:"4rem"}}>
    {/* <Avatar githubHandle="ANVESH96" size={150} round="120px" /> */}
    </Row>
    <Row  id= "main"  className="ml-auto mr-auto" style={{fontFamily:"lato",fontSize:"28px",justifyContent:"center"}}>
          {"   I BUILD END TO END SOLUTIONS THAT ARE"}
    </Row>
    <Row  id= "typewriter"  style={{justifyContent:"center"}}>
        <Typed style={{color:"orange",fontSize:"20px"}}
                  strings={["DATA DRIVEN","SCALABLE TO USERS","INNOVATIVE","PERFORMANCE OPTIIMIZED"]} 
                  typeSpeed={50} 
                  backSpeed={20}
                  loop ='true' 
                  startDelay={50}
                  fadeOut='true'
              /> 
    </Row>
    </Jumbotron>
    {/* <Jumbotron style={{background:"#ffffff"}}> */}
    {/* {data.allMarkdownRemark.edges.map(project=>
        console.log(project.node.frontmatter.title)
    )} */}
    
      {/* </Jumbotron>  */}
    </Container>
    </Layout>
)

export default homepage

