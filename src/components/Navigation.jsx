// CONFIG IMPORTS
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';

// SERICES IMPORTS
import { nutritionistLogout, patientLogout } from "services/apiManager";

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
          <NavLink
            exact
            to="/articles"
            activeClassName="nav-active"
            className="nav-link"
          >
            Articles
          </NavLink>
          <NavLink
            exact
            to="/nutritionists"
            activeClassName="nav-active"
            className="nav-link"
          >
            Nutritionnistes
          </NavLink>
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
      <div className="d-flex">
        {!patientAuth && !nutritionistAuth && (
          <>
            <DropdownButton title="Mon espace">
              <Dropdown.ItemText>S'inscrire</Dropdown.ItemText>
              <Dropdown.Item as={Link} to="/signup-patient">
                Patient
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/signup-nutritionist">
                Nutritionniste
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.ItemText>Se connecter</Dropdown.ItemText>
              <Dropdown.Item as={Link} to="/login-patient">
                Patient
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/login-nutritionist">
                Nutritionniste
              </Dropdown.Item>
            </DropdownButton>
          </>
        )}

        {(patientAuth || nutritionistAuth) && (
          <p onClick={() => handleLogOut()} className="deconnexion align-self-center">
            Se déconnecter ➞
          </p>
        )}
      </div>
    </div>
  );
};



export default Navigation;

