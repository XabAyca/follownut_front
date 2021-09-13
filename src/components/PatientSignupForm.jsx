import React from 'react';
import { patientRegisterFetch } from 'services/apiManager';
import { useState } from 'react';
import { useDispatch } from "react-redux";

const PatientSignupForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const dispatch = useDispatch();


  const handlePatientLogin = async (e) => {
    e.preventDefault();
    if (email && password && passwordConfirmation) {
      const patientData = {
        user: {
            email: email,
            password: password,
            password_confirmation: passwordConfirmation
        }
      }
      await dispatch(patientRegisterFetch(patientData))
    }
};

  return (
    <div className="patient-signup-form">
      <div className="form-container">
        <form onSubmit={ (e) => handlePatientLogin(e) }>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email" className="text-white">Email*</label>
              <input type="email" className="form-control" placeholder="Your email"
              value={email} onChange={ (e) => setEmail(e.target.value) }/>
            </div>
            <div className="form-group">
              <label htmlFor="password" className="text-white">Password*</label>
              <input type="password" className="form-control" placeholder="Your password"
              value={password} onChange={ (e) => setPassword(e.target.value) }/>
            </div>
            <div className="form-group">
              <label htmlFor="password-confirmation" className="text-white">Password Confirmation*</label>
              <input type="password" className="form-control" placeholder="Confirm your password please"
              value={passwordConfirmation} onChange={ (e) => setPasswordConfirmation(e.target.value) }/>
            </div>
          </div>
          <input type="submit" className="btn btn-light register-btn mt-5 w-100" value="Sign Up" />
        </form>
      </div>
    </div>

  );
};

export default PatientSignupForm;