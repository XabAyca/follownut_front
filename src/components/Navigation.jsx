// CONFIG IMPORTS
import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { nutritionistLogout, patientLogout } from "services/apiManager";
import Cookies from 'js-cookie';

// ASSETS IMPORTS
import logo from 'assets/images/logo.png'

const Navigation = ({patientAuth, nutritionistAuth}) => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    Cookies.remove('patient_token_cookie');
    Cookies.remove("patient_id_cookie");
    Cookies.remove('nutritionist_token_cookie');
    Cookies.remove("nutritionist_id_cookie");
    dispatch(nutritionistLogout());
    dispatch(patientLogout());
    window.location.reload();
  }

  return (
    <div className="navigation d-flex align-items-center justify-content-between px-5">
      <div className="d-flex justify-content-between align-items-center">
        <NavLink exact to="/">
          <img className="logo" src={logo} alt="FollowNut' logo"/>
        </NavLink>
        <div>
          <NavLink exact to="/" activeClassName="nav-active" className="links">Accueil</NavLink>
          {/* <NavLink exact to="/about" activeClassName="nav-active">À propos</NavLink> */}


          {patientAuth && (
            <>
              <NavLink exact to="/patient-profile" activeClassName="nav-active">Profil</NavLink>
              <NavLink exact to="/patient-dashboard" activeClassName="nav-active">Tableau de bord</NavLink>
            </>
          )}


          {nutritionistAuth && (
            <>
              <NavLink exact to="/nutritionist-profile" activeClassName="nav-active">Profil</NavLink>
              <NavLink exact to="/nutritionist-dashboard" activeClassName="nav-active">Tableau de bord</NavLink>
            </>
          )}
        </div>
      </div>

      <div className="connection d-flex justify-content-between">
        {!patientAuth && !nutritionistAuth && (
          <>
            <DropdownButton title="S'inscrire">
              <Dropdown.Item>
                <NavLink exact to="/signup-patient" activeClassName="nav-active">Patient</NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink exact to="/signup-nutritionist" activeClassName="nav-active">Nutritionist</NavLink>          
              </Dropdown.Item>
            </DropdownButton>
            <DropdownButton title="Se connecter">
              <Dropdown.Item>
                <NavLink exact to="/login-patient" activeClassName="nav-active">Patient</NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink exact to="/login-nutritionist" activeClassName="nav-active">Nutritionist</NavLink>
              </Dropdown.Item>
            </DropdownButton>
          </>
        )}

        {(patientAuth || nutritionistAuth) && (
          <button onClick={() => handleLogOut()} className="btn btn-danger mx-2">Se déconnecter</button>
         )}
      </div>

    </div>
  );
};



export default Navigation;

