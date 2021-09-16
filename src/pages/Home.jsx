import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import CalendlyBtn from 'components/CalendlyBtn';
import React from 'react';
import { Link } from 'react-router-dom';

import SignupNutritionist from 'pages/Auth/SignupNutritionist';

// ASSETS IMPORTS
import appointement from 'assets/images/appointement.png';
import calendar from 'assets/images/online_calendar.png';
import doctors from 'assets/images/doctors.png';
import dashboard from 'assets/images/dashboard.png';
import data from 'assets/images/data.png';
import app from 'assets/images/app.png';
import notebook from 'assets/images/notebook.png';
import article from 'assets/images/article.png';


const Home = () => {
  return (
    <div className="home page-padding"> 
      <section className="section bg-blue d-flex flex-row align-items-center">
        <div className="section1-left">
          <h1 className="text-white">Le meilleur logiciel pour nutritionistes et patients</h1>
          <h4 className="text-secondary-color pt-2 pb-4 text-justify">De la prise de rendez-vous, au suivi des patients, FollowNut offre une solution simple et efficace.</h4>
          <Link to="/signup-nutritionist" className="primary-button btn-lg btn-primary text-white">Je m'inscris gratuitement</Link>
        </div>
        <div className="section1-right">
          <img className="appointement" src={appointement} alt="Calendar illustration"/>
        </div>
      </section>

      <section className="section d-flex flex-row">
        <div className="sub-section d-flex flex-column justify-content-between">
          <div>
            <div className="img-box mb-3">
              <img src={data} alt="Data illustration"/>
            </div>
            <h4>Données sécurisées</h4>
            <p>Avec notre solution basée sur le Web, vos données sont en sécurité et accessibles de n'importe où.</p>
          </div>
          <Link to="/" className="link">
            <span className="margin-right">En savoir plus</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
        <div className="sub-section d-flex flex-column justify-content-between">
          <div>
            <div className="img-box mb-3">
              <img src={doctors} alt="Docs illustration"/>
            </div>
            <h4>Gestion simplifiée</h4>
            <p>Des indicateurs sante developpés en collabiration avec des nutritionistes pour vous permettre un meilleur suivi de vos patients</p>
          </div>
          <Link to="/" className="link">
            <span className="margin-right">En savoir plus</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
        <div className="sub-section d-flex flex-column justify-content-between">
          <div>
            <div className="img-box mb-3">
              <img src={dashboard} alt="Dashboard illustration"/>
            </div>
            <h4>Tableau de bord</h4>
            <p>Tous vos clients au même endroit et gérables en quelques clics sur votre tableau de bord.</p>
          </div>
          <Link to="/" className="link">
            <span className="margin-right">En savoir plus</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </section>
      
      <section className="section bg-blue d-flex flex-row align-items-center">
        <div className="section3-left">
          <img className="calendar" src={calendar} alt="Calendar illustration"/>
        </div>
        <div className="section3-right">
          <h1 className="text-white">Prise de rendez-vous en ligne</h1>
          <h6 className="pt-4 text-justify text-secondary-color">Gagner du temps grâce à notre plateforme de réservation en ligne. Cette fonctionalité permettra à vos patients, nouveaux et actuels, de prendre rendez-vous en un clic.</h6>
          <Link to="/" className="link">
            <span className="margin-right">En savoir plus</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </section>

      <section className="section d-flex flex-row align-items-center">
        <div className="sub-section d-flex flex-column justify-content-between">
          <div>
            <div className="img-box mb-3">
              <img src={notebook} alt="Notebook illustration"/>
            </div>
            <h4>Journal personnel</h4>
            <p>Permettez à vos patients de noter leurs progrès dans un espace dédié, et ainsi faciliter leur suivi.</p>
          </div>
          <Link to="/" className="link">
            <span className="margin-right">En savoir plus</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
        <div className="sub-section d-flex flex-column justify-content-between">
          <div>
            <div className="img-box mb-3">
              <img src={app} alt="Web app illustration"/>
            </div>
            <h4>Application web</h4>
            <p>Une application disponible sur mobile et tablette pour rester en contact avec vos clients.</p>
          </div>
          <Link to="/" className="link">
            <span className="margin-right">En savoir plus</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
        <div className="sub-section d-flex flex-column justify-content-between">
          <div>
            <div className="img-box mb-3">
              <img src={article} alt="Article illustration"/>
            </div>
            <h4>Développer une audience</h4>
            <p>Partagez vos recettes, astuces nutrition, sport et santé afin de pouvoir toucher plus de clients.</p>
          </div>
          <Link to="/" className="link">
            <span className="margin-right">En savoir plus</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;