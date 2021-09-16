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
          <h1 className="mx-5 my-2 text-primary-color">Bienvenue sur votre dashboard, Jean-Paul</h1>
          <div className="mx-5 my-4">
              <PatientSituation />
          </div>
          <div className="mx-5 my-4">
              <PatientCharts />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPatient;