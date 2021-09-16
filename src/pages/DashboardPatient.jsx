import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { appointmentsFetch } from 'services/apiManager';
import SidebarPatient from "components/SidebarPatient";
import PatientSituation from "components/PatientSituation";
import PatientCharts from "components/PatientCharts";

const DashboardPatient = () => {
  const dispatch = useDispatch()
  const patient_id = parseInt(Cookies.get("patient_id_cookie"))
  const appointments = useSelector(state => state.appointments.appointments)
  const [filteredAppointments, setFilteredAppointments] = useState()
  const [currentAppointment, setCurrentAppointment] = useState(null)
  const [lastAppointment,setLastAppointment] = useState()

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
    setLastAppointment(appointments[0])
  }, [appointments])



  return (
    <>
      <div className="dashboard-page page-padding">
        <div className="dashboard-page-left">
          <SidebarPatient />
        </div>
        <div className="dashboard-page-right">
          <h1 className="mx-5 my-2 text-primary-color">Bienvenue sur votre dashboard {lastAppointment && lastAppointment.first_name}</h1>
          <div className="mx-5 my-4">
            {lastAppointment && <PatientSituation appointment={lastAppointment} />}
          </div>
          <div>
            {filteredAppointments && <PatientCharts appointments={filteredAppointments} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPatient;