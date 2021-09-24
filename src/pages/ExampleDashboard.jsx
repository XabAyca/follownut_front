// COMPONENTS IMPORTS
import PatientCreateForm from 'components/Forms/PatientCreateForm';
import SidebarNutritionist from 'components/SidebarNutritionist';


const ExampleDashboard = () => {
  return (
    <div className="dashboard-page page-padding">
      <div className="dashboard-page-left">
        <SidebarNutritionist />
      </div>
      <div className="dashboard-page-right">
        <div className="">
          <PatientCreateForm/>
        </div>
      </div>
    </div>
  );
};

export default ExampleDashboard;