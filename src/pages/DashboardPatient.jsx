import GraphWeight from "components/GraphWeight";
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { appointmentsFetch } from 'services/apiManager';
import SidebarPatient from "components/SidebarPatient";
import PatientSituation from "components/PatientSituation";

const DashboardPatient = () => {
  const dispatch = useDispatch()
  const patient_id = parseInt(Cookies.get("patient_id_cookie"))
  const [key, setKey] = useState("appointments");
  const appointments = useSelector(state => state.appointments.appointments)
  const [filteredAppointments, setFilteredAppointments] = useState()
  const [currentAppointment, setCurrentAppointment] = useState(null)

  useEffect(() => {
    dispatch(appointmentsFetch())
  }, [])

  const filter = () => {
    setFilteredAppointments(
      appointments
        .filter((el) => el.patient_id === patient_id)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
    );
  };

  const openModal = (appointment) => {
    setCurrentAppointment(appointment)
    let modal = document.querySelector(".appointment-modal");
    modal.style.opacity=1
    modal.style.visibility = 'visible'
  }



  useEffect(() => {
    appointments && filter()
  }, [appointments])



  return (
    <>
      <div className="dashboard-nutritionist page-padding">
        <div className="dashboard-nutritionist-left">
          <SidebarPatient />
        </div>
        <div className="dashboard-nutritionist-right">
          <h1 className="m-5 text-primary-color">Bienvenue sur votre dashboard, Jean-Paul</h1>
          <div className="bg-blue m-5">
              <PatientSituation />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPatient;


// return (
//   <>
//     <div className="dashboard-nutritionist page-padding">
//       <div className="dashboard-nutritionist-left">
//         <SidebarPatient />
//       </div>
//       <div className="dashboard-nutritionist-right">
//         <Tabs
//           id="controlled-tab-example"
//           activeKey={key}
//           onSelect={(k) => setKey(k)}
//           className="mb-3"
//         >
//           <Tab eventKey="appointments" title="Comptes-rendu">
          
//           </Tab>
//           <Tab eventKey="weight" title="Weight">
//             Weight
//           </Tab>
//           <Tab eventKey="body-fat" title="Body Fat">
//             Body fat
//           </Tab>
//           <Tab eventKey="muscle-mass" title="Muscle mass">
//             A venir
//           </Tab>
//           <Tab eventKey="viceral-mass" title="Viceral mass">
//             A venir
//           </Tab>
//         </Tabs>
//       </div>
//     </div>
//   </>
// );