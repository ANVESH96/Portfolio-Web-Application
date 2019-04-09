import React,{Component} from "react"
import {Jumbotron,Image,Card} from "react-bootstrap"
import { render } from 'react-dom';
import Typed from 'react-typed';
import Layout from "../components/layout"
import SEO from "../components/seo"
import {MdLocationOn} from "react-icons/md"
import Profileimage from "../components/image"
import {Container,Col,Row} from "react-bootstrap"
import { graphql } from "gatsby"
import {FaGithub,FaLinkedin,FaInstagram,FaFacebook} from "react-icons/fa"
import { GoCode,GoBrowser,GoGraph,GoDatabase} from "react-icons/go"
import {IoIosCloudCircle} from "react-icons/io"
import {MdOpenInBrowser} from "react-icons/md"


    export const jumboquery = graphql`
      query jumboIntroductionpage{
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

const Mycomponent = ({data}) => (
    <Layout>
    <SEO title="Home" keywords={[`gatsby`,'UNCC','UNCCHARLOTTE',`react`,'graphql','AnveshReddy Mekala','anveshmekala','Anvesheddy mekala']} />
    <Container>
    <Jumbotron fluid style={{fontFamily:'lato'}}>    
    <Container> 
    <Row id= "main" className="justify-content-md-center">
    <Col  lg={{span:4,offset:0.8}} md={5} sm={6} xs={12} style={{padding:"0rem 0rem 0rem 2rem"}}>  
    <Profileimage />
       </Col>
        <Col lg={8} md={7} sm ={6} style={{padding:"0.25rem 0.25rem 0.25rem 0.25rem",fontFamily:"lato"}}>{data.site.siteMetadata.introduction}
        <Col lg={12} md={12} style={{padding:"1rem 0.25rem 0.25rem 0.25rem",fontFamily:"lato"}}>
         <h2 style={{fontSize:"35px"}}>{"WHO AM I?"}</h2>
              <Typed style={{color:"orange",fontSize:"35px"}}
                  strings={["FULL STACK DEVELOPER","JAVASCRIPT DEVELOPER", "WEB DEVELOPER","FRONT-END DEVELOPER"]} 
                  typeSpeed={50} 
                  backSpeed={20}
                  loop='true'
                  startDelay={50}
                  fadeOut='true'
              />
        </Col >
        <Col lg={12} md={12} style={{padding:"0.5rem 0rem 0rem 1rem",fontFamily:"lato"}}>
        <Row  id="social" className="justify-content-md-center"> 
        <Col lg={1.5} md={2} sm={2} xs={2} style={{padding:"1rem 0rem 0rem 0rem"}}><a  href="https://github.com/ANVESH96/" style={{color:"#333333"}}><FaGithub style={{width:30,height:30}} /></a></Col>
        <Col lg={1.5} md={2} sm={2} xs= {2} style={{padding:"1rem 0rem 0rem 0rem"}}><a  href="https://www.linkedin.com/in/anveshreddy-mekala-94a214106/" style={{color:"#333333"}}><FaLinkedin style={{width:30,height:30}} /></a></Col>
        <Col lg={1.5} md={2} sm={2} xs={2} style={{padding:"1rem 0rem 0rem 0rem"}}><a  href="https://www.instagram.com/anveshreddy_mekala/?hl=en" style={{color:"#333333"}}><FaInstagram style={{width:30,height:30}} /></a></Col>
        <Col lg={1.5} md={2} sm={2} xs={2} style={{padding:"1rem 0rem 0rem 0rem"}}><a  href="https://www.facebook.com/anveshreddy.mekala " style={{color:"#333333"}}><FaFacebook style={{width:30,height:30}} /></a></Col>
        </Row>
        </Col>
        {/* <Col lg={12} md={12} style={{padding:"1rem 0rem 0rem 0rem"}}>
        <Row >
        <Col><GoCode style={{width:25,height:25}} /> Application Development </Col>
        <Col><GoBrowser style={{width:25,height:25}} /> Full Stack Development </Col>
        <Col><GoGraph style={{width:25,height:25}} /> Interactive Dashboards </Col>
        </Row>
        <Row>
        <Col><GoDatabase style={{width:25,height:25}} /> Data Analaytics </Col>
        <Col><MdOpenInBrowser style={{width:25,height:25}} /> Intelligent Crawlers </Col>
        <Col><IoIosCloudCircle style={{width:25,height:25}} /> Big Data </Col>
          </Row>
        </Col> */}
        {/* <Col>
        <Row>
        <Col lg={12} md={8} style={{padding:"2rem 0rem 0rem 0rem",fontSize:18,fontFamily:"lato",fontWeight:'bold'}}>Recommendations Available</Col>
        <Col lg={12} md={8} style={{padding:"0.5rem 0rem 0rem 0rem",fontFamily:"lato"}}> Stephen Macneil, GANN  Research Fellow at UNC Charlotte</Col>
        <Col lg={12} md={8} style={{padding:"0.5rem 0rem 2rem 0rem",fontFamily:"lato"}}> Eric Asch ,Associate Professor at UNC Charlotte </Col>
          </Row>
        </Col> */}
 
      </Col>
    </Row>
    </Container>
    </Jumbotron>
    </Container>
    <Container>
        <Jumbotron/>
        </Container>
    </Layout>
)

export default Mycomponent

