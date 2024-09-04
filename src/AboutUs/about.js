import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/saitama.jpg';

class Contact extends Component {
  render() {
    return (
        <div>
          <h1>Welcome to About us Page</h1>
          <h1>I am Saitama and I am Awesome !!!</h1>
          <img src={logo} alt="Logo" />
          <br></br>
          <NavLink to='/'>
            <button class="button" type="button">
              Click here to go HomePage 
            </button>
          </NavLink>
        </div>
    );
  }
}

export default Contact;