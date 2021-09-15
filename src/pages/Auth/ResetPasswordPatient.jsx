import PatientPasswordResetForm from 'components/Forms/PatientPasswordResetForm';

const ResetPasswordPatient = () => {
  return (
    <div className="forgotten-password-nutritionist">
      <div className="default-background d-flex align-items-center py-5">
        <div className="d-flex justify-content-center col-12 my-5">
          <PatientPasswordResetForm />
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPatient;