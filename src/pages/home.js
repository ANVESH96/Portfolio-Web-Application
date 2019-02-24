import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/layout.css"
import { Link } from "gatsby"
import {MdLocationOn} from "react-icons/md"
import Profileimage from "../components/image"
import {Container,Col,Row} from "react-bootstrap"
import { StaticQuery, graphql } from "gatsby"
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
        <Col lg={8} md={4} style={{padding:"3rem 0rem 0rem 0rem",fontFamily:"Trebuchet MS"}}>{data.site.siteMetadata.introduction}
        <Col lg={12} md={8} style={{padding:"1rem 0rem 0rem 0rem",fontFamily:"Trebuchet MS"}}>{data.site.siteMetadata.description}</Col>
        <Col lg={12} md={8} style={{padding:"1rem 0rem 0rem 0rem",fontFamily:"Trebuchet MS"}}>{data.site.siteMetadata.mentoredby}</Col>
        <Col lg={12} md={8} style={{padding:"1rem 0rem 0rem 0rem",fontSize:20,fontFamily:"Trebuchet MS"}}>{data.site.siteMetadata.Interests}</Col>
        
        <Col lg={12} md={8} style={{padding:"1rem 0rem 0rem 0rem"}}>
        
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
          <Col lg={12} md={8} style={{padding:"1rem 0rem 0rem 0rem",fontSize:20,fontFamily:"Trebuchet MS"}}>{data.site.siteMetadata.quoteline}</Col>
        </Col>
        <Container>
        <Row  className="justify-content-md-center">
        <Col lg={1.5} md={1} style={{padding:"1rem 0rem 0rem 0rem"}}><a  href="https://github.com/ANVESH96/"><FaGithub style={{width:40,height:40}} /></a></Col>
        <Col lg={1.5} md={1} style={{padding:"1rem 0rem 0rem 0rem"}}><a  href="https://www.linkedin.com/in/anveshreddy-mekala-94a214106/"><FaLinkedin style={{width:40,height:40}} /></a></Col>
        <Col lg={1.5} md={1} style={{padding:"1rem 0rem 0rem 0rem"}}><a  href="https://www.instagram.com/anveshreddy_mekala/?hl=en"><FaInstagram style={{width:40,height:40}} /></a></Col>
        <Col lg={1.5} md={1} style={{padding:"1rem 0rem 0rem 0rem"}}><a  href="https://www.facebook.com/anveshreddy.mekala "><FaFacebook style={{width:40,height:40}} /></a></Col>
        </Row>
        </Container>
      </Col>
    </Row>
    </Container>
    </Layout>
)
  

export default homePage