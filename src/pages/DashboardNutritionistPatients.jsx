import React from 'react';

// COMPONENTS IMPORTS
import SidebarNutritionist from 'components/SidebarNutritionist';
import PatientsList from 'components/PatientsList';


const DashboardNutritionistPatients = () => {
  return (
    <div className="dashboard-page page-padding">
      <div className="dashboard-page-left">
        <SidebarNutritionist />
      </div>
      <div className="dashboard-page-right">
        <h1 className="mx-5 my-1 text-primary-color">Bienvenue sur votre dashboard, Jean-Paul</h1>
        <div className="mx-5 my-5">
          <PatientsList />
        </div>
      </div>
    </div>
  );
};

export default DashboardNutritionistPatients;