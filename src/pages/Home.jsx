import CalendlyBtn from 'components/CalendlyBtn';
import React from 'react';
import { Link } from 'react-router-dom';
import SignupNutritionist from './SignupNutritionist';



const Home = () => {
  return (
    <div className="home"> 
      <section className="section bg-blue d-flex flex-row align-items-center">
        <div className="section1-left">
          <h1 className="text-white">Le meilleur logiciel pour nutritionistes et patients</h1>
          <h4 className="text-secondary-color pt-2 pb-4 text-justify">De la prise de rendez-vous, au suivi des patients, FollowNut offre une solution simple et efficace</h4>
          <Link to="/signup-nutritionist" className="primary-button btn-lg btn-primary text-white">Je m'inscris gratuitement</Link>
          {/* <button onClick={() => <SignupNutritionist />} className="primary-button btn-lg btn-primary text-white">Je m'inscris gratuitement</button> */}
        </div>
        <div className="section1-right">
          <h1>Illustartion here</h1>
        </div>
      </section>
      <section className="section d-flex flex-row align-items-center">
        <div className="section2-left">
          <h1>Drawing here</h1>
        </div>
        <div className="section2-right">
        <h1>Prise de rendez-vous en ligne</h1>
        <h6 className="pt-4 text-justify">Gagner du temps grâce à notre plateforme de réservation en ligne. Cette fonctionalité permettra à vos patients, nouveaux et actuels, de prendre rendez-vous en un clic.</h6>
        </div>
      </section>
      <section className="section bg-blue d-flex flex-row align-items-center">
        <div className="sub-section">
          <h4 className="text-white">Données sécurisées</h4>
          <p className="text-secondary-color">Avec notre solution basée sur le Web, vos données sont en sécurité et accessibles de n'importe où.</p>
        </div>
        <div className="sub-section">
          <h4 className="text-white">Gestion simplifiée</h4>
          <p className="text-secondary-color">Des indicateurs sante developpés en collabiration avec des nutritionistes pour vous permettre un meilleur suivi de vos patients</p>
        </div>
        <div className="sub-section">
          <h4 className="text-white">Développer une audience</h4>
          <p className="text-secondary-color">Partagez vos recettes, astuces nutrition, sport et santé afin de pouvoir toucher plus de clients</p>
        </div>
      </section>
      <section className="section d-flex flex-row align-items-center">
        <h1>Tous vos clients au meme endroit</h1>
      </section>
    </div>
  );
};

export default Home;