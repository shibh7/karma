import React, { useState, useEffect } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function PractitionerHome() {

    const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/landingpage")
    } catch {
      setError("Failed to log out")
    }
  }

  useEffect(() => {
      
  }, [])

    return (
        <div>
            <h2>
                Welcome to practitioner's home
            </h2> 
            <Button variant="link" onClick={handleLogout}>
                Log Out
            </Button>
        </div>
    )
}
