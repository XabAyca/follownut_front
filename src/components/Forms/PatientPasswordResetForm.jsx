import { useState } from 'react';
import { useDispatch } from "react-redux";

const PatientPasswordResetForm = () => {

  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const dispatch = useDispatch();

  const handlePatientPasswordReset = async (e) => {
    e.preventDefault();
    if (email && newPassword) {
      const newPatientData = {
        patient: {
            email: email,
            password: password,
            token: token
        }
      }
      await dispatch(patientResetPasswordFetch(newPatientData))
    }
  }

  return (
    <div className="patient-reset-password-form d-flex justify-content-center">
      <div className="form-container">
        <form onSubmit={ (e) => handlePatientPasswordReset(e) }>
          <label htmlFor="email" className="text-white">Email*</label>
          <input type="email" className="form-input-display" placeholder="Votre email"
          value={email} onChange={ (e) => setEmail(e.target.value) }/>
          <label htmlFor="password" className="text-white">Nouveau mot de passe*</label>
          <input type="password" className="form-input-display" placeholder="Votre nouveau mot de passe"
          value={newPassword} onChange={ (e) => setNewPassword(e.target.value) }/>
          <input type="submit" className="btn btn-light register-btn mt-5 w-100" value="S'enregistrer" />
        </form>
      </div>
    </div>
  );
};

export default PatientPasswordResetForm;