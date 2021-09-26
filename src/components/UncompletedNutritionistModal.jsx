// CONFIG IMPORTS
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// SERVICES IMPORTS
import { nutritionistFetch } from 'services/apiManager';

// COMPONENTS IMPORTS
import NutritionistMustCompleteProfile from './Forms/NutritionistMustCompleteProfile';

const UncompletedNutritionistModal = () => {
  const currentNutritionist = useSelector((state) => state.nutritionists.currentNutritionist);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(nutritionistFetch())
  }, [])

  return (
    <div className="read-modal visible-modal">
      <div className="content p-5 my-5">
        <h2>Vous devez compléter votre profil pour pouvoir utiliser FollowNut</h2>
          <NutritionistMustCompleteProfile nutritionistData={currentNutritionist} />
      </div>
    </div>
  );
};

export default UncompletedNutritionistModal;