import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { nutritionistsFetch } from 'services/apiManager';
import Cookies from "js-cookie";
import NutritionistEditForm from "components/Forms/NutritionistEditForm";


const NutritionistEditProfile = () => {
  const [nutritionist, setNutritionist] = useState();
  const nutritionist_id = parseInt(Cookies.get('nutritionist_id_cookie'));

  const nutritionists = useSelector(state => state.nutritionists)
  const dispatch = useDispatch()

  const getNutritionist = () => {
    if (nutritionists.nutritionist) {
      let nutritionist = nutritionists.nutritionist
        .filter((nutritionist) => {
          return nutritionist.id === nutritionist_id
        })
      setNutritionist(nutritionist[0])
    }
  }

  useEffect(() => {
    dispatch(nutritionistsFetch());
  },[])

  useEffect(() => {
    getNutritionist();
  }, [nutritionists]);


  return (
    <>
      <div className="background-of-edit-profile page-padding">
        <div className="container rounded bg-white mb-5 content-edit-profile">
          <div className="row">
            <div className="col-md-3 border-right">
              <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                <img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="profile" />
              </div>
            </div>
            {
              nutritionist &&
              <NutritionistEditForm nutritionistData={nutritionist} />
            }
          </div>
        </div>
      </div>
    </>
  )
};

export default NutritionistEditProfile;