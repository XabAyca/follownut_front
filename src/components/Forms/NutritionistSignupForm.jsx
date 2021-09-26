// CONFIG IMPORTS
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// SERVICES IMPORTS
import { nutritionistRegisterFetch } from 'services/apiManager';


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
    } else {
      alert("Merci de renseigner un email, un mot de passe et de répéter votre mot de passe")
    }
    document.querySelector(".error-modal").style.opacity = 1;
    document.querySelector(".error-modal").style.visibility = "visible";
  };

  return (
    <div className="nutritionist-signup-form d-flex justify-content-center">
      <div className="form-container bg-prim-transp">
      <h5 className="d-flex justify-content-center text-third-color py-1">Inscription nutritioniste</h5>
        <form onSubmit={ (e) => handleNutritionistSignup(e) }>
          <label htmlFor="email" className="text-white-color pt-2">Email*</label>
          <input type="email" className="input-display" placeholder="Votre email"
          value={email} onChange={ (e) => setEmail(e.target.value) }/>
          <label htmlFor="password" className="text-white-color pt-2">Mot de passe*</label>
          <input type="password" className="input-display" placeholder="Votre mot de passe"
          value={password} onChange={ (e) => setPassword(e.target.value) }/>
          <label htmlFor="password-confirmation" className="text-white-color pt-2">Confirmation de mot de passe*</label>
          <input type="password" className="input-display" placeholder="Confirmez votre mot de passe"
          value={passwordConfirmation} onChange={ (e) => setPasswordConfirmation(e.target.value) }/>
          <div className="my-4">
            <input type="submit" className="btn success-button register-btn w-100" value="S'enregistrer" /> 
            <Link to="/login-nutritionist">
              <div className="d-flex justify-content-center my-1 text-white-color w-100">
                Se connecter
              </div>
            </Link>
          </div>
        </form>
      </div>
    </div>

  );
};

export default NutritionistSignupForm;