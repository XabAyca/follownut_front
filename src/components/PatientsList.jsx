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
    getNutritionistPatients();
  }, [nutritionists]);

  return (
    <div className="patients-list text-primary-color">
      <div className="patient-list-header mx-3 p-2">
        <h2>Voici la liste de vos patients</h2>
      </div>
      <div className="details-container mx-3 p-3 col-lg-8 col-sm-12">
      <table class="table patient-table">
        <thead>
          <tr>
            <th scope="col">Réf.</th>
            <th scope="col">Prénom</th>
            <th scope="col">Nom</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {
            nutritionistPatients ? 
            nutritionistPatients.map((patient) => {
              return (
                <tr>
                  <th scope="row" key={patient.id}>{patient.id}</th>
                  <td>{patient.last_name ? patient.last_name : (<span>?</span>)}</td>
                  <td>{patient.first_name ? patient.first_name : (<span>?</span>)}</td>
                  <td>{patient.email ? patient.email : (<span>?</span>)}</td>
                </tr>
              )
            }) :
            <Loading color={"blue"} />
          }
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default PatientsList;