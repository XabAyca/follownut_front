// CONFIG IMPORTS
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { updateNutritionistFetch } from 'services/apiManager';
import { Link } from 'react-router-dom';


const NutritionistMustCompleteProfile = ({nutritionistData}) => {
  const {first_name, last_name, email, phone_number, avatar, slug_calendly, api_key} = nutritionistData

  const [fname, setFname] = useState(first_name);
  const [lname, setLname] = useState(last_name);
  const [mail, setMail] = useState(email);
  const [pnumber, setPnumber] = useState(phone_number);
  const [profilePic, setProfilePic] = useState(avatar);
  const [calendlyAccount, setCalendlyAccount] = useState(slug_calendly);
  const [pword, setPword] = useState();
  const [pwordConfirmation, setPwordConfirmation] = useState();
  const history = useHistory()
  const dispatch = useDispatch();


  const updateDataNutritionist = (e) => {
    e.preventDefault()
    if (pwdCorrect()) {
      const data = {
        nutritionist: {
          first_name: fname,
          last_name: lname,
          email: mail,
          phone_number: pnumber,
          avatar: profilePic,
          slug_calendly: calendlyAccount,
          password: pword,
          password_confirmation: pwordConfirmation,
        },
      };
      dispatch(updateNutritionistFetch(data));
      setTimeout(() => {
        history.push("/nutritionist-profile");
      }, 300);
    } else {
      alert("Les mots de passe doivent être identique");
    } 
  }

  const pwdCorrect = () => {
    if (pword === pwordConfirmation) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <form className="border-right" onSubmit={updateDataNutritionist}>
      <div className="p-3 py-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
            <h1 className="text-right">Éditer votre profil</h1>
        </div>

        <div className="row my-2">
          <div className="my-1 col-md-6">
            <label className="labels">Nom</label>
            <input type="text" className="input-display" placeholder={lname} value={lname} onChange={(e) => setLname(e.target.value)} />
          </div>
          <div className="my-1 col-md-6">
            <label className="labels">Prénom</label>
            <input type="text" className="input-display" placeholder={fname} value={fname} onChange={(e) => setFname(e.target.value)} />
          </div>
          <div className="my-1 col-md-6">
            <label className="labels">Email</label>
            <input type="text" className="input-display" placeholder={mail} value={mail} onChange={(e) => setMail(e.target.value)} />
          </div>
          <div className="my-1 col-md-6">
            <label className="labels">Numero de tel</label>
            <input type="text" className="input-display" placeholder={pnumber} value={pnumber} onChange={(e) => setPnumber(e.target.value)}/>
          </div>
          <div className="my-1 col-md-12">
            <label className="labels">Compte Calendly</label>
            <input type="text" className="input-display" placeholder={calendlyAccount} value={calendlyAccount} onChange={(e) => setCalendlyAccount(e.target.value)}/>
          </div>
          <div className="my-1 col-md-12">
            <label className="labels">Photo (url)</label>
            <input type="text" className="input-display" placeholder={profilePic} value={profilePic} onChange={(e) => setProfilePic(e.target.value)}/>
          </div>           
        </div>
        <div className=" my-2 text-center">
          <input type="submit" value="Sauvegarder" className="btn success-button text-center patient-edit-profile-button" />
        </div>
      </div>
    </form>
  );
};

export default NutritionistMustCompleteProfile;