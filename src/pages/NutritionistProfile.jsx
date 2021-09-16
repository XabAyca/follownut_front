import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { nutritionistsFetch } from 'services/apiManager';
import Cookies from "js-cookie";
import Loading from 'components/Loading';
import SidebarNutritionist from 'components/SidebarNutritionist';
import { Link } from 'react-router-dom';

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

    <div className="dashboard-nutritionist">
    <div className="dashboard-nutritionist-left">
      <SidebarNutritionist/>
    </div>
    <div className="dashboard-nutritionist-right">
      <div className="container rounded bg-white">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center ">
              <img className="rounded-circle mt-5" width="150px" height="150" 
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
                  <h4 className="text-right">Nutritionist Profile</h4>
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
                    <i class="fas fa-plus-circle"></i>
                    Edit Profile
                  </Link>
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

