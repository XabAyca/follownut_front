import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { patientsFetch } from 'services/apiManager';
import Cookies from "js-cookie";

import PatientEditForm from "components/Forms/PatientEditForm";
import Loading from 'components/Loading';
import { nutritionistsFetch } from 'services/apiManager';

const PatientEditProfile = () => {
  const [patient, setPatient] = useState();
  const patient_id = parseInt(Cookies.get('patient_id_cookie'));

  const patients = useSelector(state => state.patient)
  const nutritionists = useSelector(state => state.nutritionists.nutritionist)
  const dispatch = useDispatch() 

  const getPatient = () => {
    if (patients.patient) {
      let patient = patients.patient
        .filter((patient) => {
          return patient.id === patient_id
        })
      setPatient(patient[0])
    }
  }

  useEffect(() => {
    dispatch(patientsFetch());
    dispatch(nutritionistsFetch())
  },[])

  useEffect(() => { 
    getPatient();
  },[patients]);

  return (
    <div className="background-of-edit-profile page-padding">
      <div className="container rounded bg-white content-edit-profile">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="profile"/></div>
          </div>
          {
            (patient && nutritionists)?
            <PatientEditForm patientData={patient} nutritionists={nutritionists}/> : <Loading />
          }
        </div>
      </div>
    </div>
  )
}


export default PatientEditProfile;