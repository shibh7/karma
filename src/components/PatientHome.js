import React, { useState, useEffect, useRef } from "react"
import TopNavPatient from './TopNavPatient'
import { Card, Button, Alert } from "react-bootstrap"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Col'
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import {mindBodySoul} from './GlobalData';

export default function PatientHome() {

  let content;

    const handleclick = (value) => {
        if(value == 2){
          console.log(value)
          content = <div>Practitioner</div>
        }else if(value == 3){
          console.log(value)
          content = <div>Program</div>
        }else{
          console.log(value)
        }
    }

    
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    const componentRef = React.useRef();
  
    async function handleLogout() {
      
  
      try {
        await logout()
        history.push("/landingpage")
      } catch {
        // setError("Failed to log out")
      }
    }
  
    useEffect(() => {
        
    }, [content])

    return (
        <div>
            <TopNavPatient onchange= {handleclick}/>
            <Container>
          <Row className="align-items-center justify-content-center mt-2">
            <div style= {{ width: "800px", textAlign: "center", margin: "auto auto", fontSize: "1.15em", fontWeight: "375"}}>
              <h3>GIVING, HEALING, GROWING</h3>
              <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et imperdiet arcu. In a ornare nunc, et accumsan odio. Suspendisse id ipsum ut velit varius pulvinar. Fusce egestas varius enim. Phasellus nec rutrum diam. Phasellus vel cursus nisi. Ut a dui sit amet quam imperdiet facilisis vitae eget nunc. Pellentesque accumsan massa a orci euismod, ac cursus turpis blandit.</p>  
            </div>  
          </Row>
          <Row className="align-items-center justify-content-center mt-2">
            <div style= {{ backgroundColor: "BurlyWood", color: "Azure", width: "900px", textAlign: "center", margin: "auto auto", fontSize: "1.15em", fontWeight: "375"}}>
              <h3>Schedule</h3>
            </div>  
          </Row>
      
          <Row className="align-items-center justify-content-center mt-2">
            <div style= {{ padding:"5px", backgroundColor: "BurlyWood", color: "Azure", width: "98%", textAlign: "center", margin: "auto auto", fontSize: "1.15em", fontWeight: "375"}}>
              <h3>What's Karma Well?</h3>
              <p style = {{width: "80%", textAlign: "center", margin: "auto auto", fontSize: "1em", fontWeight: "375"}}>lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et imperdiet arcu. In a ornare nunc, et accumsan odio. Suspendisse id ipsum ut velit varius pulvinar. Fusce egestas varius enim. Phasellus nec rutrum diam. Phasellus vel cursus nisi. Ut a dui sit amet quam imperdiet facilisis vitae eget nunc. Pellentesque accumsan massa a orci euismod, ac cursus turpis blandit.</p>  
            </div>  
          </Row>
          <Row lg={3} md={3} sm={3}  className="align-items-center justify-content-center mt-3">
              <Col xs lg="2">Mind</Col>
              <Col xs lg="2">Body</Col>
              <Col xs lg="2">Soul</Col>  
          </Row>
          </Container>
        </div>
    )
}
