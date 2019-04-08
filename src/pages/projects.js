import React from "react"
import {Card,Container,Row} from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {FaGithub} from "react-icons/fa"

export const query = graphql`
      query Projectpage{
        site {
          siteMetadata {
           canvasproject_heading
           canvasproject_intro
           canvasproject_crawler
           canvasproject_crawler_description
           portfolio_heading
           portfolio_intro
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
  <Card.Header as="h4">Analyzing "Canvas" Design Ideas  <a  href="https://github.com/stevemacn/InnovationAnalytics/tree/master/crawler" style={{color:"#333333",float:'right'}}><FaGithub style={{width:35,height:35}} /></a></Card.Header>
  <Card.Body>
    <Card.Title>{data.site.siteMetadata.canvasproject_heading}</Card.Title>
    <Card.Text>
     {data.site.siteMetadata.canvasproject_intro}
    </Card.Text>
    <Card.Title>{data.site.siteMetadata.canvasproject_crawler}</Card.Title>
    <Card.Text> {data.site.siteMetadata.canvasproject_crawler_description}  
    <p> {"Built a service which download DOM avoiding captures using PuppeteerJs."}
     {"The data is structured to understand the hierarchy of comments made by users for each idea."}
    {" Tested records using statistical methods."}</p>
    </Card.Text>
    
  </Card.Body>
</Card>
</Row>   
<Row  lg={12} md={4} xs={2} className="justify-content-md-center" style={{fontFamily:'lato',padding:"1rem 0rem 2rem 0rem"}}>
  <Card style={{width:700}}>
  <Card.Header as="h4"> <a  href="https://github.com/ANVESH96/My-portfolio" style={{color:"#333333",float:'right'}}><FaGithub style={{width:35,height:35}} /></a>{data.site.siteMetadata.portfolio_heading} </Card.Header>
  <Card.Body>
    <Card.Title>{data.site.siteMetadata.portfolio_intro} </Card.Title>
    <Card.Text>
     <p>{ "Built using static state generator which retireves data using Graph Ql API."}
      {"React-bootstrap is used for styling the components and containers."}
      {"The website is hosted using Netlify with continuous integration which saves the deployment time by more than 50%."}
      { "Netlify form handling is used to manage forms from backend without a server. "}</p>
      <a href="https://anveshreddy-mekala.netlify.com/"> https://anveshreddy-mekala.netlify.com/ </a>
    </Card.Text>
  </Card.Body>
</Card>
</Row>

</Container>
  </Layout>
)

export default projectPage
