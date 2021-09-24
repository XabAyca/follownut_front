import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { patientsFetch } from 'services/apiManager';
import Cookies from "js-cookie";
import Loading from 'components/Loading';
import SidebarPatient from 'components/SidebarPatient';
import { Link } from 'react-router-dom';
import { deletePatientFetch } from 'services/apiManager';
import { patientLogout } from 'services/apiManager';

import profileDrawing from 'assets/images/patient-profile-drawing.svg'

const PatientProfile = () => {
  const [patient, setPatient] = useState();
  const patient_id = parseInt(Cookies.get('patient_id_cookie'));

  const patients = useSelector(state => state.patient)
  const dispatch = useDispatch() 

  const getPatient = () => {
    ;
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
  }, []);
  
  useEffect(() => {
    getPatient();
  },[patients])

  const handleLogOut = () => {
    Cookies.remove('patient_token_cookie');
    Cookies.remove("patient_id_cookie");
    dispatch(patientLogout()); 
    window.location.reload();
  }

  const deleteProfilePatient = (e) => {
    if (window.confirm("Vous êtes sur le point de supprimer votre compte. Êtes vous sur ?")) {
      dispatch(deletePatientFetch());
      handleLogOut();
    }
  }

  const displayGender = (gender) => {
    return gender === "unknown" ? "Non renseigné" : (gender === "male" ? "Homme" : "Femme")
  }


  return (
    <div className="dashboard-page page-padding">
      <div className="dashboard-page-left">
        <SidebarPatient />
      </div>
      <div className="background-of-edit-profile">
        <div class="container details-container-alt">
          <div class="row d-flex justify-content-center">
            <div class="col-12 d-flex img-control">
            <img className="rounded-circle" width="200px" src={profileDrawing} alt="profile"/>
            </div>
            <div class="col-12 control-form-profile-nutritionist">
              {
                patient && patient.first_name && patient.last_name ?
                <h1 className="text-right mx-0">
                  {patient.first_name} {patient.last_name}
                </h1> 
                : <h1>Nom Prénom</h1>
              }

              <h5 className="d-flex">
                <i className="align-self-center fas fa-envelope"></i>
                <div className="align-self-center mx-2">{ patient ? patient.email  : <Loading color={"blue"} />} </div>
              </h5>
              <h5 className="d-flex">
                <i className="align-self-center fas fa-phone"></i>
                <div className="align-self-center mx-2">{ patient ? patient.phone_number  : <Loading color={"blue"} />} </div>
              </h5>
              <h5 className="d-flex">
                <i className="align-self-center fas fa-calendar-check"></i>
                <div className="align-self-center mx-2">{ patient ? patient.slug_calendly  : <Loading color={"blue"} />} </div>
              </h5>
              <hr />
              <div className="my-3">
                <Link exact to="/nutritionist-edit-profile" className="sidebar-nutritionist-link text-dark">
                  <div className="btn success-button text-white-color w-100 my-1">Modifier mon profil</div>
                </Link>
                <form onSubmit={deleteProfilePatient} >
                  <input className="btn danger-button text-white-color w-100 my-1" type="submit"  value="Supprimer mon compte" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;