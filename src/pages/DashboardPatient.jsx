import GraphWeight from "components/GraphWeight";
import CalculateBMI from "components/CalculateBMI";
import LeftMenu from "components/LeftMenu";
import ProgressionMetrics from "components/ProgressionMetrics";

const DashboardPatient = () => {
  return (
    <>
    <div className="patient-dashboard">
      
    </div>
    <LeftMenu/>
    <ProgressionMetrics/>

    </>
  );
};

export default DashboardPatient;

{/* <>
<div className="container-fluid d-flex">
  <LeftMenu/>

  <div className="container-fluid">
    <div className="row">
      <div className="col data-patient">
        <div className="col-10">
          <h5>Mathieu Paradis</h5>
          <h5>Mathieu.Paradis@gmail.com</h5>
          <h5>Height : 1.78</h5>
        </div>
        <div className="col">
          <h5>Current Weight : 82Kg</h5>
          <h5>Current Body Fat : 82Kg</h5>
          <h5>Visceral Fat : 82Kg</h5>
          <h5>BMI : 82Kg</h5>
        </div>
      </div>

    </div>
    <div className="row mt-2 first-line-graphic">
      <div className="col">
        <h3>Weight</h3>
        <GraphWeight/>
      </div>
      <div className="col">
        <h3>Body Fat</h3>
        <GraphWeight/>
      </div>
    </div>
    <div className="row mt-3 second-line-graphic">
      <div className="col">
        <h3>Muscle Mass</h3>
        <GraphWeight/>
      </div>
      <div className="col">
        <h3>Viceral Mass</h3>
        <GraphWeight/>
      </div>
    </div>
    
  </div>
</div>
</> */}