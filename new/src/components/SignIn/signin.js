import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap";




 function SignIn() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      history.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    
    <>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      
      <Col style={{width: "600px", paddingLeft: "650px"}}>
      <Card style = {{paddingLeft: "25%", justifyContent: "center", width:"600px", height: "400px"}}>
        <Card.Body style={{width: "500px", justifyContent: "center", paddingLeft: "100px"}}>
          <br></br>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
        <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
        </div>
      </Card>
      </Col>
      
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

    </>
    
  );

}



export default SignIn;






























/*
import React, { useState, useRef } from "react";
import { Container, Row, Col, Form, Button, Card, Alert } from "react-bootstrap";
import Particle from "../Particle";// Import the functions you need from the SDKs you need
import {Link, useHistory} from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"





function SignIn() {

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Sign In 
        </h1>
        




        <Row style={{ justifyContent: "center", paddingBottom: "100px" }}>
          
        </Row>
      </Container>
    </Container>
  );
}

export default SignIn;

*/