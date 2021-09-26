// CONFIG IMPORTS
import { useContext} from 'react';
import { Link } from 'react-router-dom';
import DarkMode from '../components/context/darkMode';
import Cookies from 'js-cookie';

// COMPONENTS IMPORTS
import PwaModal from 'components/PwaModal';

// ASSETS IMPORTS
import appointment from 'assets/images/appointment.svg';
import appointment_dark from 'assets/images/appointment_dark.svg';
import calendar from 'assets/images/online_calendar.svg';
import calendar_dark from 'assets/images/online_calendar_dark.svg';
import doctors from 'assets/images/doctors.svg';
import dashboard from 'assets/images/dashboard.svg';
import dashboard_dark from 'assets/images/dashboard_dark.svg';
import data from 'assets/images/data.svg';
import data_dark from 'assets/images/data_dark.svg';
import app from 'assets/images/app.svg';
import app_dark from 'assets/images/app_dark.svg';
import notebook from 'assets/images/notebook.svg';
import notebook_dark from 'assets/images/notebook_dark.svg';
import article from 'assets/images/article.svg';
import article_dark from 'assets/images/article_dark.svg';
import doctors_dark from 'assets/images/doctors_dark.svg';


const Home = () => {
  const { isDark } = useContext(DarkMode);

  return (
    <div className="home">
      <div className="home page-padding">
        {!window.matchMedia("(display-mode: standalone)").matches && <PwaModal />}
        <section className="section bg-blue align-items-center">
          <div className="section1-left content-center">
            <h1 className="text-white-color">
              Le suivi parfait entre patient et nutritioniste
            </h1>
            <h5 className="text-white-color pt-2 pb-4 text-justify">
              De la prise de rendez-vous, au suivi des patients, FollowNut offre
              une solution gratuite, simple et efficace. Inscrivez-vous !
            </h5>
              {Cookies.get("patient_token_cookie") === undefined && 
              Cookies.get("nutritionist_token_cookie") === undefined &&
              <div className="d-flex justify-content-between col-sm-12 col-md-8 col-lg-12 col-xl-8">
                <div className="d-flex mx-1">
                  <Link to="/signup-nutritionist" className="btn-lg primary-button">
                    Je suis un nutritioniste
                  </Link>
                </div>
                <div className="d-flex mx-1">
                  <Link to="/signup-patient" className="btn-lg primary-button">
                    Je suis un patient
                  </Link>
                </div>
              </div>}
          </div>
          <div className="section1-right p-5">
            <img
              className="appointement"
              src={isDark ? appointment_dark : appointment}
              alt="Appointment illustration"
            />
          </div>
        </section>

        <section className="section">
          <div className="sub-section d-flex flex-column justify-content-between">
            <div>
              <div className="img-box mb-3">
                <img src={isDark?data_dark:data} alt="Data illustration" />
              </div>
              <h4>Données sécurisées</h4>
              <p>
                Avec notre solution basée sur le Web, vos données sont en sécurité
                et accessibles de n'importe où.
              </p>
            </div>
          </div>
          <div className="sub-section d-flex flex-column justify-content-between">
            <div>
              <div className="img-box mb-3">
                <img src={isDark?doctors_dark:doctors} alt="Docs illustration" />
              </div>
              <h4>Gestion simplifiée</h4>
              <p>
                Des indicateurs developpés en collaboration avec des
                nutritionistes pour un suivi de santé optimal.
              </p>
            </div>
          </div>
          <div className="sub-section d-flex flex-column justify-content-between">
            <div>
              <div className="img-box mb-3">
                <img className="calendar" src={isDark?calendar_dark:calendar} alt="Calendar illustration"/>
              </div>
              <h4>Prise de rendez-vous</h4>
              <p>
              Une gestion des rendez-vous directement intégrée à FollowNut pour plus de facilité.
              </p>
            </div>
          </div>
        </section>

        <section className="section bg-blue align-items-center p-5">
          <div className="section3-left">
            <img className="img-container" src={isDark ? dashboard_dark : dashboard} alt="Dashboard illustration" />
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

        <section className="section align-items-center my-3">
          <div className="sub-section d-flex flex-column justify-content-between">
            <div>
              <div className="img-box mb-3">
                <img src={isDark?notebook_dark:notebook} alt="Notebook illustration" />
              </div>
              <h4>Journal personnel</h4>
              <p>
                Un bloc note à portée de main permettre aux patients de noter leurs menus et activités sportives.
              </p>
            </div>
          </div>
          <div className="sub-section d-flex flex-column justify-content-between my-3">
            <div>
              <div className="img-box mb-3">
                <img src={isDark?app_dark:app} alt="Web app illustration" />
              </div>
              <h4>Application web</h4>
              <p>
                Une application disponible sur mobile et tablette pour rester en
                contact aussi facilement que possible.
              </p>
            </div>
          </div>
          <div className="sub-section d-flex flex-column justify-content-between my-3">
            <div>
              <div className="img-box mb-3">
                <img src={isDark?article_dark:article} alt="Article illustration" />
              </div>
              <h4>Construire une communauté</h4>
              <p>
                Chaque nutritioniste peut partager ses astuces, recettes et conseils avec la communauté FollowNut
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;