import React from "react"
import Jumbotron, { Card, Container, InputGroup,FormControl,Row,  Badge, Col,Button } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {FaGithub} from "react-icons/fa"
import { graphql } from "gatsby"
import Img from "gatsby-image"
export const PageQuery =  graphql`
query Projectsdisplay{
    allMarkdownRemark(sort :{fields:[frontmatter___projectnumber],order:ASC}) {
     edges{
       node{
         id
         frontmatter{
           path 
           author
           title
           description
           skills
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
}
`
    
const projectPage = ({data}) => (
 
  <Layout>
    <SEO title="Projects" keywords={[`React`,'Redux','D3js',`Nodejs`,'graphql','AnveshReddy Mekala Redux','anveshmekala React','Anvesheddy mekala D3JS',"Anvesh Projects"]} />
    <Container >
    <Row  id= "search-filter"  className="justify-content-center" style={{fontFamily:'lato',paddingLeft:"2.5px",paddingRight:"0.5px",paddingTop:"2rem"}}>
   <Row>
    <Col lg={10}>
    <InputGroup>
    <FormControl
      placeholder="search"
      aria-label="search"
      aria-describedby="basic-addon1"
       />
       </InputGroup>
      </Col>
      <Col lg={2}>
      <Button variant="dark" >FilterBy</Button>
      </Col>
      </Row>
      </Row>
      {data.allMarkdownRemark.edges.map(post=>      
<Row  id= "project" className="justify-content-center" style={{fontFamily:'lato',paddingLeft:"2.5px",paddingRight:"0.5px",paddingTop:"2rem"}}>
<Card style={{ width: '45rem' ,fontSize:"90%"}}>
<Row id="project-content">

  <Col lg={4} xs={9} sm={9} md= {6}>
  <div class="view overlay zoom">
   <Img className="image-fluid" variant="top" fluid={post.node.frontmatter.image.childImageSharp.fluid} />
   </div>
  </Col>
  <Col lg={8} xs={12} sm={12} md={6}>
  <Card.Body>
    <Card.Title>{post.node.frontmatter.title}</Card.Title>
    <Card.Text>
    {post.node.frontmatter.description}
    </Card.Text>
    <Card.Text >
     {post.node.frontmatter.skills.map(skill=>(
      <Badge variant="secondary"> {skill}</Badge>
    ))}
   <br/> 
    </Card.Text>
    <Card.Text >
      <Button variant="light"> Source Code </Button>
      <Button style={{float:"right"}}variant="outline-dark"> Read More </Button>
      </Card.Text>
  </Card.Body>
  </Col>
  </Row>
</Card>

</Row>
)}
</Container>
  </Layout>
)

export default projectPage
