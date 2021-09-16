import AppointmentModal from 'components/AppointmentModal';
import AppointmentsList from 'components/AppointmentsList';
import CalendlyBtn from 'components/CalendlyBtn';
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
      <div className="dashboard-page-left">
        <SidebarNutritionist />
        <AppointmentModal appointment={currentAppointment} />
      </div>
      <div className="dashboard-page-right m-5">
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <Tab eventKey="appointments" title="Comptes-rendu">
            {filteredAppointments && (
              <AppointmentsList
                filteredAppointments={filteredAppointments}
                setOpenModal={openModal}
              />
            )}
          </Tab>
          <Tab eventKey="to-do" title="À venir">
            A venir
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default DashboardNutritionist;