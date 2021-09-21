import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteAppointmentFetch } from 'services/apiManager';

const AppointmentsListNutritionist = ({ filteredAppointments, setOpenModal }) => {
  const dispatch = useDispatch()
  const [appointments, setAppointments] = useState(filteredAppointments)
  const [filter, setFilter] = useState("");
  
  const createDate = (el) => {
    let date = new Date(el);
    return date.toLocaleDateString("fr", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: false,
      timeZone:"UTC",
    });
  };

  const deleteAppointment = (appointment, e) => {
    e.preventDefault()
    if (
      window.confirm(
        "Vous êtes sur le point de supprimer le compte-rendu. Êtes vous sur ?"
      )
    ) {
      setAppointments([...appointments.filter((el) => el !== appointment)]);
      dispatch(deleteAppointmentFetch(appointment.id))
    }
  }

  useEffect(() => {
    filteredAppointments && getFilterAppointments();
  }, [ filter, filteredAppointments ]);

  const getFilterAppointments = () => {
    setAppointments(filteredAppointments.filter((appointment) => {
      return(appointment.patient.first_name.toLowerCase().includes(filter) ||
      appointment.patient.last_name.toLowerCase().includes(filter) ||
      appointment.patient.email.toLowerCase().includes(filter))
    }));
  }

  return (
    <div className="patients-list text-primary-color col-lg-8 col-sm-12">
      <div className="patient-list-header p-2">
        <div className="patient-list-header-first">
          <h2>Voici la liste de vos rendez-vous</h2>
        </div>
        <input
          type="text"
          placeholder="Recherche..."
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      <div className="details-container p-3">
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
            {appointments.map((appointment) => {
              return (
                <tr key={appointment.id}>
                  <th scope="row" key={appointment.id}>
                    {appointment.id}
                  </th>
                  <td>{createDate(appointment.date)}</td>
                  <td>
                    {appointment.patient ? (
                      appointment.patient.last_name ? (
                        <span>M./Mme {appointment.patient.last_name}</span>
                      ) : (
                        <span> Inconnu</span>
                      )
                    ) : (
                      <span> Patient supprimé </span>
                    )}
                  </td>
                  <td>
                    <i
                      className="pointer-clickable far fa-eye"
                      onClick={() => setOpenModal(appointment)}
                    ></i>
                  </td>
                  <td>
                    <i
                      className="pointer-clickable fas fa-trash-alt"
                      onClick={(e) => deleteAppointment(appointment, e)}
                    ></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppointmentsListNutritionist;