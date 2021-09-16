// CONFIG IMPORTS
import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { nutritionistLogout, patientLogout } from "services/apiManager";
import Cookies from 'js-cookie';

// ASSETS IMPORTS
import logo from 'assets/images/logo.svg'

const Navigation = ({patientAuth, nutritionistAuth}) => {
  const dispatch = useDispatch();
  const history = useHistory()

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
    <div className="navigation align-items-center justify-content-between">
      <div className="d-flex justify-content-between align-items-center">
        <img
          className="logo"
          onClick={() => history.push("/")}
          src={logo}
          alt="FollowNut' logo"
        />
        <div className="d-flex justify-content-between align-items-center">
          <NavLink
            exact
            to="/"
            activeClassName="nav-active"
            className="nav-link"
          >
            Accueil
          </NavLink>
          {/* <NavLink exact to="/about" activeClassName="nav-active">À propos</NavLink> */}

          {patientAuth && (
            <>
              <NavLink
                exact
                to="/patient-profile"
                className="nav-link"
                activeClassName="nav-active"
              >
                Profil
              </NavLink>
              <NavLink
                exact
                to="/patient-dashboard"
                activeClassName="nav-active"
                className="nav-link"
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
                activeClassName="nav-active"
                className="nav-link"
              >
                Profil
              </NavLink>
              <NavLink
                exact
                to="/nutritionist-dashboard"
                activeClassName="nav-active"
                className="nav-link"
              >
                Tableau de bord
              </NavLink>
            </>
          )}
        </div>
      </div>
      <div>
        {!patientAuth && !nutritionistAuth && (
          <>
            <DropdownButton title="Mon espace">
              <Dropdown.ItemText>S'inscrire</Dropdown.ItemText>
              <Dropdown.Item>
                <Link exact to="/signup-patient">
                  Patient
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link exact to="/signup-nutritionist">
                  Nutritionniste
                </Link>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.ItemText>Se connecter</Dropdown.ItemText>
              <Dropdown.Item>
                <Link exact to="/login-patient">
                  Patient
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link exact to="/login-nutritionist">
                  Nutritionniste
                </Link>
              </Dropdown.Item>
            </DropdownButton>
          </>
        )}

        {(patientAuth || nutritionistAuth) && (
          <p onClick={() => handleLogOut()} className="deconnexion">
            Se déconnecter ➞
          </p>
        )}
      </div>
    </div>
  );
};



export default Navigation;

