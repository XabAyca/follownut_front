import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updatePatientFetch } from 'services/apiManager';


const PatientEditForm = ({patientData}) => {
  const {first_name, last_name, email} = patientData

  const [fname, setFname] = useState(first_name);
  const [lname, setLname] = useState(last_name);
  const [mail, setMail] = useState(email);
  const [pword, setPword] = useState();
  const [pwordConfirmation, setPwordConfirmation] = useState();

  const dispatch = useDispatch();


  const updateDataPatient = () => {
    const data = {
      patient: {
        first_name: fname,
        last_name: lname,
        email: mail,
        password: pword,
        password_confirmation: pwordConfirmation
      },
    };

    dispatch(updatePatientFetch(data))
  }

  return (
    <>
    <form className="col-md-5 border-right" onSubmit={updateDataPatient}>
        <div className="p-3 py-5">
          <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Réglage du profil</h4>
          </div>
          <select class="form-select" aria-label="Default select example">
            <option selected>Selectionnez votre nutritionniste</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
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
    </>
  )
}

export default PatientEditForm;