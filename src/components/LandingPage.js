import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert,ToggleButtonGroup, ToggleButton, Image  } from "react-bootstrap"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link, useHistory } from "react-router-dom"
import { useAuth } from '../contexts/AuthContext'
import db from '../firebase'

export default function LandingPage() {

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
            alert("Inavlid Credentials")
            setLoading(false)
            return
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
        <div>
            <container>
                <Row className="align-items-center justify-content-center mt-2">
                    <Col className="text-left ml-4"><img style = {{ height: "70px"}}src= "/images/logo.png" /></Col>
                    <Col className="text-right">
                        <form onSubmit = {handleSubmit}>
                        <label className="mr-1">Email</label>
                        <input className="mr-3" type="email" ref={emailRef} required />
                        <label className="mr-1">Password</label>{" "}
                        <input className="mr-3" type="password" ref={passwordRef} required />
                        <Button disabled={ loading } className= "mr-2" type="submit">Log In</Button><br></br>
                        </form>
                        <Link className=" mt-1 mr-3"to="/forgot-password">Forgot Password?</Link>
                    </Col>  
                </Row>
                <Row lg = {1} md = {1} className = "mt-3">
                    <img style = {{ height: "250px"}}src= "/images/sunrise.jpg" />
                </Row>
                <Row className = "mt-4">
                    <Col>
                        <div style= {{ width: "800px", textAlign: "center", margin: "auto auto", fontSize: "1.25em", fontWeight: "375"}}>
                            <p >Imagine your life is a journey and your body is the vehichle for you to travel in. Perhaps your intention is to go very far or very fast. How would you expect your vehicle to perform? Karma Well is a wellness program building tool. It is access to a world of "mechanics" for your mind, body and soul. </p>
                        </div>
                    </Col>
                </Row>       
            <Row className="text-center align-items-center justify-content-md-center mt-2 pt-3 pb-3" style= {{border: "2px grove", backgroundColor: "GhostWhite"}}>
                <Col className= "text-center"><h2>Sign Up As</h2></Col>
                <Col className= "text-center">
                    <Link to="/Signup"><Button className= "mb-3">Practitioner</Button></Link>
                    <br></br>
                    <Link to="/SignupPatient"><Button >Patient</Button></Link>
                </Col>        
            </Row> 
        </container>
        </div> 
    )
}


