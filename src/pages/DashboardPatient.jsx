import GraphWeight from "components/GraphWeight";
import CalculateBMI from "components/CalculateBMI";
import LeftMenu from "components/LeftMenu";

const DashboardPatient = () => {
  return (
    <>
  


    <div className="background-of-dashboard-patient">
      <LeftMenu/>

      <div className="container rounded bg-white mb-5">
        <div className="row">
          <div className="col-md-6 border-right">
            <div className="d-flex flex-column p-3 py-5">
              <h6>Mathieu Paradis</h6>
              <h6>Mathieu.Paradis@gmail.com</h6>
              <h6>Height : 1.78</h6>
            </div>
          </div>
          <div className="col-md-6 border-right ">
            <div className="d-flex flex-column justify-content-center align-items-center p-3 py-5">
              <h6>Current Weight : 82Kg</h6>
              <h6>Current Body Fat : 82Kg</h6>
              <h6>Visceral Fat : 82Kg</h6>
              <h6>BMI : 82Kg</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="container rounded bg-white ">
        <div className="row">
          <div className="col-md-3 border-right ">
            <div className="d-flex flex-column  p-3 py-5">
              <h3>Weight</h3>
              <GraphWeight/>
            </div>
          </div>
          <div className="col-md-3 border-right ">
            <div className="d-flex flex-column  p-3 py-5">
              <h3>Body Fat</h3>
              <GraphWeight/>
            </div>
          </div>
          <div className="col-md-3 border-right ">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <h3>Viceral Fat</h3>
              <GraphWeight/>
            </div>
          </div>
          <div className="col-md-3 border-right ">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <h3>Muscle Mass</h3>
              <GraphWeight/>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default DashboardPatient;