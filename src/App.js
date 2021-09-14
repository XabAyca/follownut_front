// CONFIG IMPORTS
import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { loginPatientWithCookie, loginNutritionistWithCookie } from 'services/apiManager';
import Cookies from 'js-cookie';

// PAGES IMPORTS
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import About from 'pages/About';
import LoginNutritionist from 'pages/LoginNutritionist';
import LoginPatient from 'pages/LoginPatient';
import SignupNutritionist from 'pages/SignupNutritionist';
import SignupPatient from 'pages/SignupPatient';
import NutritionistProfile from 'pages/NutritionistProfile';
import PatientProfile from 'pages/PatientProfile';
import DashboardPatient from 'pages/DashboardPatient';
import DashboardNutritionist from 'pages/DashboardNutritionist';
import ResetPasswordPatient from 'pages/ResetPasswordPatient';
import ResetPasswordNutritionist from 'pages/ResetPasswordNutritionist';

// COMPONENTS IMPORTS
import Navigation from 'components/Navigation';



const App = () => {
  /////////////////// Web app /////////////////////////////////////////////////////////////
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
    document.querySelector(".install-app").style.opacity = "0";
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
  /////////////////// Web app /////////////////////////////////////////////////////////////


  const loginPatient = useSelector((state) => state.patient.login);
  const registerPatient = useSelector((state) => state.patient.register);
  const loginNutritionist = useSelector((state) => state.nutritionists.login);
  const registerNutritionist = useSelector((state) => state.nutritionists.register);
  const [loading, setLoading] = useState(false);

  
  
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

  return (
    <>
      <BrowserRouter>
        <Navigation
          patientAuth={isPatientAuth()}
          nutritionistAuth={isNutritionistAuth()}
        />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/signup-patient" exact component={SignupPatient} />
          <Route path="/login-patient" exact component={LoginPatient} />
          <Route path="/signup-nutritionist" exact component={SignupNutritionist} />
          <Route path="/login-nutritionist" exact component={LoginNutritionist} />
          <Route path="/patient/dashboard" exact component={DashboardPatient} />
          <Route path="/nutritionist/dashboard" exact component={DashboardNutritionist} />
          <Route path="/nutritionist/dashboard" exact component={DashboardNutritionist} />

          <Route path="/patient-profile">
            {isPatientAuth() ? <PatientProfile /> : <Redirect to="/" />}
          </Route>
          <Route path="/nutritionist-profile">
            {isNutritionistAuth() ? (
              <NutritionistProfile />
            ) : (
              <Redirect to="/" />
            )}
          </Route>

          <Route path="/patient-dashboard">
            {isPatientAuth() ? <DashboardPatient /> : <Redirect to="/" />}
          </Route>
          <Route path="/nutritionist-dashboard">
            {isNutritionistAuth() ? (
              <DashboardNutritionist />
            ) : (
              <Redirect to="/" />
            )}
          </Route>

          <Route path="/signup-patient">
            {isPatientAuth() ? <Redirect to="/" /> : <SignupPatient />}
          </Route>
          <Route path="/login-patient">
            {isPatientAuth() ? <Redirect to="/" /> : <LoginPatient />}
          </Route>

          <Route path="/signup-nutritionist">
            {isNutritionistAuth() ? (
              <Redirect to="/" />
            ) : (
              <SignupNutritionist />
            )}
          </Route>
          <Route path="/login-nutritionist">
            {isNutritionistAuth() ? <Redirect to="/" /> : <LoginNutritionist />}
          </Route>

          <Route component={NotFound} />
          <Route path="/password-reset-nutritionist/:slug" component={ResetPasswordNutritionist} />
          <Route path="/password-reset-patient/:slug" component={ResetPasswordPatient} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
