import React, { Component } from "react";
import logo from '../assets/saitama.jpg';
import { NavLink } from 'react-router-dom';

class MyComponent extends Component {
  render() {
    return (
    <div>
      <h1>Awesome!!!</h1>
      <h1>Welcome to Dashboard HomePage</h1>
      <NavLink to='/about'>
        <button type="button" class="button">
          Click here to go About us 
        </button>
      </NavLink>
    </div>
    );
  }
}
export default MyComponent;