// CONFIG IMPORTS
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cookies from "js-cookie";

// COMPONENTS IMPORTS
import PatientEditForm from "components/Forms/PatientEditForm";
import Loading from 'components/Loading';
import SidebarPatient from 'components/SidebarPatient';

// ASSETS IMPORTS
import profileDrawing from 'assets/images/patient-profile-drawing.svg'

// SERVICES IMPORTS
import { patientsFetch, nutritionistsFetch } from 'services/apiManager';


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
        <div className="details-container-alt control-edit-profile col-8">
          <div className="align-self-center constrol-edit-profile-picture">
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
  );
};

export default PatientEditProfile;