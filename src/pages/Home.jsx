import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {React, useContext} from 'react';
import { Link } from 'react-router-dom';
import DarkMode from '../components/context/darkMode';
import { useParams } from 'react-router-dom';

// ASSETS IMPORTS
import appointement from 'assets/images/appointement.png';
import calendar from 'assets/images/online_calendar.png';
import doctors from 'assets/images/doctors.png';
import dashboard from 'assets/images/dashboard.png';
import data from 'assets/images/data.png';
import app from 'assets/images/app.png';
import notebook from 'assets/images/notebook.png';
import article from 'assets/images/article.png';
import PwaModal from 'components/PwaModal';
import Cookies from 'js-cookie';

const Home = () => {
  const { isDark } = useContext(DarkMode);

  return (
    <div className="home dark">
      <div className="home page-padding">
        {!window.matchMedia("(display-mode: standalone)").matches && <PwaModal />}
        <section className="section bg-blue align-items-center">
          <div className="section1-left">
            <h1 className="text-white-color">
              Le suivi parfait entre patient et nutritioniste
            </h1>
            <h5 className="text-white-color pt-2 pb-4 text-justify">
              De la prise de rendez-vous, au suivi des patients, FollowNut offre
              une solution gratuite, simple et efficace. Inscrivez-vous !
            </h5>
              {Cookies.get("patient_token_cookie") === undefined && 
              Cookies.get("nutritionist_token_cookie") === undefined &&
              <div className="d-flex row div-btn-home-responsive">
                <div className=" my-2 d-flex col-sm-12 col-md-12 col-lg-12 col-xl-6">
                  <Link to="/signup-nutritionist" className="px-5 primary-button btn-lg">
                    Je suis un nutritioniste
                  </Link>
                </div>
                <div className=" my-2 d-flex col-sm-12 col-md-12 col-lg-12 col-xl-6">
                  <Link to="/signup-patient" className="px-5 primary-button btn-lg">
                    Je suis un patient
                  </Link>
                </div>
              </div>}
          </div>
          <div className="section1-right">
            <img
              className="appointement"
              src={appointement}
              alt="Calendar illustration"
            />
          </div>
        </section>

        <section className="section">
          <div className="sub-section d-flex flex-column justify-content-between">
            <div>
              <div className="img-box mb-3">
                <img src={data} alt="Data illustration" />
              </div>
              <h4>Données sécurisées</h4>
              <p>
                Avec notre solution basée sur le Web, vos données sont en sécurité
                et accessibles de n'importe où.
              </p>
            </div>
            {/* <Link to="/" className="link">
              <span>En savoir plus</span>
              <FontAwesomeIcon icon={faArrowRight} className="mx-2" />
            </Link> */}
          </div>
          <div className="sub-section d-flex flex-column justify-content-between">
            <div>
              <div className="img-box mb-3">
                <img src={doctors} alt="Docs illustration" />
              </div>
              <h4>Gestion simplifiée</h4>
              <p>
                Des indicateurs developpés en collaboration avec des
                nutritionistes pour un suivi de santé optimal.
              </p>
            </div>
            {/* <Link to="/" className="link">
              <span>En savoir plus</span>
              <FontAwesomeIcon icon={faArrowRight} className="mx-2" />
            </Link> */}
          </div>
          <div className="sub-section d-flex flex-column justify-content-between">
            <div>
              <div className="img-box mb-3">
                <img className="calendar" src={calendar} alt="Calendar illustration"/>
              </div>
              <h4>Prise de rendez-vous</h4>
              <p>
              Une gestion des rendez-vous directement intégrée à FollowNut pour plus de facilité.
              </p>
            </div>
            {/* <Link to="/" className="link">
              <span>En savoir plus</span>
              <FontAwesomeIcon icon={faArrowRight} className="mx-2" />
            </Link> */}
          </div>
        </section>

        <section className="section bg-blue align-items-center">
          <div className="section3-left">
            <img className="img-container" src={dashboard} alt="Dashboard illustration" />
          </div>
          <div className="section3-right">
            <h2 className="text-white-color">Tableau de bord</h2>
            <h6 className="my-3 text-justified text-white-color">
              Des graphiques pour suivre les constantes de vos patients,
              un bloc-notes pour rédiger puis partager les compte-rendu de rendez-vous avec vos patients,
              un journal où rédiger des articles pour valoriser votre expertise aurpès de vos patients et bien plus encore ...
            </h6>
            <Link to="/exemple/tableau-de-bord" className=" my-3 primary-button btn-sm">
              Découvrir
            </Link>
          </div>
        </section>

        <section className="section align-items-center">
          <div className="sub-section d-flex flex-column justify-content-between">
            <div>
              <div className="img-box mb-3">
                <img src={notebook} alt="Notebook illustration" />
              </div>
              <h4>Journal personnel</h4>
              <p>
                Un bloc note à portée de main permettre aux patients de noter leurs menus et activités sportives.
              </p>
            </div>
            {/* <Link to="/" className="link">
              <span>En savoir plus</span>
              <FontAwesomeIcon icon={faArrowRight} className="mx-2" />
            </Link> */}
          </div>
          <div className="sub-section d-flex flex-column justify-content-between">
            <div>
              <div className="img-box mb-3">
                <img src={app} alt="Web app illustration" />
              </div>
              <h4>Application web</h4>
              <p>
                Une application disponible sur mobile et tablette pour rester en
                contact aussi facilement que possible.
              </p>
            </div>
            {/* <Link to="/" className="link">
              <span>En savoir plus</span>
              <FontAwesomeIcon icon={faArrowRight} className="mx-2" />
            </Link> */}
          </div>
          <div className="sub-section d-flex flex-column justify-content-between">
            <div>
              <div className="img-box mb-3">
                <img src={article} alt="Article illustration" />
              </div>
              <h4>Construire une communauté</h4>
              <p>
                Chaque nutritioniste peut partager ses astuces, recettes et conseils avec la communauté FollowNut
              </p>
            </div>
            {/* <Link to="/" className="link">
              <span>En savoir plus</span>
              <FontAwesomeIcon icon={faArrowRight} className="mx-2" />
            </Link> */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;