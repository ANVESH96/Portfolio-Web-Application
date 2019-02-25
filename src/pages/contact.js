import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/layout.css"
import { Link } from "gatsby"
import {Form} from "react-bootstrap"
import { StaticQuery, graphql } from "gatsby"
import{Card,ListGroup,Container,Row,Col} from"react-bootstrap"


const contactPage = () => (
    <Layout>
     <Container>
     <Row  className="justify-content-md-center" style={{fontFamily:'lato'}}> 
     <Col xs md={2.5} lg={4} style={{padding:"4rem 0rem 4rem 0.5rem "}}> 
    <Form attribute="netlify" netlify-honeypot="bot-field" style={{width:400}}>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Label style={{display:"none"}} id="bot-field">Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
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
</Form> 
</Col>
</Row>
</Container>
        </Layout>

)
  

export default contactPage