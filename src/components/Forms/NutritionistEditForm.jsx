import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateNutritionistFetch } from 'services/apiManager';

const NutritionistEditForm = ({nutritionistData}) => {
  const {first_name, last_name, email, phone_number, avatar, slug_calendly, api_key} = nutritionistData

  const [fname, setFname] = useState(first_name);
  const [lname, setLname] = useState(last_name);
  const [mail, setMail] = useState(email);
  const [pnumber, setPnumber] = useState(phone_number);
  const [profilePic, setProfilePic] = useState(avatar);
  const [calendlyAccount, setCalendlyAccount] = useState(slug_calendly);
  const [apiKey, setApiKey] = useState(api_key);
  const [pword, setPword] = useState();
  const [pwordConfirmation, setPwordConfirmation] = useState();

  const dispatch = useDispatch();


  const updateDataNutritionist = () => {
    const data = {
      nutritionist: {
        first_name: fname,
        last_name: lname,
        email: mail,
        phone_number: pnumber,
        avatar: profilePic,
        slug_calendly: calendlyAccount,
        api_key: apiKey,
        password: pword,
        password_confirmation: pwordConfirmation
      },
    };

    dispatch(updateNutritionistFetch(data))
  }

  return (
    <form className="col-md-5 border-right" onSubmit={updateDataNutritionist}>
        <div className="p-3 py-5">
          <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Réglage du profil</h4>
          </div>
          <div className="row mt-2">
              <div className="col-md-6">
                <label className="labels">Nom</label>
                <input type="text" className="form-input-display" placeholder={lname} value={lname} onChange={(e) => setLname(e.target.value)} />
              </div>
              <div className="col-md-6">
                <label className="labels">Prénom</label>
                <input type="text" className="form-input-display" placeholder={fname} value={fname} onChange={(e) => setFname(e.target.value)} />
              </div>
          </div>
          <div className="row mt-3">
          <div className="col-md-12">
              <label className="labels">Email</label>
              <input type="text" className="form-input-display" placeholder={mail} value={mail} onChange={(e) => setMail(e.target.value)} />
            </div>
            <div className="col-md-12">
              <label className="labels">Numero de tel</label>
              <input type="text" className="form-input-display" placeholder={pnumber} value={pnumber} onChange={(e) => setPnumber(e.target.value)} />
            </div>
            <div className="col-md-12">
              <label className="labels">Compte Calendly</label>
              <input type="text" className="form-input-display" placeholder={calendlyAccount} value={calendlyAccount} onChange={(e) => setCalendlyAccount(e.target.value)} />
            </div>
            <div className="col-md-12">
              <label className="labels">clef d'authentification</label>
              <input type="text" className="form-input-display" placeholder={apiKey} value={apiKey} onChange={(e) => setApiKey(e.target.value)} />
            </div>
            <div className="col-md-12">
              <label className="labels">Mot de passe</label>
              <input type="text" className="form-input-display" placeholder="" value={pword} onChange={(e) => setPword(e.target.value)} />
            </div>
            <div className="col-md-12">
              <label className="labels">Confirmation de mot de passe</label>
              <input type="text" className="form-input-display" placeholder="" value={pwordConfirmation} onChange={(e) => setPwordConfirmation(e.target.value)} />
            </div>          
          </div>
          <div className="mt-5 text-center">
          <input type="submit" value="Sauvegarder" />
          </div>
        </div>
    </form>
  );
};

export default NutritionistEditForm;