import React from 'react';

const ErrorsModal = ({ errors }) => {
  
  const closeModal = () => {
    let modal = document.querySelector('.error-modal')
    modal.style.visibility="hidden"
    modal.style.opacity=0
  }

  return (
    <div className="error-modal">

      <i class="fas fa-times" onClick={closeModal}></i>
      { errors &&
        errors.map((error) => {
          return <p className="error-text">{error && error.detail}</p>;
        })
      }
      
    </div>
  );
};

export default ErrorsModal;