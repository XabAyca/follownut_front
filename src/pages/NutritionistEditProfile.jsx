// CONFIG IMPORTS
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cookies from "js-cookie";

// SERVICES IMPORTS
import { nutritionistsFetch } from 'services/apiManager';

// COMPONENTS IMPORTS
import NutritionistEditForm from "components/Forms/NutritionistEditForm";
import SidebarNutritionist from 'components/SidebarNutritionist';

// ASSETS IMPORTS
import profileDrawing from 'assets/images/nutritionist-profile-drawing.svg'




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
    <div className="page-padding bg-purple d-flex align-items-center justify-content-center">
      <div className="bg-white-color details-container p-4 col-xl-6 col-lg-8 col-md-8 col-sm-12 d-flex row my-5">
        <div className="py-4 d-flex justify-content-center">
          <img className="rounded-circle" width="240px" src={profileDrawing} alt="profile"/>
        </div>
        <div className="">
          {
            nutritionist &&
            <NutritionistEditForm nutritionistData={nutritionist} />
          }
        </div>
      </div>
    </div>
  );
};

export default NutritionistEditProfile;