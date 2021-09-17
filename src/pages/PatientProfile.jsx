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


  return (
    <>
      <div className="dashboard-page">
        <div className="dashboard-page-left">
          <SidebarPatient />
        </div>
        <div className="dashboard-page-right">
          <div className="container rounded patient-details my-5 py-5 col-lg-9 col-sm-12">
            <div className="row">
              <div className="col-md-6 border-right d-flex align-items-center">
                <div className="d-flex flex-column align-items-center text-center mt-5">
                  <img className="rounded-circle" width="270px" 
                  src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                  alt="profile"/>
                </div>
              </div>
              <div className="col-md-5 mt-5 border-right mx-2">
                <div className="p-3">
                  <div className="mb-5">
                      <h1 className="text-right">Patient Profile</h1>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-6">
                      <p>
                        {
                          patient ? 
                          patient.first_name : <Loading color={"blue"} />
                        }
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p>
                        {
                          patient ? 
                          patient.last_name : <Loading color={"blue"} />
                        }
                      </p>
                    </div>
                  </div>
                  <div className="row mt-3 d-flex">
                    <div className="col-md-12">
                      <p>
                        {
                          patient ? 
                          patient.email : <Loading color={"blue"} />
                        } 
                      </p>
                    </div>
                    <Link
                      exact
                      to="/patient-edit-profile"
                      className="sidebar-nutritionist-link text-dark"
                    >
                    
                      <div className="btn success-button text-center patient-edit-profile-button w-100 mt-4">Modifier mon profil</div>
                      
                    </Link>
                    <form onSubmit={deleteProfilePatient} >
                      <input className="btn danger-button text-white p-2 mt-4 w-100" type="submit"  value="Supprimer mon compte" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientProfile;