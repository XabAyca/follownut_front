import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found page-padding">
      <h1 className="title-not-found">Oups! Erreur 404</h1>
      <h3>Désolé mais la page que vous recherchez n'existe pas...</h3>
      <div className="div-not-found">
        <Link to ='/'> <button className="btn secondary-button my-4">
            Retour à l'accueil
          </button></Link>
      </div>
    </div>
  );
};

export default NotFound;