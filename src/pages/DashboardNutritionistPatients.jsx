import React from 'react';

// COMPONENTS IMPORTS
import SidebarNutritionist from 'components/SidebarNutritionist';
import PatientsList from 'components/PatientsList';


const DashboardNutritionistPatients = () => {
  return (
    <div className="dashboard-nutritionist page-padding">
      <div className="dashboard-nutritionist-left">
        <SidebarNutritionist />
      </div>
      <div className="dashboard-nutritionist-right">
        <h1>Patients</h1>
          <PatientsList />
      </div>
    </div>
  );
};

export default DashboardNutritionistPatients;