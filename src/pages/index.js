import React from "react"
import {Jumbotron} from "react-bootstrap"
import Typed from 'react-typed';
import Layout from "../components/layout"
import SEO from "../components/seo"
import Profileimage from "../components/image"
import {Container,Col,Row} from "react-bootstrap"
import { graphql } from "gatsby"
import {FaGithub,FaLinkedin,FaInstagram,FaFacebook} from "react-icons/fa"
import { GoCode,GoBrowser,GoGraph,GoDatabase} from "react-icons/go"
import {IoIosCloudCircle} from "react-icons/io"
import {MdOpenInBrowser} from "react-icons/md"


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

const homepage = ({data}) => (
    <Layout>
    <SEO title="Home" keywords={[`gatsby`,'UNCC','UNCCHARLOTTE',`react`,'graphql','AnveshReddy Mekala','anveshmekala','Anvesheddy mekala']} />
    <Container >
    <Jumbotron fluid style={{fontFamily:'lato',background:"#FBFBFB",paddingBottom:"2.5rem"}}>    
    <Container> 
    <Row id= "main">
    <Col  lg={{span:4,offset:0.8}} md={5} sm={12} xs={12} style={{padding:"0rem 0rem 0rem 2rem"}}> 
      <Profileimage />
    <Row  id="details"lg={{span:4,offset:0.8}} md={5} sm={12} xs={12} style={{justifyContent:"center"}}> {"Graduate Student @ UNC CHARLOTTE"}
       </Row>
       <Row  lg={{span:4,offset:0.8}} md={5} sm={12} xs={12} style={{justifyContent:"center"}}> {"Email: amekala@uncc.edu"}
       </Row>
       </Col>
        <Col lg={8} md={7} sm ={12} style={{padding:"0.5rem 0.25rem 0.25rem 0.25rem",fontFamily:"lato"}}>{data.site.siteMetadata.introduction}
        <Col lg={12} md={12} style={{padding:"1rem 0.25rem 0.25rem 0.25rem",fontFamily:"lato"}}>
         <h2 style={{fontSize:"35px"}}>{"WHO AM I?"}</h2>
              <Typed style={{color:"orange",fontSize:"35px"}}
                  strings={["FULL STACK DEVELOPER","PROTOTYPING","REACT DEVELOPER"]} 
                  typeSpeed={50} 
                  backSpeed={20}
                  loop='true'
                  startDelay={50}
                  fadeOut='true'
              />
        </Col >
        <Col lg={12} md={12} style={{padding:"0.5rem 0rem 0rem 1rem",fontFamily:"lato"}}>
        <Row  id="social" style={{justifyContent:"center"}}> 
        <Col lg={1.5} md={2} sm={2} xs={2} style={{padding:"1rem 0rem 0rem 0rem"}}><a  href="https://github.com/ANVESH96"style={{color:"#333333"}}><FaGithub style={{width:30,height:30}} /></a></Col>
        <Col lg={1.5} md={2} sm={2} xs= {2} style={{padding:"1rem 0rem 0rem 0rem"}}><a  href="https://www.linkedin.com/in/anveshreddy-mekala-94a214106/" style={{color:"#333333"}}><FaLinkedin style={{width:30,height:30}} /></a></Col>
        <Col lg={1.5} md={2} sm={2} xs={2} style={{padding:"1rem 0rem 0rem 0rem"}}><a   href="https://www.instagram.com/anveshreddy_mekala/?hl=en" style={{color:"#333333"}}><FaInstagram style={{width:30,height:30}} /></a></Col>
        <Col lg={1.5} md={2} sm={2} xs={2} style={{padding:"1rem 0rem 0rem 0rem"}}><a  href="https://www.facebook.com/anveshreddy.mekala " style={{color:"#333333"}}><FaFacebook style={{width:30,height:30}} /></a></Col>
        </Row>
        </Col>
      </Col>
    </Row>
    </Container>
    </Jumbotron>
    </Container>
    <Container>
        <Jumbotron style={{background:"#FCFCFC",fontFamily:"lato" ,padding:"1rem 1rem 1rem 1rem"}}>
        <Row style={{justifyContent:"center",fontSize:"25px"}}>{"Area of Interest"}</Row>
        <Row >
        <Col lg={4} xs={12} md={4} sm={6} ><GoCode style={{width:25,height:25}} /> Application Development </Col>
        <Col lg={4} xs={12} md={4} sm={6} ><GoBrowser style={{width:25,height:25}} /> Full Stack Development </Col>
        <Col lg={4} xs={12} md={4} sm={6} ><GoGraph style={{width:25,height:25}} /> Interactive Dashboards </Col>
        </Row>
        <Row>
        <Col lg={4} xs={12} md={4} sm={6}><GoDatabase style={{width:25,height:25}} /> Text Mining </Col>
        <Col lg={4} xs={12} md={4} sm={6}><MdOpenInBrowser style={{width:25,height:25}} /> Intelligent Crawlers </Col>
        <Col lg={4} xs={12} md={4} sm={6}><IoIosCloudCircle style={{width:25,height:25}} /> Big Data </Col>
          </Row>
        </Jumbotron>
        </Container>
    </Layout>
)

export default homepage

