import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { nutritionistsFetch } from 'services/apiManager';
import Cookies from "js-cookie";
import SidebarNutritionist from 'components/SidebarNutritionist';
import { Link } from 'react-router-dom';
import { nutritionistLogout } from 'services/apiManager';
import { deleteNutritionistFetch } from 'services/apiManager';
import Loading from 'components/Loading';

import profileDrawing from 'assets/images/nutritionist-profile-drawing.svg'



const NutritionistProfile = () => {
  const [nutritionist, setNutritionist] = useState();
  const nutritionist_id = parseInt(Cookies.get('nutritionist_id_cookie'));
  const nutritionists = useSelector(state => state.nutritionists)
  const dispatch = useDispatch() 

  const getNutritionist = () => {
    if (nutritionists.nutritionist) {
      let nutritionist = nutritionists.nutritionist.filter((nutritionist) => {
        return nutritionist.id === nutritionist_id
      })
      setNutritionist(nutritionist[0])
    }
  }

  useEffect(() => { 
    getNutritionist();
  }, [nutritionists]);
  
  useEffect(() => {
    dispatch(nutritionistsFetch());
  },[])


  const handleLogOut = () => {
    Cookies.remove('nutritionist_token_cookie');
    Cookies.remove("nutritionist_id_cookie");
    dispatch(nutritionistLogout()); 
    window.location.reload();
  }

  const deleteProfileNutritionist = (e) => {
    e.preventDefault()
    if (window.confirm("Vous êtes sur le point de supprimer votre compte. Êtes vous sur ?")) {
      dispatch(deleteNutritionistFetch());
      handleLogOut();
    }
  }

  return (
    <div className="dashboard-page page-padding">
      <div className="dashboard-page-left">
        <SidebarNutritionist />
      </div>
      <div className="background-of-edit-profile">
        <div className="details-container-alt d-flex justify-content-around p-5 col-8">
          <div className="align-self-center">
            <img className="rounded-circle" width="400px" src={profileDrawing} alt="profile"/>
          </div>
          <div className="align-self-center">
            {
              nutritionist && nutritionist.first_name && nutritionist.last_name ?
              <h1 className="text-right mx-0">
                {nutritionist.first_name} {nutritionist.last_name}
              </h1> 
              : <h1>Nom Prénom</h1>
            }
            <h5 className="d-flex">
              <i className="align-self-center fas fa-envelope"></i>
              <div className="align-self-center mx-2">{ nutritionist ? nutritionist.email  : <Loading color={"blue"} />} </div>
            </h5>
            <h5 className="d-flex">
              <i className="align-self-center fas fa-phone"></i>
              <div className="align-self-center mx-2">{ nutritionist ? nutritionist.phone_number  : <Loading color={"blue"} />} </div>
            </h5>
            <h5 className="d-flex">
              <i className="align-self-center fas fa-calendar-check"></i>
              <div className="align-self-center mx-2">{ nutritionist ? nutritionist.slug_calendly  : <Loading color={"blue"} />} </div>
            </h5>
            <hr />
            <div className="my-3">
              <Link exact to="/nutritionist-edit-profile" className="sidebar-nutritionist-link text-dark">
                <div className="btn success-button text-white-color w-100 my-1">Modifier mon profil</div>
              </Link>
              <form onSubmit={deleteProfileNutritionist} >
                <input className="btn danger-button text-white-color w-100 my-1" type="submit"  value="Supprimer mon compte" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionistProfile;

