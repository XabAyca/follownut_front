import PatientSignupForm from 'components/Forms/PatientSignupForm';

const SignupPatient = () => {
  return (
    <div className="signup-patient">
      <div className="default-background d-flex align-items-center">
        <div className="d-flex justify-content-center col-12 row">
          <h1 className="d-flex justify-content-center text-white my-2">Bienvenue sur Follownut'</h1>
          <PatientSignupForm />
        </div>
      </div>
    </div>
  );
};

export default SignupPatient;