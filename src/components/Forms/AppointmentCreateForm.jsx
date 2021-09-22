import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { appointmentsFetch } from 'services/apiManager';
import { createAppointment } from 'services/apiManager';
import { patientsFetch } from 'services/apiManager';

const AppointmentCreateForm = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const patients = useSelector(state => state.patient.patient)
  const [sortedPatients, setSortedPatients] = useState()
  const nutritionist_id = Cookies.get("nutritionist_id_cookie");

  useEffect(() => {
    dispatch(patientsFetch())
  }, [])

  useEffect(() => {
    patients && sortPatients()
  }, [patients])
  
  const sortPatients = () => {
    setSortedPatients(patients
      .filter((patient) => patient.nutritionist)
      .filter((patient) => patient.nutritionist.id === nutritionist_id)
      .sort((a, b) => a.email.localeCompare(b.email)));
  }

  const createDataAppointment = (e) => {
    e.preventDefault()
    let patient_id = document.querySelector('#patient_id').value
    let date = document.querySelector('#date').value
    let visceral_fat = document.querySelector('#visceral_fat').value
    let muscle_mass = document.querySelector('#muscle_mass').value
    let body_fat = document.querySelector('#body_fat').value
    let height = document.querySelector('#height').value
    let weight = document.querySelector('#weight').value
    let content = document.querySelector('#content').value
    
    const data = {
      appointment: {
        date: date,
        weight: weight,
        height: height,
        body_fat: body_fat,
        muscle_mass: muscle_mass,
        visceral_fat: visceral_fat,
        content: content,
        patient_id: patient_id,
        nutritionist_id: nutritionist_id,
      },
    };
    dispatch(createAppointment(data))

    setTimeout(() => {
      dispatch(appointmentsFetch())
    }, 500)
    history.push("/nutritionist-dashboard");
    window.location.reload()
  };

  return (
    <div className="create-appointment-form">
      <h1 className="text-primary-color">Rédiger un compte-rendu</h1>
      <form
        className="appointment-form text-primary-color"
        onSubmit={createDataAppointment}
      >
        <div className="col-lg-3 col-sm-12">
          <select
            name="patient"
            id="patient_id"
            className="form-select-display w-100 my-2"
            required
          >
            <option>Sélectionnez un patient</option>
            {sortedPatients &&
              sortedPatients.map((patient) => {
                return (
                  <option key={patient.id} value={patient.id}>
                    {patient.last_name ? patient.last_name : patient.email}
                  </option>
                );
              })}
          </select>
          <input
            className="form-input-display my-2"
            type="datetime-local"
            id="date"
            required
          />
        </div>

        <div className="d-flex row justify-content-between py-2">
          <div className="col-lg-2 col-sm-12">
            <label>Graisse viscérale</label>
            <input
              className="form-input-display"
              type="number"
              id="visceral_fat"
              placeholder="%"
              min="0"
              max="100"
              required
            />
          </div>
          <div className="col-lg-2 col-sm-12">
            <label>Masse musculaire</label>
            <input
              className="form-input-display"
              type="number"
              id="muscle_mass"
              placeholder="kilogrammes"
              min="0"
              max="100"
              required
            />
          </div>
          <div className="col-lg-2 col-sm-12">
            <label>Masse grasse</label>
            <input
              className="form-input-display"
              type="number"
              id="body_fat"
              placeholder="%"
              min="0"
              max="100"
              required
            />
          </div>
          <div className="col-lg-2 col-sm-12">
            <label>Taille</label>
            <input
              className="form-input-display"
              type="number"
              id="height"
              placeholder="mètres"
              min="0"
              max="2.5"
              step="0.01"
              required
            />
          </div>
          <div className="col-lg-2 col-sm-12">
            <label>Poids</label>
            <input
              className="form-input-display"
              type="number"
              id="weight"
              placeholder="kilogrammes"
              min="0"
              max="250"
              step="0.1"
              required
            />
          </div>
        </div>
        <hr className="my-4" />
        <label>Compte-rendu</label>
        <textarea
          placeholder="Formulez des recommandations à votre patient ..."
          id="content"
          className="form-input-display form-textarea-display"
          required
        />
        <input
          type="submit"
          value="Créer"
          className="btn success-button my-3 col-lg-3 col-sm-12"
        />
      </form>
    </div>
  );
};

export default AppointmentCreateForm;