import AppointmentModal from 'components/AppointmentModal';
import AppointmentsListNutritionist from 'components/AppointmentsListNutritionist';
import CalendlyBtn from 'components/CalendlyBtn';
import PwaModal from 'components/PwaModal';
import SidebarNutritionist from 'components/SidebarNutritionist';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { appointmentsFetch } from 'services/apiManager';

const DashboardNutritionist = () => {
  const dispatch = useDispatch()
  const nutritionist_id = parseInt(Cookies.get("nutritionist_id_cookie"))
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
        .filter((el) => el.nutritionist_id === nutritionist_id)
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
    <div className="dashboard-page page-padding">
      {appointments && (
        <CalendlyBtn slug={appointments[0].nutritionist.slug_calendly} />
      )}
      {!window.matchMedia("(display-mode: standalone)").matches && <PwaModal />}
      <div className="dashboard-page-left">
        <SidebarNutritionist />
        <AppointmentModal appointment={currentAppointment} />
      </div>
      <div className="dashboard-page-right">
        <div className="">
          {filteredAppointments && (
                <AppointmentsListNutritionist
                  filteredAppointments={filteredAppointments}
                  setOpenModal={openModal}
                />
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardNutritionist;