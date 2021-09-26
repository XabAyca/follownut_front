// CONFIG IMPORTS
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from "js-cookie";

// SERVICES IMPORTS
import { appointmentsFetch } from 'services/apiManager';

// COMPONENTS IMPORTS
import AppointmentsListPatient from 'components/AppointmentsListPatient';
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
    appointments && setPatientAppointments(
      appointments
        .filter((el) => el.patient_id === patient_id)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
    );
  }

  const openModal = (appointment) => {
    setCurrentAppointment(appointment)
    let modal = document.querySelector(".read-modal");
    modal.style.opacity=1
    modal.style.visibility = 'visible'
  }

  useEffect(() => { 
    getPatientAppointments();
  },[appointments]);


  return (
    <div className="dashboard-page page-padding">
      <div className="dashboard-page-left">
        <SidebarPatient />
        <AppointmentModal appointment={currentAppointment} />
      </div>
      <div className="dashboard-page-right">
        <div className="d-flex justify-content-center py-5">
            {patientAppointments ?  
              <AppointmentsListPatient
                filteredAppointments={patientAppointments}
                setOpenModal={openModal}
              /> :
              <Loading />
            }
        </div>
      </div>
    </div>
  );
};

export default DashboardPatientAptsList;