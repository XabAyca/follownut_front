import NutritionistLoginForm from 'components/Forms/NutritionistLoginForm';
import React from 'react';

const LoginNutritionist = () => {
  return (
    <div className='login-nutritionist'>
      <div className="default-background d-flex align-items-center py-5">
        <div className="d-flex justify-content-center col-12 my-5">
          <NutritionistLoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginNutritionist;