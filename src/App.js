// CONFIG IMPORTS
import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { loginPatientWithCookie, loginNutritionistWithCookie, patientFetch, nutritionistFetch } from 'services/apiManager';
import Cookies from 'js-cookie';
import { Pwa } from "components/context/InstallPwa";


// PAGES IMPORTS
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import About from 'pages/About';
import LoginNutritionist from 'pages/Auth/LoginNutritionist';
import LoginPatient from 'pages/Auth/LoginPatient';
import SignupNutritionist from 'pages/Auth/SignupNutritionist';
import SignupPatient from 'pages/Auth/SignupPatient';
import NutritionistProfile from 'pages/NutritionistProfile';
import PatientProfile from 'pages/PatientProfile';
import DashboardPatient from 'pages/DashboardPatient';
import DashboardNutritionist from 'pages/DashboardNutritionist';
import ResetPasswordPatient from 'pages/Auth/ResetPasswordPatient';
import ResetPasswordNutritionist from 'pages/Auth/ResetPasswordNutritionist';
import ForgottenPasswordNutritionist from 'pages/Auth/ForgottenPasswordNutritionist';
import ForgottenPasswordPatient from 'pages/Auth/ForgottenPasswordPatient';
import DashboardNutritionistPatients from 'pages/DashboardNutritionistPatients';
import DashboardNutritionistAppointments from 'pages/DashboardNutritionistAppointments';
import PatientEditProfile from 'pages/PatientEditProfile';
import NutritionistEditProfile from 'pages/NutritionistEditProfile';
import DashboardPatientAptsList from 'pages/DashboardPatientAptsList';
import Cgu from 'pages/Cgu';
import ExampleDashboard from 'pages/ExampleDashboard';
import DashboardNutritionistCreatePatient from 'pages/DashboardNutritionistCreatePatient';
import LogbookPatient from 'pages/LogbookPatient';
import ArticleNutritionist from 'pages/ArticleNutritionist';
import Articles from 'pages/Articles';
import Article from 'pages/Article';
import Logbooks from 'pages/Logbooks';
import Nutritionists from 'pages/Nutritionists';

// COMPONENTS IMPORTS
import Navigation from 'components/Navigation';
import HamburgerMenu from 'components/HamburgerMenu';
import Footer from 'components/Footer';
import ScrollTop from 'components/ScrollTop';
import CookiesConsent from 'components/CookiesConsent';
import DarkMode from 'components/context/darkMode';
import DarkModeBtn from 'components/DarkModeBTN';
import UncompletedPatientModal from 'components/UncompletedPatientModal';
import UncompletedNutritionistModal from 'components/UncompletedNutritionistModal';


