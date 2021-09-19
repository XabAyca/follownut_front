import { useState } from 'react';
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { nutritionistLoginFetch } from 'services/apiManager';

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
    } else {
      alert("Merci de renseigner un email et un mot de passe")
    }
    document.querySelector(".error-modal").style.opacity = 1;
    document.querySelector(".error-modal").style.visibility = "visible";
  };

  return (
    <div className="nutritionist-signup-form d-flex justify-content-center">
      <div className="form-container">
      <h5 className="d-flex justify-content-center text-third-color pb-3">Connectez-vous et retrouvez vos patients</h5>
        <form onSubmit={ (e) => handleNutritionistLogin(e) }>
          <label htmlFor="email" className="text-white pt-2">Email*</label>
          <input type="email" className="form-input-display" placeholder="Votre email"
          value={email} onChange={ (e) => setEmail(e.target.value) }/>
          <label htmlFor="password" className="text-white pt-2">Mot de passe*</label>
          <input type="password" className="form-input-display" placeholder="Votre mot de passe"
          value={password} onChange={ (e) => setPassword(e.target.value) }/>
          <input type="submit" className="btn success-button mt-5 w-100" value="Se connecter" />
        </form>
        <Link to="/signup-nutritionist">
          <div className="d-flex justify-content-center mt-2 w-100">
            S'inscrire
          </div>
        </Link>
        <Link to="/nutritionist/forgotten-password">
          <div className="d-flex justify-content-center mt-2">Mot de passe oublié ?</div>
        </Link>
      </div>
    </div>

  );
};

export default NutritionistLoginForm;