import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1 className="title-not-found">Erreur 404</h1>
      <div className="div-not-found">
        <h3>Désolé mais la page que vous cherchez n'existe pas...</h3>
        <Link to ='/'> <button className="d-flex justify-content-center mt-2 btn secondary-button w-50">
            Retour l'accueil
          </button></Link>
      </div>
    </div>
  );
};

export default NotFound;