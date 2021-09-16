import { patientLoginFetch } from 'services/apiManager';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const PatientLoginForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();


  const handlePatientLogin = async (e) => {
    e.preventDefault();
    document.querySelector('.error-modal').style.opacity=1
    document.querySelector('.error-modal').style.visibility="visible"
    if (email && password) {
      const patientData = {
        patient: {
            email: email,
            password: password
        }
      }
      await dispatch(patientLoginFetch(patientData))
    } else {
      alert("Merci de renseigner un email et un mot de passe")
    }
  };

  return (
    <div className="patient-signup-form d-flex justify-content-center">
      <div className="form-container">
        <form onSubmit={ (e) => handlePatientLogin(e) }>
          <label htmlFor="email" className="text-white pt-2">Email*</label>
          <input type="email" className="form-input-display" placeholder="Votre email"
          value={email} onChange={ (e) => setEmail(e.target.value) }/>
          <label htmlFor="password" className="text-white pt-2">Mot de passe*</label>
          <input type="password" className="form-input-display" placeholder="Votre mot de passe"
          value={password} onChange={ (e) => setPassword(e.target.value) }/>
          <input type="submit" className="btn success-button mt-5 w-100" value="Se connecter" />
        </form>
        <Link to="/signup-patient">
          <div className="d-flex justify-content-center mt-2 w-100">
            S'inscrire
          </div>
        </Link>
        <Link to="/patient/forgotten-password">
          <div className="d-flex justify-content-center mt-2">Mot de passe oublié ?</div>
        </Link>
      </div>
    </div>
  );
};

export default PatientLoginForm;