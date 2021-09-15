import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { nutritionistsFetch } from 'services/apiManager';
import Cookies from "js-cookie";
import Loading from 'components/Loading';

const NutritionistProfile = () => {
  const [nutritionist, setNutritionist] = useState();
  const nutritionist_id = parseInt(Cookies.get('nutritionist_id_cookie'));

  const nutritionists = useSelector(state => state.nutritionists)
  const dispatch = useDispatch() 

  const getNutritionist = () => {
    dispatch(nutritionistsFetch());
    if (nutritionists.nutritionist) {
      let nutritionist = nutritionists.nutritionist.filter((nutritionist) => {
        return nutritionist.id === nutritionist_id
      })
      setNutritionist(nutritionist[0])
    }
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
          nutritionist ?  
          nutritionist.avatar : "https://images.pexels.com/photos/5733422/pexels-photo-5733422.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        }
        alt="avatar" />
      <p>
        <strong>Prenom</strong> : 
        {
          nutritionist ?
         nutritionist.first_name : <Loading color={"blue"} />
        }
      </p>
      <p>
        <strong>Nom</strong> : 
        {
          nutritionist ?
         nutritionist.last_name : <Loading color={"blue"} />
        }
      </p>
      <p>
        <strong>Email</strong> : 
        {
          nutritionist ?
         nutritionist.email : <Loading color={"blue"} />
        }
      </p>
      <p>
        <strong>Numero de tel</strong> :   
        {
          nutritionist ?
         nutritionist.phone_number : <Loading color={"blue"} />
        }
      </p>
      <p>
        <strong>Compte Calendly</strong> : 
        {
          nutritionist ?
         nutritionist.slug_calendly : <Loading color={"blue"} />
        }
      </p>
    </div>
  );
};

export default NutritionistProfile;

