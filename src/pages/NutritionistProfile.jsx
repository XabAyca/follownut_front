// CONFIG IMPORTS
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Cookies from "js-cookie";

// SERVICES IMPORTS
import { nutritionistsFetch, nutritionistLogout, deleteNutritionistFetch } from 'services/apiManager';

// COMPONENTS IMPORTS
import SidebarNutritionist from 'components/SidebarNutritionist';
import Loading from 'components/Loading';

// ASSETS IMPORTS
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
    <div className="page-padding bg-purple d-flex align-items-center justify-content-center">
    <div class="bg-white-color details-container py-4 col-xl-6 col-lg-8 col-md-8 col-sm-12 d-flex row align-items-center justify-content-center">
      <div class="py-4 col-xl-6 col-lg-6 col-md-10 col-sm-10 d-flex justify-content-center">
        <img className="rounded-circle" width="260px" src={profileDrawing} alt="profile"/>
      </div>
      <div class="col-xl-6 col-lg-6 col-md-10 col-sm-10 d-flex row justify-content-center">
        <h1 className="text-right mx-0">
          { nutritionist &&
            (
              nutritionist.first_name && nutritionist.last_name ? `${nutritionist.first_name + " " + nutritionist.last_name}` : "Prénom Nom"
            )
          }
        </h1>
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
          <div className="align-self-center details-break-line mx-2">{ nutritionist ? nutritionist.slug_calendly  : <Loading color={"blue"} />} </div>
        </h5>
        <div className="my-3">
          <Link exact to="/nutritionist-edit-profile">
            <div className="btn success-button text-white-color my-1">Éditer mon profil</div>
          </Link>
          <form onSubmit={deleteProfileNutritionist} >
            <input className="btn danger-button text-white-color my-1" type="submit"  value="Supprimer mon compte" />
          </form>
        </div>
      </div>
    </div>
  </div>
  );
};

export default NutritionistProfile;

