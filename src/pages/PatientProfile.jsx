// CONFIG IMPORTS
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cookies from "js-cookie";
import { Link } from 'react-router-dom';

// SERVICES IMPORTS
import { patientsFetch, deletePatientFetch, patientLogout } from 'services/apiManager';

// COMPONENTS IMPORTS
import Loading from 'components/Loading';
import SidebarPatient from 'components/SidebarPatient';

// ASSETS IMPORTS
import profileDrawing from 'assets/images/patient-profile-drawing.svg'

const PatientProfile = () => {
  const [patient, setPatient] = useState();
  const patient_id = parseInt(Cookies.get('patient_id_cookie'));

  const patients = useSelector(state => state.patient);
  const dispatch = useDispatch();

  const getPatient = () => {
    if (patients.patient) {
      let patient = patients.patient
        .filter((patient) => {
          return patient.id === patient_id
        })
      setPatient(patient[0]);
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
    return gender === "male" ? "Homme" : (gender === "female" ? " Femme" : " Non renseigné")
  }

  return (
    <div className="dashboard-page page-padding bg-purple d-flex align-items-center">
      <div class="bg-white details-container py-4 col-xl-6 col-lg-8 col-md-8 col-sm-12 d-flex row align-items-center justify-content-center">
        <div class="py-4 col-xl-6 col-lg-6 col-md-10 col-sm-10 d-flex justify-content-center">
          <img className="rounded-circle" width="260px" src={profileDrawing} alt="profile"/>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-10 col-sm-10 d-flex row justify-content-center">
          <h1 className="text-right mx-0">
            { patient &&
              (
                patient.first_name && patient.last_name ? `${patient.first_name + " " + patient.last_name}` : "Prénom Nom"
              )
            }
          </h1>
          <h5> <strong>Date de naissance :</strong>  
            { patient &&
              (
                patient.date_of_birth ? `${" " + patient.date_of_birth}` : " "
              )
            }
          </h5>
          <h5> <strong>Sexe :</strong>  
            { patient && 
              displayGender(patient.gender) 
            }
          </h5>
          <h5 className="d-flex">
          <i className="align-self-center fas fa-envelope"></i>
          <div className="align-self-center mx-2">
            { 
              patient ? patient.email  : <Loading color={"blue"} />
            } 
          </div>
          </h5>
          <div className="my-3">
            <Link exact to="/patient-edit-profile">
              <div className="btn success-button text-white-color my-1">Éditer mon profil</div>
            </Link>
            <form onSubmit={deleteProfilePatient} >
              <input className="btn danger-button text-white-color my-1" type="submit"  value="Supprimer mon compte" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;