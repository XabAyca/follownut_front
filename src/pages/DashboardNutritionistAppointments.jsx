// COMPONENTS IMPORTS
import AppointmentCreateForm from 'components/Forms/AppointmentCreateForm';
import SidebarNutritionist from 'components/SidebarNutritionist';


const DashboardNutritionistAppointments = () => {
  return (
    <div className="dashboard-page page-padding">
      <div className="dashboard-page-left">
        <SidebarNutritionist />
      </div>
      <div className="dashboard-page-right">
        <div className="d-flex justify-content-center">
          <AppointmentCreateForm />
        </div>
      </div>
    </div>
  );
};

export default DashboardNutritionistAppointments;