import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/layout.css"
import {Container,Col,Row} from "react-bootstrap"
import{Card} from"react-bootstrap"


const skillsPage = () => (
    <Layout>
   <SEO title="Home" keywords={[`gatsby`,'UNCC','UNCCHARLOTTE',`react`,'graphql','AnveshReddy Mekala','anveshmekala','Anvesheddy mekala']} />
   <Container lg={5}  style={{padding:"2rem 0rem 2rem 1rem"}}> 
   <Row>
    <Col id="webtech">
   <Card border="secondary" style={{ width: '18rem',height:'40rem',fontFamily:'lato' }}>
   <Card.Header  style={{ fontSize:22 }}>Web Technologies</Card.Header>
  <Card.Body >
    <Card.Subtitle className="mb-2 text-muted" ><a style= {{fontSize:25}} />Front End Technologies</Card.Subtitle>
    <Card.Text style= {{fontSize:15}}>
    <Row><Col> ReactJs</Col><Col> Angular5</Col><Col> AngularJS</Col></Row> </Card.Text>
    <Card.Subtitle className="mb-2 text-muted" ><a style= {{fontSize:25}} />Back End & Server</Card.Subtitle>
    <Card.Text style= {{fontSize:15}}>
    <Row><Col> NodeJs</Col><Col> ExpressJs</Col></Row> 
    </Card.Text>
    <Card.Subtitle className="mb-2 text-muted" ><a style= {{fontSize:25}} />Databases</Card.Subtitle>
    <Card.Text style= {{fontSize:15}}>
    <Row><Col>Firebase</Col><Col>MongoDB</Col><Col>SQL</Col><Col>Redux</Col></Row> 
    </Card.Text>
    <Card.Subtitle className="mb-2 text-muted" ><a style= {{fontSize:25}} /> Querying</Card.Subtitle>
    <Card.Text style= {{fontSize:15}}>
    <Row><Col>GraphQL</Col><Col>SQL</Col></Row> 
    </Card.Text>
    <Card.Subtitle className="mb-2 text-muted" ><a style= {{fontSize:25}} /> Static Site Genarators</Card.Subtitle>
    <Card.Text style= {{fontSize:15}}>
    <Row><Col>Gatsby</Col></Row> 
    </Card.Text>
    <Card.Subtitle className="mb-2 text-muted" ><a style= {{fontSize:25}} /> Other Frameworks</Card.Subtitle>
    <Card.Text style= {{fontSize:15}}>
    <Row><Col>CheerioJs</Col><Col>PhantomJs</Col><Col>PuppeteerJS</Col></Row> 
    </Card.Text>
  </Card.Body>
 </Card>
 </Col>
 <Col id="Data Analytics">
   <Card  border="secondary" style={{ width: '18rem',height:'30rem',fontFamily:'lato' }}>
   <Card.Header  style={{ fontSize:22 }}>Data Analytics</Card.Header>
  <Card.Body >
    <Card.Subtitle className="mb-2 text-muted" ><a style= {{fontSize:25}} />Statistics</Card.Subtitle>
    <Card.Text style= {{fontSize:15}}>
    <Row><Col> Python3</Col><Col> R</Col></Row> </Card.Text>
    <Card.Subtitle className="mb-2 text-muted" ><a style= {{fontSize:25}} />Text Mining</Card.Subtitle>
    <Card.Text style= {{fontSize:15}}>
    <Row><Col> NLTK</Col></Row> 
    </Card.Text>
    <Card.Subtitle className="mb-2 text-muted" ><a style= {{fontSize:25}} /> Data Visualization</Card.Subtitle>
    <Card.Text style= {{fontSize:15}}>
    <Row><Col>D3Js</Col><Col>Tablaeu</Col><Col>Dash</Col></Row> 
    </Card.Text>
    <Card.Subtitle className="mb-2 text-muted" ><a style= {{fontSize:25}} /> Big Data Technologies</Card.Subtitle>
    <Card.Text style= {{fontSize:15}}>
    <Row><Col>Hadoop</Col><Col>HDFS</Col><Col>Mapreduce2.0</Col><Col>PySpark</Col></Row> 
    </Card.Text>
  </Card.Body>
 </Card>
 </Col>
 <Col id="Software Development">
   <Card  border="secondary" style={{ width: '18rem',height:'38rem',fontFamily:'lato' }}>
   <Card.Header  style={{ fontSize:22 }}>Software Development</Card.Header>
  <Card.Body >
  <Card.Subtitle className="mb-2 text-muted" ><a style= {{fontSize:25}} />Programming</Card.Subtitle>
    <Card.Text style= {{fontSize:15}}>
    <Row><Col>C++</Col><Col>Java</Col><Col>C</Col></Row> 
    </Card.Text>
  <Card.Subtitle className="mb-2 text-muted" ><a style= {{fontSize:25}} />Software Dev Methodologies</Card.Subtitle>
    <Card.Text style= {{fontSize:15}}>
    <Row><Col>Agile</Col><Col>Scrum</Col><Col>Rapid ProtoTyping</Col></Row> 
    </Card.Text>
    <Card.Subtitle className="mb-2 text-muted" ><a style= {{fontSize:25}} />Containerization</Card.Subtitle>
    <Card.Text style= {{fontSize:15}}>
    <Row><Col> Docker</Col></Row> </Card.Text>
    <Card.Subtitle className="mb-2 text-muted" ><a style= {{fontSize:25}} />Testing</Card.Subtitle>
    <Card.Text style= {{fontSize:15}}>
    <Row><Col> Quant. Testing</Col><Col>MochaJs</Col></Row> 
    </Card.Text>
    <Card.Subtitle className="mb-2 text-muted" ><a style= {{fontSize:25}} />Authentication</Card.Subtitle>
    <Card.Text style= {{fontSize:15}}>
    <Row><Col> Firebase Auth</Col></Row> 
    </Card.Text>
    <Card.Subtitle className="mb-2 text-muted" ><a style= {{fontSize:25}} />Project Management</Card.Subtitle>
    <Card.Text style= {{fontSize:15}}>
    <Row><Col> Trello</Col><Col> ZohoSprints</Col></Row> 
    </Card.Text>
   
  </Card.Body>
 </Card>
 </Col>
 </Row>

     </Container>
   </Layout>
)
  

export default skillsPage