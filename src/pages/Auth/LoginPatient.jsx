import PatientLoginForm from 'components/Forms/PatientLoginForm';
import React from 'react';

const SignupPatient = () => {
  return (
    <div className="login-patient">
      <div className="jumbotron-auth d-flex align-items-center py-5">
        <div className="d-flex justify-content-center col-12 my-5 row">
          <h1 className="d-flex justify-content-center text-white my-2">Bon retour parmi nous !</h1>
          <PatientLoginForm />
        </div>
      </div>
    </div>
  );
};

export default SignupPatient;