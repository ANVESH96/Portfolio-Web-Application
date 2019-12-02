import React from "react"
import Layout from "../components/layout"
import {Row,Container} from "react-bootstrap"
// import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import { graphql } from "gatsby"
// import Img from "gatsby-image"

export const Images =  graphql`
query projectimages{
  profilepic: file(relativePath: { eq: "profile-pic.jpeg" }) {
    childImageSharp {
      fixed(width: 300,height:300) {
        ...GatsbyImageSharpFixed
      }
    }
  }
}
`

const contactPage = ({data}) => (
    <Layout>
     <Container>
     <Row style={{justifyContent:"center"}}>
 
     <Timeline lineColor={'#ddd'}>
  <TimelineItem
    key="001"
    dateText="Data"
    style={{ color: '#e86971' }}
    dateInnerStyle={{ background: '#FFFFFF ', color: '#000000' }}
    bodyContainerStyle={{
      width:'300px',
      background: '#F3F3F3',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
  >
    <p>Data Crawler's</p>
    <p>Firebase</p>
    <p>MongoDB</p>
    <p>HDFS</p>
    <p>MySql</p>
  </TimelineItem>
  <TimelineItem
    key="002"
    dateText="Back End"
    style={{ color: '#e86971' }}
    dateInnerStyle={{ background: '#FFFFFF ', color: '#000000' }}
    bodyContainerStyle={{
      width:'300px',
      background: '#F3F3F3',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
  >
    <p>NodeJS</p>
    <p>REST</p>
    <p>GraphQL</p>
    <p>Java</p>
    <p>Hadoop</p>
    <p>ExpressJs</p>
  </TimelineItem>
  <TimelineItem
    key="003"
    dateText="Analytics"
    style={{ color: '#e86971' }}
    dateInnerStyle={{ background: '#FFFFFF ', color: '#000000' }}
    bodyContainerStyle={{
      width:'300px',
      background: '#F3F3F3',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
  >
    <p>Python</p>
    <p>Text Mining</p>
    <p>PySpark</p>
  </TimelineItem>
  <TimelineItem
    key="004"
    dateText="Conatinerization/Deployment"
    style={{ color: '#e86971' }}
    dateInnerStyle={{ background: '#FFFFFF ', color: '#000000' }}
    bodyContainerStyle={{
      width:'300px',
      background: '#F3F3F3',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
  >
    <p>Docker</p>
    <p>Netlify</p>
    <p>Firebase</p>
    <p>GIT Serverless</p>
    <p>Continuous Deployment</p>
  </TimelineItem>
  <TimelineItem
    key="005"
    dateText="Data Visualization"
    style={{ color: '#e86971' }}
    dateInnerStyle={{ background: '#FFFFFF ', color: '#000000' }}
    bodyContainerStyle={{
      width:'300px',
      background: '#F3F3F3',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
  >
    <p>D3JS</p>
    <p>Recharts</p>
    <p>Tablaeu</p>

  </TimelineItem>
  <TimelineItem
    key="006"
    dateText="Front End Technologies"
    style={{ color: '#e86971' }}
    dateInnerStyle={{ background: '#FFFFFF ', color: '#000000' }}
    bodyContainerStyle={{
      width:'300px',
      background: '#F3F3F3',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
  >
    <p>ReactJs</p>
    <p>Angular5</p>
    <p>HTML5</p>
    <p>CSS</p>
    <p>React-Bootstrap</p>
  </TimelineItem>
  
</Timeline>

</Row>
</Container>
        </Layout>

)
  

export default contactPage