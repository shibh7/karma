import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import UpdateProfile from "./components/UpdateProfile"
import EditProfile from "./components/EditProfile"
import PrivateRoute from "./components/PrivateRoute"
import ForgotPassword from "./components/ForgotPassword"
import LandingPage from "./components/LandingPage"
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SignupPatient from './components/SignupPatient';
import PractitionerHome from './components/PractitionerHome';
import PatientHome from './components/PatientHome';
import ProgramsForPatients from './components/ProgramsForPatients';
import PractitionersForPatients from './PractitionersForPatients';

const Greetings = () => {
    return(
      <div className = "pregGreetings">
        <p>
          We connect practitioners to clients who want to build a lifestyle wellness plkan and need your help, while helping you increase revenue and client bookings all on a supportive business platform.
        </p>
      </div>
    )
}

const PForm = () => {
  return(
    <div className = "pregForm">
      <div className = "inputFields">
        <label htmlFor="email">Email: </label><br />
        <input id="email" type="text" />
        <br />
        <label htmlFor="firstName">First Name: </label><br />
        <input id="firstName" type="text" />
        <br />
        <label htmlFor="lastName">Last Name: </label><br />
        <input id="lastName" type="text" />
        <br />
        <label htmlFor="business">Business: </label><br />
        <input id="Business" type="text" />
      </div>
      <br /><br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel lectus ut tellus ultricies condimentum at nec elit. Integer sed finibus neque. Aliquam quis fermentum risus, sit amet commodo odio. Maecenas tempor erat et purus imperdiet, laoreet interdum sem placerat. Morbi accumsan luctus urna rutrum rutrum. Nunc vel euismod velit.
      </p>
      <label>
            <input
              type="radio"
              value="agree"
            />
            I agree
          </label>
          <br />
        <button className="btn btn-default" type="submit">
          Submit
        </button>
    </div>
  )
} 

const Advert = () => {
  return(
    <div className = "pregAdvert">
      <p>Advertising content</p>
    </div>
  )
}

const Logo = () => {
  return(
    <div>
      <p>Karma Well App</p>
    </div>
  )
}

const PageTitle = () => {
  return(
    <div className = "pregTitle">
      <p>Sign up as practitioner</p>
    </div>
  )
}

function App() {

  return (
    <div>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={LandingPage} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <Route path="/Signup" component={Signup} />
            <Route path="/SignupPatient" component={SignupPatient} />
            <Route path="/login" component={Login} />
            <Route path="/landingpage" component={LandingPage} />
            <PrivateRoute path="/editProfile" component={EditProfile} />
            <PrivateRoute path="/practitionerHome" component={PractitionerHome} />
            <PrivateRoute path="/patientHome" component={PatientHome} />
            <PrivateRoute path="/programsforpatients" component={ProgramsForPatients} />
            <PrivateRoute path="/practitionersforpatients" component={PractitionersForPatients} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
  
     
};

export default App;
