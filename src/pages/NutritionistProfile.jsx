import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { nutritionistsFetch } from 'services/apiManager';
import Cookies from "js-cookie";

const NutritionistProfile = () => {
  const nutritionist_id = parseInt(Cookies.get('nutritionist_id_cookie'));

  const nutritionists = useSelector(state => state.nutritionists)
  const dispatch = useDispatch() 

  const getNutritionist = () => {
    dispatch(nutritionistsFetch());
  }

  useEffect(() => { 
    getNutritionist();
  },[]);


  return (
    <div className="nutritionist-profile">
      <h1>Profil du nutritioniste</h1>
      <img
        className="avatar"
        src=
        {
          nutritionists.nutritionist && nutritionist_id ?  
          nutritionists.nutritionist[nutritionist_id-1].avatar : "https://images.pexels.com/photos/5733422/pexels-photo-5733422.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        }
        alt="avatar" />
      <p>
        <strong>Prenom</strong> : 
        {
          nutritionists.nutritionist && nutritionist_id ? 
          nutritionists.nutritionist[nutritionist_id-1].first_name : "Loading"
        }
      </p>
      <p>
        <strong>Nom</strong> : 
        {
          nutritionists.nutritionist && nutritionist_id ?
          nutritionists.nutritionist[nutritionist_id-1].last_name : "Loading"
        }
      </p>
      <p>
        <strong>Email</strong> : 
        {
          nutritionists.nutritionist && nutritionist_id ? 
          nutritionists.nutritionist[nutritionist_id-1].email : "Loading"
        }
      </p>
      <p>
        <strong>Numero de tel</strong> :   
        {
          nutritionists.nutritionist && nutritionist_id ?
          nutritionists.nutritionist[nutritionist_id-1].phone_number : "Loading"
        }
      </p>
      <p>
        <strong>Compte Calendly</strong> : 
        {
          nutritionists.nutritionist && nutritionist_id ?
          nutritionists.nutritionist[nutritionist_id-1].slug_calendly : "Loading"
        }
      </p>
    </div>
  );
};

export default NutritionistProfile;

