import PatientLoginForm from 'components/PatientLoginForm';
import React from 'react';

const SignupPatient = () => {
  return (
    <div className="login-patient">
      <div className="default-background d-flex align-items-center py-5">
        <div className="d-flex justify-content-center col-12 my-5">
          <PatientLoginForm />
        </div>
      </div>
    </div>
  );
};

export default SignupPatient;