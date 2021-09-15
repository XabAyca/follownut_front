import React from 'react';

const AppointmentModal = ({ appointment }) => {
  
  const closeModal = () => {
    let modal = document.querySelector(".appointment-modal");
    modal.style.opacity =0;
    modal.style.visibility = "hidden";
  }

  return (
    <div className="appointment-modal">
      <i class="fas fa-times" onClick={closeModal}></i>
      <div className="content">
        <p>{appointment && appointment.date}</p>
      </div>
    </div>
  );
};

export default AppointmentModal;