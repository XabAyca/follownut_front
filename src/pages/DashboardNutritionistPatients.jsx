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
        <h1>Patients</h1>
          <PatientsList />
      </div>
    </div>
  );
};

export default DashboardNutritionistPatients;