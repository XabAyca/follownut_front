import ErrorsModal from 'components/ErrorsModal';
import PatientSignupForm from 'components/Forms/PatientSignupForm';
import { useSelector } from 'react-redux';

const SignupPatient = () => {

  const errors = useSelector((state) => state.patient.error.errors);

  return (
    <div className="signup-patient">
      <ErrorsModal errors={errors} />
      <div className="jumbotron jb-signup d-flex align-items-center">
        <div className="d-flex justify-content-center col-12 row">
          <h1 className="d-flex justify-content-center text-white my-2">
            Bienvenue sur Follownut'
          </h1>
          <PatientSignupForm />
        </div>
      </div>
    </div>
  );
};

export default SignupPatient;