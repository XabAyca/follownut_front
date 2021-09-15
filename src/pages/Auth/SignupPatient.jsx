import PatientSignupForm from 'components/Forms/PatientSignupForm';
import React from 'react';

const SignupPatient = () => {
  return (
    <div className="signup-patient">
      <div className="default-background d-flex align-items-center py-5">
        <div className="d-flex justify-content-center col-12 my-5">
          <PatientSignupForm />
        </div>
      </div>
    </div>
  );
};

export default SignupPatient;