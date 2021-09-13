import React from 'react';
import { nutritionistLoginFetch } from 'services/apiManager';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const NutritionistLoginForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();


  const handleNutritionistLogin = async (e) => {
    e.preventDefault();
    if (email && password) {
      const nutritionistData = {
        nutritionist: {
            email: email,
            password: password
        }
      }
      await dispatch(nutritionistLoginFetch(nutritionistData))
    }
};

  return (
    <div className="nutritionist-signup-form d-flex justify-content-center">
      <div className="form-container">
        <form onSubmit={ (e) => handleNutritionistLogin(e) }>
          <label htmlFor="email" className="text-white">Email*</label>
          <input type="email" className="form-input-display" placeholder="Votre email"
          value={email} onChange={ (e) => setEmail(e.target.value) }/>
          <label htmlFor="password" className="text-white">Mot de passe*</label>
          <input type="password" className="form-input-display" placeholder="Votre mot de passe"
          value={password} onChange={ (e) => setPassword(e.target.value) }/>
          <input type="submit" className="btn secondary-button mt-5 w-100" value="Se connecter" />
        </form>
        <div className="d-flex justify-content-center mt-2">
          <Link>Mot de passe oublié ?</Link>
        </div>
      </div>
    </div>

  );
};

export default NutritionistLoginForm;