import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png'

const Navigation = () => {
  return (
    <div className="navigation">
      <img className="logo" src={logo} alt="FollowNut' logo"/>
      <NavLink exact to="/" activeClassName="nav-active">Home</NavLink>
      <NavLink exact to="/about" activeClassName="nav-active">About</NavLink>
      <NavLink exact to="/signup-patient" activeClassName="nav-active">Signup Patient</NavLink>
      <NavLink exact to="/login-patient" activeClassName="nav-active">Login Patient</NavLink>
      <NavLink exact to="/signup-nutritionist" activeClassName="nav-active">Signup Nutritionist</NavLink>
      <NavLink exact to="/login-nutritionist" activeClassName="nav-active">Login Nutritionist</NavLink>
    </div>
  );
};

export default Navigation;

