import AppointmentCreateForm from 'components/Forms/AppointmentCreateForm';
import SidebarNutritionist from 'components/SidebarNutritionist';
import React from 'react';

const DashboardNutritionistAppointments = () => {
  return (
    <div className="dashboard-page page-padding">
      <div className="dashboard-page-left">
        <SidebarNutritionist />
      </div>
      <div className="dashboard-page-right m-5">
        <h1 className="text-primary-color">Create appointment</h1>
        <AppointmentCreateForm/>
      </div>
    </div>
  );
};

export default DashboardNutritionistAppointments;