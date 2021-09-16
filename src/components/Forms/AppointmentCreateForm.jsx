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

  useEffect(() => {
    dispatch(patientsFetch())
  }, [])

  useEffect(() => {
    patients && sortPatients()
  }, [patients])
  
  const sortPatients = () => {
    setSortedPatients(patients.sort((a, b) => a.email.localeCompare(b.email)));
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
      },
    };
    dispatch(createAppointment(data))

    setTimeout(() => {
      dispatch(appointmentsFetch())
    }, 300)
    
    setTimeout(() => {
      history.push("/nutritionist-dashboard");
    }, 1000);
  };


  return (
    <form className="appointment-form" onSubmit={createDataAppointment}>
      <select name="patient" id="patient_id" required>
        <option>Liste patients</option>
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
        type="datetime-local"
        id="date"
        placeholder="Date et heure"
        required
      />

      <div className="data">
        <div className="data-content">
          <label>Graisse viscéral</label>
          <input
            type="number"
            id="visceral_fat"
            placeholder="Graisse viscéral"
            min="0"
            max="100"
            required
          />
        </div>
        <div className="data-content">
          <label>Masse musculaire</label>
          <input
            type="number"
            id="muscle_mass"
            placeholder="Masse musculaire"
            min="0"
            max="100"
            required
          />
        </div>
        <div className="data-content">
          <label>Masse grasse</label>
          <input
            type="number"
            id="body_fat"
            placeholder="Masse grasse"
            min="0"
            max="100"
            required
          />
        </div>
        <div className="data-content">
          <label>Taille</label>
          <input
            type="number"
            id="height"
            placeholder="Taille"
            min="0"
            max="2.5"
            step="0.01"
            required
          />
        </div>
        <div className="data-content">
          <label>Poids</label>
          <input
            type="number"
            id="weight"
            placeholder="Poids"
            min="0"
            max="250"
            step="0.1"
            required
          />
        </div>
      </div>
      <hr />
      <label>Compte-rendu</label>
      <textarea placeholder="Compte-rendu" id="content" required />
      <input type="submit" value="Créer" />
    </form>
  );
};

export default AppointmentCreateForm;