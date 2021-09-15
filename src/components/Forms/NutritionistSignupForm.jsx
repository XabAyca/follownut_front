import { nutritionistRegisterFetch } from 'services/apiManager';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

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
      <h5 className="d-flex justify-content-center text-secondary-color pb-3">Remplissez le formulaire ci-dessous pour vous inscrire comme nutritioniste</h5>
        <form onSubmit={ (e) => handleNutritionistSignup(e) }>
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
        <Link to="/login-nutritionist">
          <button className="d-flex justify-content-center mt-2 btn secondary-button w-100">
            Se connecter
          </button>
        </Link>
      </div>
    </div>

  );
};

export default NutritionistSignupForm;