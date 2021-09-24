// CONFIG IMPORTS
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// SERVICES IMPORTS
import { patientFetch } from 'services/apiManager';

// COMPONENTS IMPORTS
import PatientEditForm from "components/Forms/PatientEditForm";
import Loading from 'components/Loading';

const UncompletedPatientModal = () => {
  const currentPatient = useSelector((state) => state.patient.currentPatient);
  const nutritionists = useSelector(state => state.nutritionists.nutritionist)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(patientFetch())
  }, [])


  // const closeModal = () => {
  //   let modal = document.querySelector(".patient-modal");
  //   modal.style.opacity = 0;
  //   modal.style.visibility = "hidden";
  //   setTimeout(() => {
  //     setPatientAppointments(undefined);
  //   }, 1000)
  // };


  // window.onclick = (event) => {
  //   event.target === document.querySelector(".patient-modal") &&
  //     event.target !== document.querySelector(".content") &&
  //     closeModal();
  // };

  return (
    <div className="read-modal">
      {/* <i className="pointer-clickable fas fa-times" onClick={closeModal}></i> */}
      <div className="content p-5 my-5">
        {
          nutritionists ? <PatientEditForm patientData={currentPatient} nutritionists={nutritionists}/> : <Loading />
        }
      </div>
    </div>
  );
};

export default UncompletedPatientModal;