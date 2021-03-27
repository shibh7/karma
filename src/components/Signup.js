import React, { useRef, useState, useEffect } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { Link, useHistory, Redirect } from "react-router-dom"
import { useAuth } from '../contexts/AuthContext'
import db from '../firebase'
import { Container } from "react-bootstrap"
import axios from 'axios'

export default function Signup() {

  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const bussinessRef = useRef()
  const nameRef = useRef()
  const [error, setError] = useState("")
  const { signup } = useAuth()
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()
    var data
    if(passwordRef.current.value !== passwordConfirmRef.current.value){
      return setError("passwrords do not match")
    }

    try {
      setLoading(true)
      setError("")
      data = await signup(emailRef.current.value, passwordRef.current.value)   
    } catch {
        setError("Couldn't create an account")
    }
    setLoading(false)
    db.collection("Practitioners").doc(data.user.uid).set({
      business: bussinessRef.current.value,
      email: emailRef.current.value,
      name: nameRef.current.value
    })
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
    history.push("/editProfile")
    
}

  return (
    <>
    <container className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}>
        <div className="w-100" style={{ maxWidth: "400px" }}>
      <Card className = "credentialWindows">
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up as Practitioner</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form  onSubmit={handleSubmit}>
          <Form.Group id="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" ref={nameRef} required />
            </Form.Group>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Form.Group id="business">
              <Form.Label>Business</Form.Label>
              <Form.Control type="text" ref={bussinessRef} required />
            </Form.Group>
            <Button disabled={ loading }className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
      </div>
      </container>
    </>
  )
}
