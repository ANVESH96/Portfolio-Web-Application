import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/layout.css"
import Profileimage from "../components/image"
import {Container,Col,Row} from "react-bootstrap"
import { MdLocationOn } from "react-icons/md";
import { StaticQuery, graphql } from "gatsby"
import {FaGithub,FaLinkedin,FaInstagram,FaFacebook} from "react-icons/fa"
const placeStyle={
      display: 'block',
      justifyContent: 'Center',padding:'0.5rem 0rem 0rem 2.5rem',maxWidth:200,fontFamily: 'Trebuchet MS',fontSize:18}
  const profileImage={display:'block',padding:'2.5rem 1.5rem 1rem 7.5rem',maxWidth:500}
  const nameStyle={display:'block',padding:'1.5rem 0rem 0rem 2.5rem',maxWidth:250,fontFamily: 'Trebuchet MS',fontSize:18}
  const skillsStyle={
      display: 'block',
      justifyContent: 'left',padding:'0.5rem 0rem 0rem 1.8rem',maxWidth:350,fontFamily: 'Trebuchet MS',fontSize:18}

    export const query = graphql`
      query Introductionpage{
        site {
          siteMetadata {
            introduction
            Interests
            mentoredby
          }
        }
      }
    `
const homePage = ({data}) => (
 
    <Layout>

    
    <SEO title="Home" keywords={[`gatsby`,'UNCC','UNCCHARLOTTE',`react`,'graphql','AnveshReddy Mekala','anveshmekala','Anvesheddy mekala']} />
    <Container>
    <Row>
      <Col sm={10}lg={{span: 4,offset:0.8}} md={8} style={{padding:"3rem 0rem 0rem 0rem"}}>
       <Profileimage />
       <Container>
         <Row>
           <Col lg={12}style={{padding:"0.5rem 0rem 0rem 2.7rem",fontFamily:'Trebuchet MS'}}> ANVESHREDDY MEKALA
           </Col>
           <Col lg={12}style={{padding:"0.275rem 0rem 0rem 0rem",fontFamily:'Trebuchet MS'}}> Graduate Student at UNC-CHARLOTTE
           </Col>
           <Col lg={12}style={{padding:"0.275rem 0rem 0rem 2.8rem",fontFamily:'Trebuchet MS'}}><MdLocationOn/>CHARLOTTE, NC
           </Col>
           </Row>
           </Container>
       </Col>
      <Col lg={8} md={4} style={{padding:"3rem 0rem 0rem 0rem"}}>{data.site.siteMetadata.introduction}
        <Col lg={12} md={8} style={{padding:"1rem 0rem 0rem 0rem"}}>{data.site.siteMetadata.mentoredby}</Col>
        <Col lg={12} md={8} style={{padding:"1rem 0rem 0rem 0rem"}}>{data.site.siteMetadata.Interests}</Col>
        <Row >
        <Col lg={1.5} md={1} style={{padding:"1rem 0rem 0rem 0rem"}}><FaGithub style={{width:50,height:50}} /></Col>
        <Col lg={1.5} md={1} style={{padding:"1rem 0rem 0rem 0rem"}}><FaLinkedin style={{width:50,height:50}} /></Col>
        <Col lg={1.5} md={1} style={{padding:"1rem 0rem 0rem 0rem"}}><FaInstagram style={{width:50,height:50}} /></Col>
        <Col lg={1.5} md={1} style={{padding:"1rem 0rem 0rem 0rem"}}><FaFacebook style={{width:50,height:50}} /></Col>
        </Row>
      </Col>
    </Row>
    </Container>
    </Layout>
)
  

export default homePage