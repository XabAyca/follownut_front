import { patientRegisterFetch } from 'services/apiManager';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const PatientSignupForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const dispatch = useDispatch();


  const handlePatientSignup = async (e) => {
    e.preventDefault();
    if (email && password && passwordConfirmation) {
      const patientData = {
        patient: {
          email: email,
          password: password,
          password_confirmation: passwordConfirmation
        }
      }
      await dispatch(patientRegisterFetch(patientData))
    } else {
      alert("Merci de renseigner un email, un mot de passe et de répéter votre mot de passe")
    }
    document.querySelector(".error-modal").style.opacity = 1;
    document.querySelector(".error-modal").style.visibility = "visible";
  };

  return (
    <div className="patient-signup-form d-flex justify-content-center">
      <div className="form-container">
      <h5 className="d-flex justify-content-center text-secondary-color pb-3">Remplissez le formulaire ci-dessous pour vous inscrire comme patient</h5>
        <form onSubmit={ (e) => handlePatientSignup(e) }>
          <label htmlFor="email" className="text-white pt-2">Email*</label>
          <input type="email" className="form-input-display" placeholder="Votre email"
          value={email} onChange={ (e) => setEmail(e.target.value) }/>
          <label htmlFor="password" className="text-white pt-2">Mot de passe*</label>
          <input type="password" className="form-input-display" placeholder="Votre mot de passe"
          value={password} onChange={ (e) => setPassword(e.target.value) }/>
          <label htmlFor="password-confirmation" className="text-white pt-2">Confirmation de mot de passe*</label>
          <input type="password" className="form-input-display" placeholder="Confirmez votre mot de passe"
          value={passwordConfirmation} onChange={ (e) => setPasswordConfirmation(e.target.value) }/>
          <input type="submit" className="btn success-button register-btn mt-5 w-100" value="S'enregistrer" />
        </form>
        <Link to="/login-patient">
          <div className="d-flex justify-content-center mt-2 w-100">
            Se connecter
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PatientSignupForm;