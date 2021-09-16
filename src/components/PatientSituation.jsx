import React from 'react';

const PatientSituation = () => {
  return (
    <div className="patient-situation text-primary-color">
      <div className="patient-situation-header mx-3 p-3">
        <h2 className="my-1">Derniers relevés</h2>
        <small className="my-1">Découvrez ci-dessous les relevés pris par votre praticien lors de votre dernier rendez-vous</small>
      </div>
      <div className="patient-situation-details mx-3 p-3 col-lg-6 col-sm-12">
        <div className="data-columns mx-3 row">
          <h5 className="my-3">Jean-Paul BELMONDO</h5>
          {/* <p>Sexe : H</p> */}
        </div>
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
                  <th scope="row">graisse viscérale</th>
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

// return (
//   <div className="patient-situation text-primary-color">
//     <div className="patient-situation-header mx-3 p-3">
//       <h2 className="my-1">Derniers relevés</h2>
//       <small className="my-1">Découvrez ci-dessous les relevés pris par votre praticien lors de votre dernier rendez-vous</small>
//     </div>
//     <div className="patient-situation-details mx-3 p-3">
//       <h5 className="my-3">Jean-Paul BELMONDO</h5>
//       <p>Sexe : H</p>
//       <div className="data-columns mx-3 row">
//         <div className="left-details col-4">
//           <h3>1,82 m</h3>
//           <h3>78 kg</h3>
//         </div>
//         <div className="center-details col-4">
//           <h3>IMC : 23,5</h3>
//           <h3>Masse musculaire : 33%</h3>
//         </div>
//         <div className="right-details col-4">
//           <h3>Masse graisseuse : 12,2%</h3>
//           <h3>Graisse viscérale : 3,6%</h3>
//         </div>
//       </div>
//     </div>
//   </div>
// );