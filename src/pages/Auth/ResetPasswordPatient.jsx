// COMPONENT IMPORTS
import PatientPasswordResetForm from 'components/Forms/PatientPasswordResetForm';

const ResetPasswordPatient = () => {
  return (
    <div className="forgotten-password-nutritionist">
      <div className="jumbotron jb-forgotten d-flex align-items-center py-5">
        <div className="d-flex justify-content-center col-12 my-5 row">
        <h1 className="d-flex justify-content-center text-white-color my-4">Choisissez votre nouveau mot de passe</h1>
          <PatientPasswordResetForm />
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPatient;