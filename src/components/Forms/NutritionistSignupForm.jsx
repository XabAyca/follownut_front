import React from 'react';
import { nutritionistRegisterFetch } from 'services/apiManager';
import { useState } from 'react';
import { useDispatch } from "react-redux";

const NutritionistSignupForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const dispatch = useDispatch();


  const handleNutritionistSignup = async (e) => {
    e.preventDefault();
    if (email && password && passwordConfirmation) {
      const nutritionistData = {
        nutritionist: {
            email: email,
            password: password,
            password_confirmation: passwordConfirmation
        }
      }
      await dispatch(nutritionistRegisterFetch(nutritionistData))
    }
};

  return (
    <div className="nutritionist-signup-form d-flex justify-content-center">
      <div className="form-container">
        <form onSubmit={ (e) => handleNutritionistSignup(e) }>
          <label htmlFor="email" className="text-white">Email*</label>
          <input type="email" className="form-input-display" placeholder="Votre email"
          value={email} onChange={ (e) => setEmail(e.target.value) }/>
          <label htmlFor="password" className="text-white">Mot de passe*</label>
          <input type="password" className="form-input-display" placeholder="Votre mot de passe"
          value={password} onChange={ (e) => setPassword(e.target.value) }/>
          <label htmlFor="password-confirmation" className="text-white">Confirmation de mot de passe*</label>
          <input type="password" className="form-input-display" placeholder="Confirmez votre mot de passe"
          value={passwordConfirmation} onChange={ (e) => setPasswordConfirmation(e.target.value) }/>
          <input type="submit" className="btn btn-light register-btn mt-5 w-100" value="S'enregistrer" />
        </form>
      </div>
    </div>

  );
};

export default NutritionistSignupForm;