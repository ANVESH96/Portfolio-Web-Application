import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/layout.css"
import {MdLocationOn} from "react-icons/md"
import Profileimage from "../components/image"
import {Container,Col,Row} from "react-bootstrap"
import { graphql } from "gatsby"
import {FaGithub,FaLinkedin,FaInstagram,FaFacebook} from "react-icons/fa"
import { GoCode,GoBrowser,GoGraph,GoDatabase} from "react-icons/go"
import {IoIosCloudCircle} from "react-icons/io"

    export const query = graphql`
      query Introductionpage{
        site {
          siteMetadata {
            introduction
            Interests
            description
            mentoredby
            quoteline
          }
        }
      }
    `
const homePage = ({data}) => (
    <Layout>
    <SEO title="Home" keywords={[`gatsby`,'UNCC','UNCCHARLOTTE',`react`,'graphql','AnveshReddy Mekala','anveshmekala','Anvesheddy mekala']} />
    <Container>
    <Row className="justify-content-md-center">
      <Col sm={6} lg={{span: 4,offset:0.8}} md={5} sm={6} xs={12} style={{padding:"3rem 0rem 0rem 0rem"}}>
       <Profileimage />
       <Container>
         <Row style={{fontFamily:"lato"}}>
           <Col lg={12}style={{padding:"0.5rem 0rem 0rem 2.7rem",fontWeight:"bold"}}> ANVESHREDDY MEKALA
           </Col>
           <Col lg={12}style={{padding:"0.275rem 0rem 0rem 0rem"}}> Graduate Student at UNC-CHARLOTTE
           </Col>
           <Col lg={12}style={{padding:"0.275rem 0rem 0rem 3.4rem"}}><MdLocationOn/>CHARLOTTE, NC
           </Col>
           <Col lg={12}style={{padding:"0.275rem 0rem 0rem 2.5rem"}}>Email: amekala@uncc.edu
           </Col>
           
        <Row  className="justify-content-md-center">
        <Col lg={2} md={2} sm={2} xs={2} style={{padding:"1rem 0rem 0rem 1.75rem"}}><a  href="https://github.com/ANVESH96/" style={{color:"#333333"}}><FaGithub style={{width:30,height:30}} /></a></Col>
        <Col lg={2} md={2} sm={2} xs= {2} style={{padding:"1rem 0rem 0rem 1.75rem"}}><a  href="https://www.linkedin.com/in/anveshreddy-mekala-94a214106/" style={{color:"#333333"}}><FaLinkedin style={{width:30,height:30}} /></a></Col>
        <Col lg={2} md={2} sm={2} xs={2} style={{padding:"1rem 0rem 0rem 1.75rem"}}><a  href="https://www.instagram.com/anveshreddy_mekala/?hl=en" style={{color:"#333333"}}><FaInstagram style={{width:30,height:30}} /></a></Col>
        <Col lg={2} md={2} sm={2} xs={2} style={{padding:"1rem 0rem 0rem 1.75rem"}}><a  href="https://www.facebook.com/anveshreddy.mekala " style={{color:"#333333"}}><FaFacebook style={{width:30,height:30}} /></a></Col>
        </Row>
      
           </Row>
           </Container>
       </Col>
        <Col lg={8} md={7} sm ={6}style={{padding:"3rem 0rem 0rem 0rem",fontFamily:"lato"}}>{data.site.siteMetadata.introduction}
        <Col lg={12} md={12} style={{padding:"1rem 0rem 0rem 0rem",fontFamily:"lato"}}>{data.site.siteMetadata.description}</Col>
        <Col lg={12} md={12} style={{padding:"1rem 0rem 0rem 0rem",fontFamily:"lato"}}>{data.site.siteMetadata.mentoredby}</Col>
        <Col lg={12} md={12} style={{padding:"1rem 0rem 0rem 0rem",fontSize:18,fontFamily:"lato",fontWeight:'bold'}}>{data.site.siteMetadata.Interests}</Col>
        <Col lg={12} md={12} style={{padding:"1rem 0rem 0rem 0rem"}}>
        <Row >
        <Col><GoCode style={{width:25,height:25}} /> Application Development </Col>
        <Col><GoBrowser style={{width:25,height:25}} /> Full Stack Development </Col>
        <Col><GoGraph style={{width:25,height:25}} /> Interactive Dashboards </Col>
        </Row>
        <Row>
        <Col><GoDatabase style={{width:25,height:25}} /> Data Analaytics </Col>
        <Col><GoGraph style={{width:25,height:25}} /> Data Visualization </Col>
        <Col><IoIosCloudCircle style={{width:25,height:25}} /> Big Data Analytics </Col>
          </Row>
        {/* <Col lg={12} md={8} style={{padding:"1rem 0rem 0rem 0rem",fontSize:20,fontFamily:"Trebuchet MS"}}>{data.site.siteMetadata.quoteline}</Col> */}
        </Col>
        <Col>
        <Row>
        <Col lg={12} md={8} style={{padding:"2rem 0rem 0rem 0rem",fontSize:18,fontFamily:"lato",fontWeight:'bold'}}>Recommendations Available</Col>
        <Col lg={12} md={8} style={{padding:"0.5rem 0rem 0rem 0rem",fontFamily:"lato"}}> Stephen Macneil, GANN  Research Fellow at UNC Charlotte</Col>
        <Col lg={12} md={8} style={{padding:"0.5rem 0rem 2rem 0rem",fontFamily:"lato"}}> Eric Asch ,Associate Professor at UNC Charlotte </Col>
          </Row>
        </Col>
 
      </Col>
    </Row>
    </Container>
    </Layout>
)
  

export default homePage