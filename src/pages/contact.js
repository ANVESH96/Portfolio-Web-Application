import React from "react"

import Layout from "../components/layout"
import "../components/layout.css"

import {Form} from "react-bootstrap"

import{Container,Row,Col,Button} from"react-bootstrap"


const contactPage = () => (
    <Layout>
     <Container>
     <Row  className="justify-content-md-center" style={{fontFamily:'lato'}}> 
     <Col xs md={2.5} lg={4} style={{padding:"4rem 0rem 4rem 0.5rem "}}> 
    <Form  netlify-honeypot="bot-field" style={{width:400}} netlify>
    <Form.Label style={{display:"none"}} id="bot-field">Email address</Form.Label>
    <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
    <Form.Text className="text-muted">
      I'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Choose the Type of Message</Form.Label>
    <Form.Control as="select">
      <option>Feedback</option>
      <option>Suggestions</option>
      <option>Message</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Add Text</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form> 
</Col>
</Row>
</Container>
        </Layout>

)
  

export default contactPage