import ErrorModal from 'components/ErrorModal';
import NutritionistLoginForm from 'components/Forms/NutritionistLoginForm';
import React from 'react';
import { useSelector } from 'react-redux';

const LoginNutritionist = () => {
  const error = useSelector(state => state.nutritionists.error)

  return (
    <div className='login-nutritionist'>
      <ErrorModal error={error}/>
      <div className="jumbotron jb-login d-flex align-items-center py-5">
        <div className="d-flex justify-content-center col-12 my-5 row">
          <h1 className="d-flex justify-content-center text-white my-2">Bon retour parmi nous !</h1>
          <NutritionistLoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginNutritionist;