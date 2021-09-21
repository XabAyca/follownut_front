import { useState } from 'react';
import { useDispatch } from "react-redux";
import { useParams } from 'react-router';
import { nutritionistResetPasswordFetch } from 'services/apiManager';

const NutritionistPasswordResetForm = () => {

  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const dispatch = useDispatch();
  const { tokenSlug } = useParams();
  console.log(tokenSlug)

  const handleNutritionistPasswordReset = async (e) => {
    e.preventDefault();
    if (email && newPassword) {
      const newNutritionistData = {
            email: email,
            password: newPassword,
            token: tokenSlug
      }
      await dispatch(nutritionistResetPasswordFetch(newNutritionistData))
    }
  }

  return (
    <div className="nutritionist-reset-password-form d-flex justify-content-center">
      <div className="form-container">
        <form onSubmit={ (e) => handleNutritionistPasswordReset(e) }>
          <label htmlFor="email" className="text-white pt-2">Email*</label>
          <input type="email" className="input-display" placeholder="Votre email"
          value={email} onChange={ (e) => setEmail(e.target.value) }/>
          <label htmlFor="password" className="text-white pt-2">Nouveau mot de passe*</label>
          <input type="password" className="input-display" placeholder="Votre nouveau mot de passe"
          value={newPassword} onChange={ (e) => setNewPassword(e.target.value) }/>
          <input type="submit" className="btn success-button register-btn mt-5 w-100" value="Valider" />
        </form>
      </div>
    </div>
  );
};

export default NutritionistPasswordResetForm;