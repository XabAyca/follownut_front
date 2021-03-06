// CONFIG IMPORTS
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nutritionistFetch, appointmentsFetch } from 'services/apiManager';

// COMPONENTS IMPORTS
import AppointmentModal from 'components/AppointmentModal';
import AppointmentsListNutritionist from 'components/AppointmentsListNutritionist';
import CalendlyBtn from 'components/CalendlyBtn';
import ProfileToCompleteModal from 'components/ProfileToCompleteModal';
import PwaModal from 'components/PwaModal';
import SidebarNutritionist from 'components/SidebarNutritionist';


const DashboardNutritionist = () => {
  const dispatch = useDispatch()
  const nutritionist_id = parseInt(Cookies.get("nutritionist_id_cookie"))
  const appointments = useSelector(state => state.appointments.appointments)
  const nutritionist = useSelector((state)=> state.nutritionists.currentNutritionist)
  const [filteredAppointments, setFilteredAppointments] = useState()
  const [currentAppointment, setCurrentAppointment] = useState(null)

  useEffect(() => {
    dispatch(appointmentsFetch())
    dispatch(nutritionistFetch())
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
    let modal = document.querySelector(".read-modal");
    modal.style.opacity=1
    modal.style.visibility = 'visible'
  }

  useEffect(() => {
    appointments && filter()
  }, [appointments])

  return (
    <div className="dashboard-page page-padding">
      {nutritionist.slug_calendly ? 
        <CalendlyBtn slug={nutritionist.slug_calendly}/> :
        <ProfileToCompleteModal />
      }
      {!window.matchMedia("(display-mode: standalone)").matches && <PwaModal />}
      <div className="dashboard-page-left">
        <SidebarNutritionist />
        <AppointmentModal appointment={currentAppointment} />
      </div>
      <div className="dashboard-page-right">
        <div className="d-flex justify-content-center py-5">
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