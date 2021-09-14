import GraphWeight from "components/GraphWeight";
import CalculateBMI from "components/CalculateBMI";
import LeftMenu from "components/LeftMenu";

const DashboardPatient = () => {
  return (
    <>
    <div className="container-fluid d-flex">
      <LeftMenu/>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <h6 className="mt-5">
              Current Weight: 82Kg
            </h6>
            <h6 className="">
              Current Body Fat: 82Kg
            </h6>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3>Weight</h3>
            <GraphWeight/>
          </div>
          <div className="col">
            <h3>Body Fat</h3>
            <GraphWeight/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3>Muscle Mass</h3>
            <GraphWeight/>
          </div>
        </div>
        
      </div>
    </div>
    </>
  );
};

export default DashboardPatient;