import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { nutritionistsFetch } from 'services/apiManager';
import Cookies from "js-cookie";

// COMPONENTS IMPORTS
import Loading from 'components/Loading';
import SidebarNutritionist from 'components/SidebarNutritionist';


const DashboardNutritionistPatients = () => {
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
  },[]);

  

  return (
    <div className="dashboard-nutritionist">
      <div className="dashboard-nutritionist-left">
        <SidebarNutritionist />
      </div>
      <div className="dashboard-nutritionist-right">
        <h1>Patients</h1>
        {
          nutritionistPatients ? 
          nutritionistPatients.map((patient) => {
            return patient.first_name
          }) :
          <Loading color={"blue"} />
        }
      </div>
    </div>
  );
};

export default DashboardNutritionistPatients;