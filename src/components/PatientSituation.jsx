import React from 'react';

const PatientSituation = () => {
  return (
    <div className="patient-situation p-3">
      <div className="patient-situation-header">
        <h2 className="my-1">Ma situation</h2>
        <small className="my-1">Découvrez ci-dessous les derniers relevés de votre praticien</small>
      </div>
      <div className="patient-situation-details mt-4">
        <h5 className="my-3">Jean-Paul BELMONDO</h5>
        <div className="data-columns d-flex">
          <div className="left-details w-50">
            <p>0 kg</p>
            <p>1 kg</p>
          </div>
          <div className="right-details w-50">
            <p>12 kg</p>
            <p>13 kg</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientSituation;