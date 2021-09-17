import React from 'react';

const PatientSituation = () => {
  return (
    <div className="patient-situation text-primary-color">
      <div className="patient-situation-header mx-3 p-2">
        <h2 className="my-1">Derniers relevés</h2>
        <small className="my-1">Découvrez ci-dessous les relevés pris par votre praticien lors de votre dernier rendez-vous</small>
      </div>
      <div className="patient-situation-details mx-3 p-3 col-lg-6 col-sm-12">
        <div className="data-columns row mx-3">
          <div className="left-details col-lg-6 col-sm-12">
            <table class="table patient-table">
              <thead>
                <tr>
                  <th scope="col">Mesure</th>
                  <th scope="col">Valeur</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Taille</th>
                  <td>1,82</td>
                </tr>
                <tr>
                  <th scope="row">Poids</th>
                  <td>78 kg</td>
                </tr>
                <tr>
                  <th scope="row">IMC</th>
                  <td>23,5</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="right-details col-lg-6 col-sm-12">
            <table class="table patient-table">
              <thead>
                <tr>
                  <th scope="col">Mesure</th>
                  <th scope="col">Valeur</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Masse musculaire</th>
                  <td>33 %</td>
                </tr>
                <tr>
                  <th scope="row">Masse graisseuse</th>
                  <td>13,7 %</td>
                </tr>
                <tr>
                  <th scope="row">Graisse viscérale</th>
                  <td>3,3 %</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientSituation;