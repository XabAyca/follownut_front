import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { patientsFetch } from 'services/apiManager';
import Cookies from "js-cookie";
import Loading from 'components/Loading';
import SidebarPatient from 'components/SidebarPatient';
import { Link } from 'react-router-dom';

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
  },[patient]);

  console.log(patient ? patient : "test")

  return (
    <>
      <div className="dashboard-nutritionist">
        <div className="dashboard-nutritionist-left">
          <SidebarPatient />
        </div>
        <div className="dashboard-nutritionist-right">
          <div className="container rounded bg-white">
            <div className="row">
              <div className="col-md-3 border-right">
                <div className="d-flex flex-column align-items-center text-center ">
                  <img className="rounded-circle mt-5" width="150px" 
                  src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                  alt="profile"/><span className="font-weight-bold">Edogaru</span>
                  <span className="text-black-50">edogaru@mail.com.my</span>
                </div>
              </div>
              <div className="col-md-5 mt-5 border-right">
                <div className="p-3">
                  <div className="mb-5">
                      <h4 className="text-right">Patient Profile</h4>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-6">
                      <p>
                        <strong>Prenom : </strong>
                        {
                          patient ? 
                          patient.first_name : <Loading color={"blue"} />
                        }
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p>
                        <strong>Nom : </strong>
                        {
                          patient ? 
                          patient.last_name : <Loading color={"blue"} />
                        }
                      </p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-12">
                      <p>
                        <strong>E-mail : </strong>
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
                      <i class="fas fa-plus-circle"></i>
                      Edit Profile
                    </Link>
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