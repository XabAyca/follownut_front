import { useState } from 'react';
import { useDispatch } from "react-redux";
import { nutritionistPasswordForgottenFetch } from 'services/apiManager';

const NutritionistForgottenForm = () => {
  
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');

  const handleNutritionistForgottenPassword = async (e) => {
    e.preventDefault();
    if (email) {
      const nutritionistResetEmail = {
        email: email,
      }
      await dispatch(nutritionistPasswordForgottenFetch(nutritionistResetEmail))
    } else {
      alert("Veuillez renseigner un email")
    }
  };
  
  return (
    <div className="nutritionist-forgotten-form d-flex justify-content-center">
      <div className="form-container">
      <p className="text-white">Cher nutritioniste, renseignez votre email pour recevoir un lien et réinitialiser votre mot de passe.</p>
        <form onSubmit={ (e) => handleNutritionistForgottenPassword(e) }>
          <label htmlFor="email" className="text-white">Email*</label>
          <input type="email" className="form-input-display" placeholder="Votre email"
          value={email} onChange={ (e) => setEmail(e.target.value) }/>
          <input type="submit" className="btn secondary-button mt-5 w-100" value="Envoyer" />
        </form>
      </div>
    </div>
  );
};

export default NutritionistForgottenForm;