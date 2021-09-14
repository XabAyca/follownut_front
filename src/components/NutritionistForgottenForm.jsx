import { useState } from 'react';
import { useDispatch } from "react-redux";
import { nutritionistPasswordResetFetch } from 'services/apiManager';

const NutritionistForgottenForm = () => {
  
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');

  const handleNutritionistForgottenPassword = async (e) => {
    e.preventDefault();
    if (email) {
      const nutritionistResetEmail = {
        email: email,
      }
      await dispatch(nutritionistPasswordResetFetch(nutritionistResetEmail))
    } else {
      alert("Veuillez renseigner un email")
    }
  };
  
  return (
    <div className="nutritionist-forgotten-form d-flex justify-content-center">
      <div className="form-container">
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