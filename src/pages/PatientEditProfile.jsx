import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { patientsFetch } from 'services/apiManager';
import Cookies from "js-cookie";

import PatientEditForm from "components/Forms/PatientEditForm";
import Loading from 'components/Loading';
import { nutritionistsFetch } from 'services/apiManager';
import SidebarPatient from 'components/SidebarPatient';

import profileDrawing from 'assets/images/patient-profile-drawing.svg'


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
    <div className="dashboard-page page-padding">
    <div className="dashboard-page-left">
      <SidebarPatient />
    </div>
    <div className="background-of-edit-profile">
      <div className="details-container-alt d-flex justify-content-around px-5 col-8">
        <div className="align-self-center">
          <img className="rounded-circle" width="400px" src={profileDrawing} alt="profile"/>
        </div>
        <div className="align-self-center">
          {
            (patient && nutritionists)?
              <PatientEditForm patientData={patient} nutritionists={nutritionists}/> : <Loading />
          }
        </div>
      </div>
    </div>
  </div>
  )
};

export default PatientEditProfile;