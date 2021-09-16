import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { nutritionistsFetch } from 'services/apiManager';
import Cookies from "js-cookie";
import Loading from './Loading';


const PatientsList = () => {
  const [nutritionistPatients, setNutritionistPatients] = useState();

  const nutritionist_id = parseInt(Cookies.get('nutritionist_id_cookie'));

  const nutritionists = useSelector(state => state.nutritionists)
  const dispatch = useDispatch() 

  const getNutritionistPatients = () => {
    if (nutritionists.nutritionist) {
      let nutritionist = nutritionists.nutritionist.filter((nutritionist) => {
        return nutritionist.id === nutritionist_id
      })
      setNutritionistPatients(nutritionist[0].patients)
    }
  }

  useEffect(() => {
    dispatch(nutritionistsFetch());
  }, []);

  useEffect(() => {
    getNutritionistPatients();
  },[nutritionists])

  return (
    <div className="patients-list">
      {
        nutritionistPatients ? 
        nutritionistPatients.map((patient) => {
          return (
            <div className="list-row">
              <p key={patient.id}>
                {patient.last_name ? patient.last_name : ""} {patient.first_name ? patient.first_name : ""} - {patient.email ? patient.email : ""} 
              </p>
            </div>
          )
        }) :
        <Loading color={"blue"} />
      }


    </div>
  );
};

export default PatientsList;