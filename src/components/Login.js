import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import { useAuth } from '../contexts/AuthContext'
import db from '../firebase'

export default function Login() {

  const emailRef = useRef()
  const passwordRef = useRef()
  const [error, setError] = useState("")
  const { login } = useAuth()
  const [loading, setLoading] = useState(false)
  const history = useHistory()
 

  async function handleSubmit(e) {
    e.preventDefault()
    var data
    try {
      setLoading(true)
      setError("")
      data = await  login(emailRef.current.value, passwordRef.current.value)
    } catch {
        setError("Failed to log in")
    }
    setLoading(false)
    console.log(data.user.uid)
    var docRef = db.collection("Users").doc(data.user.uid);
    docRef.get().then((doc) => {
      if (doc.exists) {
        history.push("/patientHome")
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
    docRef = db.collection("Practitioners").doc(data.user.uid);
    
  }).catch((error) => {
      console.log("Error getting document:", error);
  });

  docRef = db.collection("Practitioners").doc(data.user.uid);
  docRef.get().then((doc) => {
    if (doc.exists) {
      history.push("/practitionerHome")
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
  docRef = db.collection("Practitioners").doc(data.user.uid);
  
}).catch((error) => {
    console.log("Error getting document:", error);
});

}

  return (
    <>
    <container className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}>
        <div className="w-100" style={{ maxWidth: "400px" }}>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form  onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={ loading }className="w-100" type="submit">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/Signup">Sign Up</Link>
      </div>
      </div>
      </container>
    </>
  )
}
