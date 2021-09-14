import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { patientsFetch } from 'services/apiManager';
import Cookies from "js-cookie";

const PatientProfile = () => {
  const patient_id = parseInt(Cookies.get('patient_id_cookie'));

  const patients = useSelector(state => state.patient)
  const dispatch = useDispatch() 

  const getPatient = () => {
    dispatch(patientsFetch());
  }

  useEffect(() => { 
    getPatient();
  },[]);
  return (
    <div className="patient-profile">
      <h1>Profil du patient</h1>
      <p>
        <strong>Prenom</strong> : 
        {
          patients.patient && patient_id ? 
          patients.patient[patient_id-1].first_name : "Loading"
        }
      </p>
      <p>
        <strong>Nom</strong> : 
        {
          patients.patient && patient_id ?
          patients.patient[patient_id-1].last_name : "Loading"
        }
      </p>
      <p>
        <strong>Email</strong> : 
        {
          patients.patient && patient_id ? 
          patients.patient[patient_id-1].email : "Loading"
        } 
      </p>
    </div>
  );
};

export default PatientProfile;