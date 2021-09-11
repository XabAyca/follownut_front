// CONFIG IMPORTS
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// PAGES IMPORTS
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import About from 'pages/About';
import LoginNutritionist from 'pages/LoginNutritionist';
import LoginPatient from 'pages/LoginPatient';
import SignupNutritionist from 'pages/SignupNutritionist';
import SignupPatient from 'pages/SignupPatient';

// COMPONENTS IMPORTS
import Navigation from 'components/Navigation';
import NutritionistProfile from 'pages/NutritionistProfile';
import PatientProfile from 'pages/PatientProfile';
import DashboardPatient from 'pages/DashboardPatient';
import DashboardNutritionist from 'pages/DashboardNutritionist';






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

  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/patient-profile" exact component={PatientProfile} />
          <Route path="/nutritionist-profile" exact component={NutritionistProfile} />
          <Route path="/patient-dashboard" exact component={DashboardPatient} />
          <Route path="/nutritionist-dashboard" exact component={DashboardNutritionist} />
          <Route path="/signup-patient" exact component={SignupPatient} />
          <Route path="/login-patient" exact component={LoginPatient} />
          <Route path="/signup-nutritionist" exact component={SignupNutritionist} />
          <Route path="/login-nutritionist" exact component={LoginNutritionist} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;

// to install bootstrap
// npm install react-bootstrap bootstrap