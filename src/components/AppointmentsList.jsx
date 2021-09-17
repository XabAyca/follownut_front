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
    <div>
      {
        appointments.map((appointment) => {
          return (
            <div className="list-row">
              <p key={appointment.id}>
                Le {createDate(appointment.date)}
                { appointment.patient ? appointment.patient.last_name ?
                    ( <span> avec M./Mme {appointment.patient.last_name}</span>)
                  : (<span> Patient supprimé</span>) : (<span> avec un nouveau patient</span>)}
              </p>
              <div className="options">
                <i
                  class="far fa-eye"
                  onClick={() => setOpenModal(appointment)}
                ></i>
                <i
                  class="fas fa-trash-alt"
                  onClick={(e) => deleteAppointment(appointment, e)}
                ></i>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default AppointmentsList;