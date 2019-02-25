import React from "react"
import {Card,Container,Row} from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
      query Projectpage{
        site {
          siteMetadata {
           canvasproject_heading
           canvasproject_intro
           canvasproject_crawler
           canvasproject_crawler_description
          }
        }
      }
    `
const projectPage = ({data}) => (
  <Layout>
    <SEO title="Page two" keywords={[`React`,'Redux','D3js',`Nodejs`,'graphql','AnveshReddy Mekala Redux','anveshmekala React','Anvesheddy mekala D3JS']} />
    <Container lg={12} md={4}>
      <Row  lg={12} md={4} xs={2} className="justify-content-md-center" style={{fontFamily:'lato',padding:"2rem 0rem 2rem 0rem"}}>
    
    <Card style={{width:700}}>
  <Card.Header as="h5">Analyzing Canvas Design Ideas </Card.Header>
  <Card.Body>
    <Card.Title>{data.site.siteMetadata.canvasproject_heading}</Card.Title>
    <Card.Text>
     {data.site.siteMetadata.canvasproject_intro}
    </Card.Text>
    <Card.Title>{data.site.siteMetadata.canvasproject_crawler}</Card.Title>
    <Card.Text> {data.site.siteMetadata.canvasproject_crawler_description}  
    <p> Built a service which download DOM avoiding captures using PuppeteerJs
     The data is structured to understand the hierarchy of comments made by users for each idea.
     Tested records using statistical methods.</p>
    </Card.Text>
    
  </Card.Body>
</Card>
</Row>
</Container>
  </Layout>
)

export default projectPage
