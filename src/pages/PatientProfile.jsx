import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { patientsFetch } from 'services/apiManager';
import Cookies from "js-cookie";
import Loading from 'components/Loading';

const PatientProfile = () => {
  const [patient, setPatient] = useState();
  const patient_id = parseInt(Cookies.get('patient_id_cookie'));

  const patients = useSelector(state => state.patient)
  const dispatch = useDispatch() 

  const getPatient = () => {
    dispatch(patientsFetch());
    if (patients.patient) {
      let patient = patients.patient
        .filter((patient) => {
          return patient.id === patient_id
        })
      setPatient(patient[0])
    }
  }

  useEffect(() => { 
    getPatient();
  },[]);

  console.log(patient ? patient : "test")

  return (
    <div className="patient-profile">
      <h1>Profil du patient</h1>
      <p>
        <strong>Prenom : </strong>
        {
          patient ? 
          patient.first_name : <Loading color={"blue"} />
        }
      </p>
      <p>
        <strong>Nom : </strong>
        {
          patient ? 
          patient.last_name : <Loading color={"blue"} />
        }
      </p>
      <p>
        <strong>Email : </strong> 
        {
          patient ? 
          patient.email : <Loading color={"blue"} />
        } 
      </p>
    </div>
  );
};

export default PatientProfile;