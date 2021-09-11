import React from 'react';
import PatientForgottenForm from 'components/PatientForgottenForm';

const ForgottenPasswordNutritionist = () => {
  return (
    <div className="forgotten-password-nutritionist">
      <div className="default-background d-flex align-items-center py-5">
        <div className="d-flex justify-content-center col-12 my-5">
          <PatientForgottenForm />
        </div>
      </div>
    </div>
  );
};

export default ForgottenPasswordNutritionist;