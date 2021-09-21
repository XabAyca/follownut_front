import PatientForgottenForm from 'components/Forms/PatientForgottenForm';

const ForgottenPasswordPatient = () => {
  return (
    <div className="forgotten-password-patient">
      <div className="jumbotron jb-forgotten d-flex align-items-center py-5">
        <div className="d-flex justify-content-center col-12 my-5 row">
          <h1 className="d-flex justify-content-center text-white my-4">Un petit oubli, ça arrive à tout le monde ...</h1>
          <PatientForgottenForm />
        </div>
      </div>
    </div>
  );
};

export default ForgottenPasswordPatient;