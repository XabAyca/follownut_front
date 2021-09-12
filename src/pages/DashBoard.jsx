import GraphWeight from "components/GraphWeight";
import CalculateBMI from "components/CalculateBMI";

const DashBoard = () => {

  return (
    <>
    <div className="container-fluid border d-flex">
      <div className="row boxsizing-width-mini-menu">
        <div className="small-menu-left">
          <div className="ico-user"></div>
          <div className="ico-heart"></div>
          <div className="ico-exclamation"></div>
        </div>
      </div>
      <div className=" menu-profile-patient border w-100">
          <ul className="list-menu-patient">
            <li>Dashboard</li>
            <li>My Appointments</li>
          </ul>

          <div className="container-fluid border">
            <div className="row">
              <div className="col-6 resizing-box-line-graphic">
                <div className="border line-graphic" >
                  <GraphWeight/>
                </div>
              </div>
              <div className="border w-50">
                <CalculateBMI/>
              </div>
            </div>
            <div className="border">
              teste
            </div>

          </div>
      </div>

    </div>

    </>
  )
}

export default DashBoard;