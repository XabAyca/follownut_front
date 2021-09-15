import GraphWeight from "components/GraphWeight";
import CalculateBMI from "components/CalculateBMI";
import LeftMenu from "components/LeftMenu";

const DashboardPatient = () => {
  return (
    <>
    <div className="container-fluid d-flex">
      <LeftMenu/>

      <div className="container">
        <div className="row data-patient">
          <div className="col">
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
        <div className="container">
          <div className="row mt-5">
            <div className="col d-flex justify-content-center">
              <div className="w-75">
                <h3>Weight</h3>
                <GraphWeight/>
              </div>
            </div>
            <div className="col d-flex justify-content-center">
              <div className="w-75">
                <h3>Body Fat</h3>
                <GraphWeight/>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col d-flex justify-content-center">
              <div className="w-75">
              <h3>Viceral Fat</h3>
                <GraphWeight/>
              </div>
            </div>
            <div className="col d-flex justify-content-center">
              <div className="w-75">
              <h3>Muscle Mass</h3>
                <GraphWeight/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default DashboardPatient;