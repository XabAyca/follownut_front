import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from "js-cookie";
import { appointmentsFetch } from 'services/apiManager';
import AppointmentsList from 'components/AppointmentsList';
import SidebarPatient from 'components/SidebarPatient';
import Loading from 'components/Loading';
import AppointmentModal from 'components/AppointmentModal';

const DashboardPatientAptsList = () => {
  const [patientAppointments, setPatientAppointments] = useState();
  const [currentAppointment, setCurrentAppointment] = useState(null);

  const patient_id = parseInt(Cookies.get('patient_id_cookie'));

  const appointments = useSelector(state => state.appointments.appointments)
  const dispatch = useDispatch() 

  const getPatientAppointments = () => {
    dispatch(appointmentsFetch());
    if (appointments) {
      let patientAppointments = appointments
        .filter((apt) => {
          return apt.patient_id === patient_id
        })
      setPatientAppointments(patientAppointments)
    }
  }

  const openModal = (appointment) => {
    setCurrentAppointment(appointment)
    let modal = document.querySelector(".appointment-modal");
    modal.style.opacity=1
    modal.style.visibility = 'visible'
  }

  useEffect(() => { 
    getPatientAppointments();
  },[]);


  return (
    <div className="dashboard-patient-apts-list page-padding">
      <div className="dashboard-page-left">
        <SidebarPatient /> 
        <AppointmentModal appointment={currentAppointment} />
      </div>
      <div>
        {patientAppointments ?  
          <AppointmentsList
            filteredAppointments={patientAppointments}
            setOpenModal={openModal}
          /> :
          <Loading />
        } 
      </div>

    </div>
  );
};

export default DashboardPatientAptsList;