import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Contact extends Component {
  render() {
    return (
        <div>
          <h2>Contact</h2>
          <NavLink to='/'>Click here to go HomePage </NavLink>
        </div>
    );
  }
}

export default Contact;