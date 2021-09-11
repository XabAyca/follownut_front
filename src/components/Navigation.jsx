import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png'

const Navigation = () => {
  return (
    <div className="navigation d-flex align-items-center justify-content-between px-5">
      <div className="d-flex justify-content-between align-items-center">
        <NavLink exact to="/">
          <img className="logo" src={logo} alt="FollowNut' logo"/>
        </NavLink>
        <div>
          <NavLink exact to="/" activeClassName="nav-active" className="links">Accueil</NavLink>
          <NavLink exact to="/about" activeClassName="nav-active">À propos</NavLink>
          <NavLink exact to="/patient-profile" activeClassName="nav-active">Profil patient</NavLink>
          <NavLink exact to="/nutritionist-profile" activeClassName="nav-active">Profil nutritioniste</NavLink>
        </div>
      </div>
      <div className="connection d-flex justify-content-between">
        <DropdownButton title="S'inscrire">
          <Dropdown.Item>
            <NavLink exact to="/signup-patient" activeClassName="nav-active">Signup Patient</NavLink>
          </Dropdown.Item>
          <Dropdown.Item>
            <NavLink exact to="/signup-nutritionist" activeClassName="nav-active">Signup Nutritionist</NavLink>          
          </Dropdown.Item>
        </DropdownButton>
        <DropdownButton title="Se connecter">
          <Dropdown.Item>
            <NavLink exact to="/login-patient" activeClassName="nav-active">Login Patient</NavLink>
          </Dropdown.Item>
          <Dropdown.Item>
            <NavLink exact to="/login-nutritionist" activeClassName="nav-active">Login Nutritionist</NavLink>
          </Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  );
};



export default Navigation;

