import React from 'react';

const AppointmentModal = ({ appointment }) => {
  
  const closeModal = () => {
    let modal = document.querySelector(".appointment-modal");
    modal.style.opacity =0;
    modal.style.visibility = "hidden";
  }

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

  return (
    <div className="appointment-modal">
      <i clasName="pointer-clickable fas fa-times" onClick={closeModal}></i>
      <div className="content">
        {appointment && (
          <>
            <div className="date">
              <p>{createDate(appointment.date)}</p>
              <p>
                {" "}
                Patient:{" "}
                {appointment.patient.last_name
                  ? appointment.patient.last_name +
                    " " +
                    appointment.patient.first_name
                  : appointment.patient.email}
              </p>
            </div>

            <div className="data">
              <p>Poids : {appointment.weight} kg</p>
              <p>Taille : {appointment.height.toFixed(2)} m</p>
              <p>IMC : {appointment.BMI.toFixed(1)}</p>
              <p>Masse grasse : {appointment.body_fat} %</p>
              <p>Masse musculaire : {appointment.muscle_mass} %</p>
              <p>Graisse viscerale : {appointment.visceral_fat} %</p>
            </div>
            <div className="text-content">
              <p>{appointment.content}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AppointmentModal;