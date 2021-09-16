import { useState } from 'react';
import { useDispatch } from "react-redux";
import { patientPasswordForgottenFetch } from 'services/apiManager';

const PatientForgottenForm = () => {
  
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');

  const handlePatientForgottenForm = async (e) => {
    e.preventDefault();
    if (email) {
      const patientResetEmail = {
        email: email,
      }
      await dispatch(patientPasswordForgottenFetch(patientResetEmail))
    } else {
      alert("Veuillez renseigner un email")
    }
  };

  
  return (
    <div className="patient-forgotten-form d-flex justify-content-center">
      <div className="form-container">
      <p className="text-white">Cher patient, renseignez votre email pour recevoir un lien et réinitialiser votre mot de passe.</p>
        <form onSubmit={ (e) => handlePatientForgottenForm(e) }>
          <label htmlFor="email" className="text-white pt-2">Email*</label>
          <input type="email" className="form-input-display" placeholder="Votre email"
          value={email} onChange={ (e) => setEmail(e.target.value) }/>
          <input type="submit" className="btn success-button mt-5 w-100" value="Envoyer" />
        </form>
      </div>
    </div>
  );
};

export default PatientForgottenForm;