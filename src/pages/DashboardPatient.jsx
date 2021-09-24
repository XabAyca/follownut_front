// CONFIG IMPORTS
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// SERVICES IMPORTS
import { appointmentsFetch, patientFetch } from 'services/apiManager';

// COMPONENTS IMPORTS
import SidebarPatient from "components/SidebarPatient";
import PatientSituation from "components/PatientSituation";
import PatientCharts from "components/PatientCharts";
import PwaModal from 'components/PwaModal';
import CalendlyBtn from 'components/CalendlyBtn';
import ProfileToCompleteModal from 'components/ProfileToCompleteModal';


const DashboardPatient = () => {
  const dispatch = useDispatch()
  const patient_id = parseInt(Cookies.get("patient_id_cookie"))
  const appointments = useSelector(state => state.appointments.appointments)
  const [filteredAppointments, setFilteredAppointments] = useState()
  const [lastAppointment,setLastAppointment] = useState()
  const currentPatient = useSelector(state => state.patient.currentPatient)

  useEffect(() => {
    dispatch(appointmentsFetch())
    dispatch(patientFetch())
  }, [])

  const filter = () => {
    setFilteredAppointments(
      appointments
        .filter((el) => el.patient_id === patient_id)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
    );
  };

  useEffect(() => {
    filteredAppointments && setLastAppointment(filteredAppointments[0])
  },[filteredAppointments])

  useEffect(() => {
    appointments && filter()
  }, [appointments])

  return (
    <div className="dashboard-page page-padding">
      {currentPatient.nutritionist ? (
        <CalendlyBtn slug={currentPatient.nutritionist.slug_calendly} />
      ) : (
        <ProfileToCompleteModal />
      )}
      {!window.matchMedia("(display-mode: standalone)").matches && <PwaModal />}
      <div className="dashboard-page-left">
        <SidebarPatient />
      </div>
      <div className="dashboard-page-right">
        <h1 className="text-primary-color">
          Bienvenue sur votre dashboard{" "}
          {lastAppointment && lastAppointment.first_name}
        </h1>
        <div className="col-12">
          {lastAppointment && (
            <PatientSituation appointment={lastAppointment} patient={currentPatient} />
          )}
        </div>
        <div className="col-12">
          {filteredAppointments && (
            <PatientCharts appointments={filteredAppointments} />
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPatient;