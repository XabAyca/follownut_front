import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { patientsFetch } from 'services/apiManager';

const AppointmentCreateForm = () => {
  const dispatch = useDispatch()
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


  return (
    <form className="appointment-form">
      <select name="patient" required>
        <option>Patient</option>
        {
          sortedPatients &&
          sortedPatients.map((patient) => {
            return (
              <option value={patient.id}>
                {patient.last_name ? patient.last_name : patient.email}
              </option>
            );
          })
        }
      </select>
      <input type="datetime-local" placeholder="Date et heure" required />
      <div className="data">
        <input type="number" placeholder="Graisse viscéral" required />
        <input type="number" placeholder="Graisse viscéral" required />
        <input type="number" placeholder="Masse grasse" required />
        <input type="number" placeholder="Taille" required />
        <input type="number" placeholder="Poids" required />
      </div>
      <textarea placeholder="Compte-rendu" />
      <input type="button" value="Créer"></input>
    </form>
  );
};

export default AppointmentCreateForm;