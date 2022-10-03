import logo from './logo.svg';
import './App.css';
import React from 'react';
import { connect } from 'react-redux'
import { setData } from './Redux/Action';
import Navbar from './components/Navbar';
import RegistrationForm from './components/RegistrationForm';
import Users from './components/Users';

function App(props) {
 
  return (
    <div className="App">
      <Navbar />
      {/* <input placeholder='first name' name='firstName' type='text' value={formData.firstName} onChange={(e) => handleInputchange(e)}/> */}
      <RegistrationForm />
      <Users />
    </div>
  );
}

export default App;


