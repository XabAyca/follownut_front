// COMPONENTS IMPORTS
import PatientCreateForm from 'components/Forms/PatientCreateForm';
import SidebarNutritionist from 'components/SidebarNutritionist';

const DashboardNutritionistCreatePatient = () => {
  return (
    <div className="dashboard-page page-padding">
      <div className="dashboard-page-left">
        <SidebarNutritionist />
      </div>
      <div className="dashboard-page-right">
        <div className="d-flex justify-content-center">
          <PatientCreateForm/>
        </div>
      </div>
    </div>
  );
};

export default DashboardNutritionistCreatePatient;