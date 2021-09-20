import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { appointmentsFetch } from 'services/apiManager';
import { patientFetch } from 'services/apiManager';
import PatientCharts from './PatientCharts';

const PatientModal = ({ patient }) => {
  const dispatch = useDispatch()
  const appointments = useSelector((state) => state.appointments.appointments)
  const [patientAppointments, setPatientAppointments] = useState(undefined)

  useEffect(() => {
      dispatch(appointmentsFetch())
  }, [])
  
  useEffect(() => {
    appointments && patient && filteredAppointment()
  }, [appointments,patient])
  
  const filteredAppointment = () => {
    let temp = appointments
      .filter((appointment) => appointment.patient_id === patient.id)
      .sort((a, b) => b.date.localeCompare(a.date));
    temp.length > 0 ?
      setPatientAppointments(temp) :
      setPatientAppointments(undefined)
  };

  const closeModal = () => {
    let modal = document.querySelector(".patient-modal");
    modal.style.opacity = 0;
    modal.style.visibility = "hidden";
    setTimeout(() => {
      setPatientAppointments(undefined);
    }, 1000)
  };

  const createDate = (el) => {
    let date = new Date(el);
    return date.toLocaleDateString("fr", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: false,
    });
  };

  window.onclick = (event) => {
    event.target === document.querySelector(".patient-modal") &&
      event.target !== document.querySelector(".content") &&
      closeModal();
  };

  // const dateOfBirthasADate = new Date(patient.date_of_birth)
  let dateOfBirthasADate = null;
  let age = null;

  // patient.date_of_birth ? dateOfBirthasADate = new Date(patient.date_of_birth) : dateOfBirthasADate
  dateOfBirthasADate = (patient && patient.date_of_birth ? new Date(patient.date_of_birth) : "dob")

  // const age = ((Date.now() - dateOfBirthasADate)/ 31536000000).toFixed()

  return (
    <div className="patient-modal">
      <i className="pointer-clickable fas fa-times" onClick={closeModal}></i>
      <div className="content p-5 my-5">
        {patient && (
          <>
            <div className="d-flex text-primary-color my-4 row">
              <div className="col-lg-3 col-md-12 col-sm-12 details-container p-4">
                <p>
                  {" "}
                  <strong>Patient : </strong>
                  {patient ? (
                    patient.last_name + " " + patient.first_name
                  ) : (
                    <span>Patient supprimé </span>
                  )}
                </p>
                <p className="m-0">
                  <strong>Sexe : </strong>
                  {patient.gender === "unknown" ? "Non renseigné" : patient.gender}
                </p>
                <p className="m-0">
                  <strong>Âge : </strong>
                  {age} ans
                </p>
              </div>
              <div className="col-lg-9 col-md-12 col-sm-12 d-flex align-items-center justify-content-end">
                <h1>
                  Dernier RDV :{" "}
                  {patientAppointments ? (
                    createDate(patientAppointments[0].date)
                  ) : (
                    <p>-</p>
                  )}
                </h1>
              </div>
            </div>
            <div className="d-flex text-primary-color my-4 row">
              <h2 className="b-underline">Dernières Mesures</h2>
              {patientAppointments ? (
                <div className="my-2 d-flex flex-wrap">
                  <p className="mx-1">
                    <strong>Poids : </strong>
                    {patientAppointments[0].weight} kg
                  </p>
                  <p className="mx-1">
                    <strong>Taille : </strong>
                    {patientAppointments[0].height.toFixed(2)} m
                  </p>
                  <p className="mx-1">
                    <strong>IMC : </strong>
                    {patientAppointments[0].BMI.toFixed(1)}
                  </p>
                  <p className="mx-1">
                    <strong>Masse grasse : </strong>
                    {patientAppointments[0].body_fat} %
                  </p>
                  <p className="mx-1">
                    <strong>Masse musculaire : </strong>
                    {patientAppointments[0].muscle_mass} %
                  </p>
                  <p className="mx-1">
                    <strong>Graisse viscerale : </strong>
                    {patientAppointments[0].visceral_fat} %
                  </p>
                </div>
              ) : (
                <p>Pas de mesures</p>
              )}
            </div>
            <div className="report my-4">
              {patientAppointments && (
                <PatientCharts appointments={patientAppointments} />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PatientModal;