import React from 'react';
import NutritionistForgottenForm from 'components/NutritionistForgottenForm';

const ForgottenPasswordPatient = () => {
  return (
    <div className="forgotten-password-patient">
      <div className="default-background d-flex align-items-center py-5">
        <div className="d-flex justify-content-center col-12 my-5">
          <NutritionistForgottenForm />
        </div>
      </div>
    </div>
  );
};

export default ForgottenPasswordPatient;