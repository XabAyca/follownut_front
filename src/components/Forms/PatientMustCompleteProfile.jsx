// CONFIG IMPORTS
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

// SERVICES IMPORTS
import { updatePatientFetch } from 'services/apiManager';


const PatientMustCompleteProfile = ({patientData, nutritionists}) => {
  const {first_name, last_name, gender, date_of_birth, email} = patientData

  const [fname, setFname] = useState(first_name);
  const [nutritionistId, setNutritionistId] = useState();
  const [lname, setLname] = useState(last_name);
  const [sex, setSex] = useState(gender);
  const [dateOfBirth, setDateOfBirth] = useState(date_of_birth);
  const [mail, setMail] = useState(email);
  const [pword, setPword] = useState();
  const [pwordConfirmation, setPwordConfirmation] = useState();
  const dispatch = useDispatch();
  const history = useHistory()

  const updateDataPatient = (e) => {
    e.preventDefault()
    if (pwdCorrect()) {
      const data = {
        patient: {
          first_name: fname,
          nutritionist_id: nutritionistId,
          last_name: lname,
          gender: parseInt(sex),
          date_of_birth: dateOfBirth,
          email: mail,
          password: pword,
          password_confirmation: pwordConfirmation
        },
      };
      dispatch(updatePatientFetch(data))
      setTimeout(() => {
        history.push("/patient-profile");
      },300)  
    } else {
      alert("Les mots de passe doivent être identique")
    }
  }

  const pwdCorrect = () => {
    if (pword === pwordConfirmation) {
      return true
    } else {
      return false
    }
  }


  return (
    <form className="my-5" onSubmit={updateDataPatient}>
      <div className="d-flex justify-content-between align-items-center mb-3">
          <h1 className="text-right">Éditer votre profil</h1>
      </div>
      <select onChange={(e) => setNutritionistId(e.target.value)}className="input-display" aria-label="Default select example">
        <option selected>Selectionnez votre nutritionniste</option>
        {
          nutritionists.map((nutritionist) => {
            return nutritionist.last_name &&
              (
                <option value={nutritionist.id}>M. {nutritionist.last_name} {nutritionist.first_name && nutritionist.first_name}</option>
              )
          })
        }
      </select>
      <div className="row mt-2">
          <div className="col-md-6">
            <label className="labels">Nom</label>
            <input type="text" className="input-display" placeholder={lname} value={lname} onChange={(e) => setLname(e.target.value)} />
          </div>
          <div className="col-md-6">
            <label className="labels">Prénom</label>
            <input type="text" className="input-display" placeholder={fname} value={fname} onChange={(e) => setFname(e.target.value)} />
          </div>
      </div>
      <div className="row mt-2">
          <div className="col-md-6">
            <label className="labels">Sexe</label>
            <select className="input-display" name={sex} value={sex} onChange={(e) => setSex(e.target.value)}>
              <option value='0'>Non renseigné</option>
              <option value='1'>Homme</option>
              <option value='2'>Femme</option>
            </select>

          </div>
          <div className="col-md-6">
            <label className="labels">Date de naissance</label>
            <input type="date" className="input-display" placeholder={dateOfBirth} value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
          </div>
      </div>
      <div className="my-2 text-center">
        <input type="submit" value="Sauvegarder" className="btn success-button text-center patient-edit-profile-button mt-4" />
      </div>
    </form>
  );
};

export default PatientMustCompleteProfile;