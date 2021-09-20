import Cookies from 'js-cookie';
import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { patientLogout } from 'services/apiManager';
import { nutritionistLogout } from 'services/apiManager';


const HamburgerMenu = ({ patientAuth, nutritionistAuth }) => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    Cookies.remove("patient_token_cookie");
    Cookies.remove("patient_id_cookie");
    Cookies.remove("nutritionist_token_cookie");
    Cookies.remove("nutritionist_id_cookie");
    dispatch(nutritionistLogout());
    dispatch(patientLogout());
    window.location.reload();
  };

  const handleMenu = () => {
    document.querySelector(".span1").classList.toggle("clicked");
    document.querySelector(".span2").classList.toggle("clicked");
    document.querySelector(".span3").classList.toggle("clicked");
    document.querySelector(".menu").classList.toggle("clicked");
  };

  return (
    <>
      <div className="hamburger-box" onClick={handleMenu}>
        <span className="span1"></span>
        <span className="span2"></span>
        <span className="span3"></span>
      </div>
      <div className="menu">
        <NavLink
          exact
          to="/"
          className="menu-link"
          activeClassName="nav-active"
          onClick={handleMenu}
        >
          Accueil
        </NavLink>
        {patientAuth && (
          <>
            <NavLink
              exact
              to="/patient-profile"
              className="menu-link"
              activeClassName="nav-active"
              onClick={handleMenu}
            >
              Profil
            </NavLink>

            <NavLink
              exact
              to="/patient-dashboard"
              className="menu-link"
              onClick={handleMenu}
            >
              Tableau de bord
            </NavLink>
          </>
        )}
        {nutritionistAuth && (
          <>
            <NavLink
              exact
              to="/nutritionist-profile"
              className="menu-link"
              activeClassName="nav-active"
              onClick={handleMenu}
            >
              Profil
            </NavLink>

            <NavLink
              exact
              to="/nutritionist-dashboard"
              className="menu-link"
              onClick={handleMenu}
            >
              Tableau de bord
            </NavLink>
          </>
        )}
        {!patientAuth && !nutritionistAuth && (
          <>
            <p>S'inscrire</p>
            <NavLink
              exact
              to="/signup-patient"
              className="menu-link"
              activeClassName="nav-active"
              onClick={handleMenu}
            >
              Patient
            </NavLink>

            <NavLink
              exact
              to="/signup-nutritionist"
              className="menu-link"
              onClick={handleMenu}
            >
              Nutritionniste
            </NavLink>
            <p>Se connecter</p>
            <NavLink
              exact
              to="/login-patient"
              className="menu-link"
              activeClassName="nav-active"
              onClick={handleMenu}
            >
              Patient
            </NavLink>

            <NavLink
              exact
              to="/login-nutritionist"
              className="menu-link"
              onClick={handleMenu}
            >
              Nutritionniste
            </NavLink>
          </>
        )}
        {(patientAuth || nutritionistAuth) && (
          <p onClick={() => {
            handleLogOut()
            handleMenu()
          }} className="deconnexion">
            Se déconnecter ➞
          </p>
        )}
      </div>
    </>
  );
};


export default HamburgerMenu;