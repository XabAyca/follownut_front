import NutritionistSignupForm from 'components/Forms/NutritionistSignupForm';
import React from 'react';

const SignupNutritionist = () => {
  return (
    <div className="signup-nutritionist">
      <div className="default-background d-flex align-items-center py-5">
        <div className="d-flex justify-content-center col-12 my-5">
          <NutritionistSignupForm />
        </div>
      </div>
    </div>
  );
};

export default SignupNutritionist;
