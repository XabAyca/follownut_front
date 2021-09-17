import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { nutritionistsFetch } from 'services/apiManager';
import Cookies from "js-cookie";
import Loading from 'components/Loading';
import SidebarNutritionist from 'components/SidebarNutritionist';
import { Link } from 'react-router-dom';
import { nutritionistLogout } from 'services/apiManager';
import { deleteNutritionistFetch } from 'services/apiManager';

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


  const handleLogOut = () => {
    Cookies.remove('nutritionist_token_cookie');
    Cookies.remove("nutritionist_id_cookie");
    dispatch(nutritionistLogout()); 
    window.location.reload();
  }

  const deleteProfileNutritionist = (e) => {
    if (window.confirm("Vous êtes sur le point de supprimer votre compte. Êtes vous sur ?")) {
      dispatch(deleteNutritionistFetch());
      handleLogOut();
    }
  }

  return (

    <div className="dashboard-page">
    <div className="dashboard-page-left">
      <SidebarNutritionist/>
    </div>
    <div className="dashboard-page-right">
      <div className="container">
        <div className="row nutritionist-details my-5 py-5 col-lg-12 col-sm-12">
          <div className="col-md-6 border-right">
            <div className="d-flex flex-column align-items-center text-center ">
              <img className="rounded-circle mt-5" width="120px" 
              src=
              {
                nutritionist ?  
                nutritionist.avatar : "https://images.pexels.com/photos/5733422/pexels-photo-5733422.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              }
              alt="profile"/>
              <span className="font-weight-bold">
                {
                  nutritionist ? 
                  nutritionist.last_name : <Loading color={"blue"} />
                }
              </span>
              <span className="text-black-50">                    
                {
                  nutritionist ? 
                  nutritionist.email : <Loading color={"blue"} />
                }
              </span>
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3">
              <div className="mb-5">
                  <h4 className="text-right">Nutritionniste Profile</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <p>
                    <strong>Prenom : </strong>
                    {
                      nutritionist ? 
                      nutritionist.first_name : <Loading color={"blue"} />
                    }
                  </p>
                </div>
                <div className="col-md-6">
                  <p>
                    <strong>Nom : </strong>
                    {
                      nutritionist ? 
                      nutritionist.last_name : <Loading color={"blue"} />
                    }
                  </p>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <p>
                    <strong>E-mail : </strong>
                    {
                      nutritionist ? 
                      nutritionist.email : <Loading color={"blue"} />
                    } 
                  </p>
                </div>
                <div className="col-md-6">
                  <p>
                    <strong>Number : </strong>
                    {
                      nutritionist ? 
                      nutritionist.email : <Loading color={"blue"} />
                    } 
                  </p>

                </div>
                <Link
                    exact
                    to="/nutritionist-edit-profile"
                    className="sidebar-nutritionist-link text-dark"
                  >
                    <i className="pointer-clickable fas fa-plus-circle"></i>
                    Edit Profile
                  </Link>
                  <form onSubmit={deleteProfileNutritionist} >
                      <input type="submit" value="Supprimer mon compte" />
                  </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>








  );
};

export default NutritionistProfile;

