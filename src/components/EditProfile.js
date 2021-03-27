import React, { useRef, useState } from "react"
import TopNav from './TopNav'
import { Form, Button, Card, Alert,ToggleButtonGroup, ToggleButton, Image  } from "react-bootstrap"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"



export default function EditProfile() {

    const [profileImage, setprofileImage] = useState("")
    const nameRef = useRef()
    const locationRef = useRef()
    const { currentUser, updatePassword, updateEmail } = useAuth()
    const [userName, setUserName] = useState(currentUser.uid)
    var realImage = (
        <img src={profileImage} 
          width="300"
          height="300"
          className="cat-photo" 
          usePlaceholder={true}
          />
      );

    return (
        <div>
            <TopNav />
            <h4 className= "text-center mt-3">{userName} </h4>
            <Container fluid className= " mt-3 ml-3 pb-3" style={{ backgroundColor: "GhostWhite"}}>
                <Row>
                    <Col className= "text-center mt-2">
                        {realImage}
                        <br></br>
                        <Link to="/update-profile" className="ml-5">Upload photo</Link>
                    </Col>
                    <Col className= "text-center mt-2" >
                        <Form.Group id="name" style={{ maxWidth: "400px"}}>
                            <Form.Label style ={{color: "DarkCyan", fontSize: "1em"}}>Name</Form.Label>
                            <Form.Control type="name" ref={nameRef} required />
                        </Form.Group>
                        <Form.Group id="email" style={{ maxWidth: "400px"}}>
                            <Form.Label style ={{ color: "DarkCyan", fontSize: "1em"}}>Email</Form.Label>
                            <p> <span style = {{fontSize: "1.1em"}}>{userName}</span><Link to="/update-profile" className=" w-200 ml-5">Update Profile</Link></p> 
                        </Form.Group>
                        <Form.Group id="location" style={{ maxWidth: "400px"}}>
                            <Form.Label style ={{color: "DarkCyan", fontSize: "1em"}}>Location</Form.Label>
                            <Form.Control type="name" ref={nameRef} required />
                        </Form.Group>
                        <Form.Group id="socialMedias" style={{ maxWidth: "400px", maxHeight: "800px"}}>
                            <Form.Label style ={{color: "DarkCyan", fontSize: "1em"}}>Social Medias</Form.Label>
                            <Form.Control type="name" ref={nameRef} required />
                        </Form.Group>
                    </Col>
                </Row>
                <Row lg = {1} md = {1}>
                    <Col className= " align-items-center justify-content-center text-center mt-4">
                    <div className="align-items-center justify-content-center">
                            <label  Style = {{color: "DarkCyan", display: "block"}}>Philosophy about your Business</label>
                            <br></br>
                            <textarea style={{ width: "800px", maxWidth: "800px"}}
                                        id="exampleFormControlTextarea1"
                                        rows="6"
                            /> <br></br>
                            <Button variant="info" type="submit">
                                Update
                            </Button>    
                    </div>
                </Col>
                </Row>
                
            </Container>
            
            
        </div>
    )
}
