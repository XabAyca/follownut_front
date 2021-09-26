// CONFIG IMPORTS
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

// SERVICES IMPORTS
import { deleteAppointmentFetch } from 'services/apiManager';


const AppointmentsListNutritionist = ({ filteredAppointments, setOpenModal }) => {
  const dispatch = useDispatch();
  const [appointments, setAppointments] = useState(filteredAppointments);
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
      timeZone: "UTC",
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
  }, [filter, filteredAppointments]);

  const getFilterAppointments = () => {
    setAppointments(filteredAppointments.filter((appointment) => {
      return (appointment.patient.first_name.toLowerCase().includes(filter) ||
        appointment.patient.last_name.toLowerCase().includes(filter) ||
        appointment.patient.email.toLowerCase().includes(filter))
    }));
  }

  return (
    
    <div className="text-primary-color col-lg-8 col-sm-12">
      <div className="p-2">
        <div className="d-flex justify-content-between">
          <h2>Voici la liste de vos rendez-vous passés</h2>
          <div className="d-flex align-items-center">
            <Link
              to="/nutritionist-dashboard/appointments"
              className="btn outline-primary-button"
            >
              <span className="mx-1">Ajouter</span>
              <i className="mx-1 fas fa-calendar-check"></i>
            </Link>
          </div>
        </div>
        <div className="col-sm-5 col-md-4 col-lg-5 col-xl-3 d-flex bottom-search">
          <i className="fas fa-search"></i>
          <input
            type="text"
            className="search-input px-3"
            placeholder="Rechercher..."
            onChange={(e) => setFilter(e.target.value.toLowerCase())}
          />
        </div>
      </div>
      <div className="details-container bg-purple p-3">
        { appointments && 
          ( appointments.length > 0 ?
            <table className="table patient-table">
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
                          <span> Profil supprimé </span>
                        )}
                      </td>
                      <td>
                        <i className="pointer-clickable far fa-eye" onClick={() => setOpenModal(appointment)}></i>
                      </td>
                      <td>
                        <i className="pointer-clickable fas fa-trash-alt" onClick={(e) => deleteAppointment(appointment, e)}></i>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            : (appointments.length === 0 && filter === "" ?
              <p>Vous n'avez aucun rendez-vous passé</p>
              : <p>Aucun résultat ne correspond à votre recherche</p>
            )
            
          )
        }


      </div>
    </div>
  );
};

export default AppointmentsListNutritionist;