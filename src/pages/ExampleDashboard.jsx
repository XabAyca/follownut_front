import React from 'react';

//ASSETS IMPORT
import exemple_1 from '../assets/images/exemple_1.png';
import exemple_2 from '../assets/images/exemple_2.png';
import exemple_3 from '../assets/images/exemple_3.png';
import exemple_4 from '../assets/images/exemple_4.png';

const ExampleDashboard = () => {
  return (
    <div className="page-padding exemple-dashboard">
      <section className="bg1">
        <h2>Accédez rapidement à tous vos rendez-vous passés ...</h2>
        <img src={exemple_1} alt="exemple1" />
      </section>
      <section className="bg1">
        <img src={exemple_2} alt="exemple2" />
        <h2>... les statistiques de vos patients</h2>
      </section>
      <section>
        <h2>Création de comptes-rendu</h2>
        <img src={exemple_3} alt="exemple3" />
      </section>
      <section>
        <img src={exemple_4} alt="exemple4" />
        <h2>Accés direct aux messages de vos patients</h2>
      </section>
    </div>
  );
};

export default ExampleDashboard;