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
    <div className="page-padding bg-purple d-flex align-items-center justify-content-center">
      <div className="bg-white-color details-container p-4 col-xl-6 col-lg-8 col-md-8 col-sm-12 d-flex row my-5">
        <div className="py-4 d-flex justify-content-center">
          <img className="rounded-circle" width="260px" src={profileDrawing} alt="profile"/>
        </div>
        <div className="">
          {
            (patient && nutritionists)?
              <PatientEditForm patientData={patient} nutritionists={nutritionists}/> : <Loading />
          }
        </div>
      </div>
    </div>
  );
};

export default PatientEditProfile;