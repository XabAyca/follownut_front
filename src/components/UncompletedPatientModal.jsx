// CONFIG IMPORTS
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// SERVICES IMPORTS
import { patientFetch, nutritionistsFetch } from 'services/apiManager';

// COMPONENTS IMPORTS
import PatientEditForm from "components/Forms/PatientEditForm";
import Loading from 'components/Loading';

const UncompletedPatientModal = () => {
  const currentPatient = useSelector((state) => state.patient.currentPatient);
  const nutritionists = useSelector(state => state.nutritionists.nutritionist)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(patientFetch())
    dispatch(nutritionistsFetch())
  }, [])

  return (
    <div className="read-modal visible-modal">
      <div className="content p-5 my-5">
        <h2>Vous devez compléter votre profil pour pouvoir utiliser FollowNut</h2>
        {
          nutritionists ? <PatientEditForm patientData={currentPatient} nutritionists={nutritionists}/> : <Loading />
        }
      </div>
    </div>
  );
};

export default UncompletedPatientModal;