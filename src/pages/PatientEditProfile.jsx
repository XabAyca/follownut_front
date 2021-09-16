import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { patientsFetch } from 'services/apiManager';
import Cookies from "js-cookie";

import PatientEditForm from "components/Forms/PatientEditForm";
import Loading from 'components/Loading';

const PatientEditProfile = () => {
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
  },[patient]);

  return (
    <>
      <div className="background-of-edit-profile">
        <div className="container rounded bg-white mb-5 content-edit-profile">
          <div className="row">
            <div className="col-md-3 border-right">
              <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="profile"/><span className="font-weight-bold">Edogaru</span><span className="text-black-50">edogaru@mail.com.my</span><span> </span></div>
            </div>
            {
              patient ?
              <PatientEditForm patientData={patient}/> : <Loading />
            }
          </div>
        </div>
      </div>
    </>
  )
}


export default PatientEditProfile;