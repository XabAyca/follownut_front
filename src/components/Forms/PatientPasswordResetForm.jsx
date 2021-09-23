import ErrorsModalPawd from 'components/ErrorsModalPawd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from 'react-router';
import { patientResetPasswordFetch } from 'services/apiManager';

const PatientPasswordResetForm = () => {

  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const dispatch = useDispatch();
  const { tokenSlug } = useParams();
  const reset = useSelector((state) => state.patient);
  const history = useHistory();


  const handlePatientPasswordReset = async (e) => {
    e.preventDefault();
    if (email && newPassword) {
      const newPatientData = {
        email: email,
        password: newPassword,
        token: tokenSlug
      }
      await dispatch(patientResetPasswordFetch(newPatientData))
    }
  };

  useEffect(() => {
    document.querySelector(".error-modal").style.opacity = 0;
    document.querySelector(".error-modal").style.visibility = "hidden";
    isValidated();
  }, [reset]);

  const isValidated = () => {
    if (reset.resetPassword.status) {
      alert("Mot de passe réinitialisé");
      setTimeout(() => {
        history.push("/login-nutritionist");
      }, 1000);
    }
    if (reset.error) {
      document.querySelector(".error-modal").style.opacity = 1;
      document.querySelector(".error-modal").style.visibility = "visible";
    }
  };

  return (
    <div className="patient-reset-password-form d-flex justify-content-center">
      <ErrorsModalPawd errors={reset.error} />
      <div className="form-container">
        <form onSubmit={(e) => handlePatientPasswordReset(e)}>
          <label htmlFor="email" className="text-white-color pt-2">
            Email*
          </label>
          <input
            type="email"
            className="input-display"
            placeholder="Votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password" className="text-white-color pt-2">
            Nouveau mot de passe*
          </label>
          <input
            type="password"
            className="input-display"
            placeholder="Votre nouveau mot de passe"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input
            type="submit"
            className="btn success-button register-btn mt-5 w-100"
            value="Valider"
          />
        </form>
      </div>
    </div>
  );
};

export default PatientPasswordResetForm;