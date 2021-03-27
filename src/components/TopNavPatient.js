import React,{ useRef, useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import { Form, Button, Card, Alert,ToggleButtonGroup, ButtonGroup, ToggleButton  } from "react-bootstrap"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link, useHistory } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

export default function TopNavPatient(props) {

    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
    
        try {
          await logout()
          history.push("/landingpage")
        } catch {
          
        }
      }
    
    
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');

    const radios = [
        { name: 'Home', value: '1' },
        { name: 'Programs', value: '2' },
        { name: 'Practitioners', value: '3' },
    ];

    useEffect(() => {
        if(radioValue == 2){
            console.log("Programs was clicked");
            // history.push("/programsforpatients")
            console.log(props)
            props.onchange(radioValue)
        }else if(radioValue == 3){
            console.log("Practitioners was clicked");
            props.onchange(radioValue)
            // history.push("/practitionersforpatients")
        }else{
            props.onchange(radioValue)
            history.push("/patientHome")
        }
        
    }, [radioValue])

    return (
        <div>
            <container>
                <Row className="mt-3">
                <Col className="text-left ml-4"><img style = {{ height: "70px"}}src= "/images/logo.png" /></Col>
                    <Col className="text-center" xs={6}>
                    <ButtonGroup toggle>
                        {radios.map((radio, idx) => (
                        <ToggleButton
                            key={idx}
                            color="BurlyWood"
                            type="radio"
                            variant="info outline-dark"
                            name="radio"
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={(e) => setRadioValue(e.currentTarget.value)}
                        >
                        {radio.name}
                        </ToggleButton>
                        ))}
                    </ButtonGroup>
                    </Col>
                    <Col className="text-right mr-4"><Button variant="link" onClick={handleLogout}>
                    Log Out
                </Button></Col>
                </Row>
            </container>
        </div>
    )
}
