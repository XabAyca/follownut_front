// CONFIG IMPORTS
import { useSelector } from 'react-redux';

// COMPONENTS IMPORTS
import ErrorModal from 'components/ErrorModal';
import PatientLoginForm from 'components/Forms/PatientLoginForm';


const SignupPatient = () => {
  const error = useSelector(state => state.patient.error)

  return (
    <div className="login-patient">
      <ErrorModal error={error} />
      <div className="jumbotron jb-login d-flex align-items-center py-5">
        <div className="d-flex justify-content-center col-12 my-5 row">
          <h1 className="d-flex justify-content-center text-white-color my-2">
            Bon retour parmi nous !
          </h1>
          <PatientLoginForm />
        </div>
      </div>
    </div>
  );
};

export default SignupPatient;