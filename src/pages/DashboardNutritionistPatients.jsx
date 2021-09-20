import React, { useState } from 'react';

// COMPONENTS IMPORTS
import SidebarNutritionist from 'components/SidebarNutritionist';
import PatientsList from 'components/PatientsList';
import PatientModal from 'components/PatientModal';


const DashboardNutritionistPatients = () => {
  const [currentPatient, setCurrentPatient] = useState()

  const openModal = (patient) => {
    setCurrentPatient(patient)
    let modal = document.querySelector(".patient-modal");
    modal.style.opacity = 1;
    modal.style.visibility = "visible";
  };

  return (
    <div className="dashboard-page page-padding">
      <PatientModal patient={currentPatient}/>
      <div className="dashboard-page-left">
        <SidebarNutritionist />
      </div>
      <div className="dashboard-page-right">
        <div className="d-flex justify-content-center py-5">
          <PatientsList setOpenModal={openModal} />
        </div>
      </div>
    </div>
  );
};

export default DashboardNutritionistPatients;