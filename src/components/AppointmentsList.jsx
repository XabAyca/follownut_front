import { set } from 'js-cookie';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteAppointmentFetch } from 'services/apiManager';

const AppointmentsList = ({ filteredAppointments, setOpenModal }) => {
  const dispatch = useDispatch()
  const [appointments, setAppointments] = useState(filteredAppointments)
  
  const createDate = (el) => {
    let date = new Date(el);
    return date.toLocaleDateString("fr", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: false,
    });
  };

  const deleteAppointment = (appointment,e) => {
    e.preventDefault()
    setAppointments([...appointments.filter((el)=> el!==appointment)]);
    dispatch(deleteAppointmentFetch(appointment.id))
  }

  return (
    <div className="patients-list text-primary-color">
      <div className="patient-list-header mx-3 p-2">
        <h2>Voici la liste de vos rendez-vous</h2>
      </div>
      <div className="details-container mx-3 p-3 col-lg-8 col-sm-12">
      <table class="table patient-table">
        <thead>
          <tr>
            <th scope="col">Réf.</th>
            <th scope="col">Date</th>
            <th scope="col">Patient</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
        {
            appointments.map((appointment) => {
              return (
                <tr>
                  <th scope="row" key={appointment.id}>{appointment.id}</th>
                  <td>{createDate(appointment.date)}</td>
                  <td>{ appointment.patient ? appointment.patient.last_name ?
                        ( <span>M./Mme {appointment.patient.last_name}</span>)
                      : (<span> Patient supprimé</span>) : (<span> Inconnu </span>)}
                  </td>
                  <td><i class="far fa-eye" onClick={() => setOpenModal(appointment)}></i></td>
                  <td><i class="fas fa-trash-alt" onClick={(e) => deleteAppointment(appointment, e)}></i></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default AppointmentsList;