const App = () => {

// ------------------------- Web app start -------------------------
  //Before install PWA
  let deferredPrompt;
  window.addEventListener("beforeinstallprompt", (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;

    // Optionally, send analytics event that PWA install promo was shown.
    console.log(`'beforeinstallprompt' event was fired.`);
  });

  //View install PWA
  const installBtn = async () => {
    // Hide the app provided install promotion
    document.querySelector(".pwa-modal").style.opacity = "0";
    document.querySelector(".pwa-modal").style.opacity = "0";
    // Show the install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    // Optionally, send analytics event with outcome of user choice
    console.log(`User response to the install prompt: ${outcome}`);
    // We've used the prompt, and can't use it again, throw it away
    getPWADisplayMode();
  };

  const getPWADisplayMode = () => {
    const isStandalone = window.matchMedia(
      "(display-mode: standalone)"
    ).matches;
    if (document.referrer.startsWith("android-app://")) {
      return "twa";
    } else if (navigator.standalone || isStandalone) {
      return "standalone";
    }
    return "browser";
  };

  window
    .matchMedia("(display-mode: standalone)")
    .addEventListener("change", (evt) => {
      let displayMode = "browser";
      if (evt.matches) {
        displayMode = "standalone";
      }
      // Log display mode change to analytics
      console.log("DISPLAY_MODE_CHANGED", displayMode);
    });
// ------------------------- Web app end -------------------------

  const dispatch = useDispatch()
  const loginPatient = useSelector((state) => state.patient.login);
  const registerPatient = useSelector((state) => state.patient.register);
  const loginNutritionist = useSelector((state) => state.nutritionists.login);
  const registerNutritionist = useSelector((state) => state.nutritionists.register);
  const currentPatient = useSelector((state) => state.patient.currentPatient);
  const updPatient = useSelector((state) => state.patient.patientUpd);
  const updNutritionist = useSelector((state) => state.nutritionists.nutritionistUpd);
  const currentNutritionist = useSelector((state) => state.nutritionists.currentNutritionist);
  const [loading, setLoading] = useState(false);
  const [isDark, setIsDark] = useState(false);
  
  useEffect(() => {
    checkPatientAuth().then(res => {
      setLoading(true);
    });
    checkNutritionistAuth().then(res => {
      setLoading(true);
    });
  }, []);

  const checkPatientAuth = async () => {
    return await (loginPatientWithCookie());
  }

  const checkNutritionistAuth = async () => {
    return await (loginNutritionistWithCookie());
  }
  

  const isPatientAuth = () => {
    return (
      registerPatient === '' &&
        loginPatient === '' &&
        Cookies.get('patient_token_cookie') === undefined ? false : true)
  };

  const isNutritionistAuth = () => {
    return (
      registerNutritionist === '' &&
        loginNutritionist === '' &&
        Cookies.get('nutritionist_token_cookie') === undefined ? false : true)
  };

  useEffect(() => {
    dispatch(patientFetch())
    dispatch(nutritionistFetch())
    const temp = JSON.parse(localStorage.getItem("themePreference"));
    if (temp !== undefined && temp !== null) {
      setIsDark(temp);
    }
    else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setIsDark(true);
    }
  }, [updPatient, updNutritionist]);
  
  useEffect(() => {
    if (isDark) {
      const body = document.querySelector("#root");
      body.classList.add("dark-mode");
    }
  }, [isDark]);

  const toogleMode = () => {
    const body = document.querySelector("#root");
    body.classList.toggle("dark-mode");
    localStorage.setItem("themePreference", String(!isDark));
    setIsDark(!isDark);
  };

  return (
    <>

    { currentPatient != "" ?
        currentPatient.first_name != undefined &&
        currentPatient.last_name != undefined &&
        currentPatient.date_of_birth != undefined &&
        currentPatient.nutritionist_id != undefined ?
          null : <UncompletedPatientModal /> : null
    }

    { currentNutritionist != "" ?
        currentNutritionist.first_name != undefined &&
        currentNutritionist.last_name != undefined &&
        currentNutritionist.slug_calendly != undefined &&
        currentNutritionist.phone_number != undefined ?
          null : <UncompletedNutritionistModal /> : null
    }

      <BrowserRouter>
        <DarkMode.Provider
        value={{
          isDark,
          toogleMode: toogleMode
        }}
        >
        <ScrollTop/>
        <Pwa.Provider value={installBtn}>
          <Navigation
            patientAuth={isPatientAuth()}
            nutritionistAuth={isNutritionistAuth()}
          />
          <HamburgerMenu
            patientAuth={isPatientAuth()}
            nutritionistAuth={isNutritionistAuth()}
            />
          <DarkModeBtn/>
          <Switch>
            <Route exact path="/signup-nutritionist">
              {isNutritionistAuth() ? (
                <Redirect to="/nutritionist-dashboard" />
              ) : (
                <SignupNutritionist />
              )}
            </Route>

            <Route path="/patient-edit-profile">
              {isPatientAuth() ? <PatientEditProfile /> : <Redirect to="/" />}
            </Route>

            <Route path="/nutritionist-profile">
              {isNutritionistAuth() ? (
                <NutritionistProfile />
              ) : (
                <Redirect to="/" />
              )}
            </Route>
            <Route path="/nutritionist-edit-profile">
              {isNutritionistAuth() ? (
                <NutritionistEditProfile />
              ) : (
                <Redirect to="/" />
              )}
            </Route>

            <Route exact path="/login-nutritionist">
              {isNutritionistAuth() ? (
                <Redirect to="/nutritionist-dashboard" />
              ) : (
                <LoginNutritionist />
              )}
            </Route>
            <Route exact path="/nutritionist/forgotten-password">
              {isNutritionistAuth() ? (
                <Redirect to="/nutritionist-dashboard" />
              ) : (
                <ForgottenPasswordNutritionist />
              )}
            </Route>
            <Route exact path="/password-reset-nutritionist/:tokenSlug">
              {isNutritionistAuth() ? (
                <Redirect to="/nutritionist-dashboard" />
              ) : (
                <ResetPasswordNutritionist />
              )}
            </Route>
            <Route exact path="/nutritionist-profile">
              {isNutritionistAuth() ? (
                <NutritionistProfile />
              ) : (
                <Redirect to="/" />
              )}
            </Route>
            <Route exact path="/nutritionist-dashboard">
              {isNutritionistAuth() ? (
                <DashboardNutritionist />
              ) : (
                <Redirect to="/" />
              )}
            </Route>
            <Route exact path="/nutritionist-dashboard/patients">
              {isNutritionistAuth() ? (
                <DashboardNutritionistPatients />
              ) : (
                <Redirect to="/" />
              )}
            </Route>
            <Route exact path="/nutritionist-dashboard/appointments">
              {isNutritionistAuth() ? (
                <DashboardNutritionistAppointments />
              ) : (
                <Redirect to="/" />
              )}
            </Route>
            <Route exact path="/nutritionist-dashboard/create-patient">
              {isNutritionistAuth() ? (
                <DashboardNutritionistCreatePatient />
              ) : (
                <Redirect to="/" />
              )}
            </Route>
            <Route exact path="/nutritionist-article">
              {isNutritionistAuth() ? (
                <ArticleNutritionist />
              ) : (
                <Redirect to="/" />
              )}
            </Route>
            <Route exact path="/logbooks">
              {isNutritionistAuth() ? (
                <Logbooks />
              ) : (
                <Redirect to="/" />
              )}
            </Route>


            <Route exact path="/signup-patient">
              {isPatientAuth() ? (
                <Redirect to="/patient-dashboard" />
              ) : (
                <SignupPatient />
              )}
            </Route>
            <Route exact path="/login-patient">
              {isPatientAuth() ? (
                <Redirect to="/patient-dashboard" />
              ) : (
                <LoginPatient />
              )}
            </Route>
            <Route exact path="/patient/forgotten-password">
              {isPatientAuth() ? (
                <Redirect to="/patient-dashboard" />
              ) : (
                <ForgottenPasswordPatient />
              )}
            </Route>
            <Route exact path="/password-reset-patient/:tokenSlug">
              {isPatientAuth() ? (
                <Redirect to="/patient-dashboard" />
              ) : (
                <ResetPasswordPatient />
              )}
            </Route>
            <Route exact path="/patient-profile">
              {isPatientAuth() ? <PatientProfile /> : <Redirect to="/" />}
            </Route>
            <Route exact path="/patient-dashboard">
              {isPatientAuth() ? <DashboardPatient /> : <Redirect to="/" />}
            </Route>
            <Route exact path="/patient-appointment-reports">
              {isPatientAuth() ? (
                <DashboardPatientAptsList />
              ) : (
                <Redirect to="/" />
              )}
            </Route>
            <Route exact path="/patient-logbook">
              {isPatientAuth() ? (
                <LogbookPatient />
              ) : (
                <Redirect to="/" />
              )}
            </Route>
            <Route exact path="/exemple/tableau-de-bord" component={ExampleDashboard} />
            <Route exact path="/about" component={About} />
            <Route exact path="/cgu" component={Cgu} />
            <Route exact path="/article/:slug" component={Article} /> 
            <Route exact path="/articles" component={Articles} />
            <Route exact path="/nutritionists" component={Nutritionists} />
            <Route exact path="/nutritionists/:slug" component={Nutritionists} />
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
          <CookiesConsent/>
        </Pwa.Provider>
        </DarkMode.Provider>
      </BrowserRouter>

    </>
  );
};

export default App;
