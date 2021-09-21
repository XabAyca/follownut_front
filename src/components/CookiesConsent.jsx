import React from 'react';
import CookieConsent from 'react-cookie-consent';

const CookiesConsent = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Compris !"
      cookieName="consentCookies"
      style={{
        background: "#8186FE",
        trasitions: "all .5s",
        fontSize: "18px",
        color: '#212529',
      }}
      buttonStyle={{ color: '#212529', fontSize: "15px", borderRadius:'5px', backgroundColor: "#F5D01F" }}
      expires={150}
    >
      <i className="fas fa-cookie-bite"></i> Ce site utilise des cookies pour améliorer l'expérience utilisateur.{" "}
    </CookieConsent>
  );
};

export default CookiesConsent;