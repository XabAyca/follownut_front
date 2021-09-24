const ErrorModal = ({ error }) => {
  
  const closeModal = () => {
    let modal = document.querySelector('.error-modal')
    modal.style.visibility="hidden"
    modal.style.opacity=0
  }

  return (
    <div className="error-modal">
      <i className="pointer-clickable fas fa-times" onClick={closeModal}></i>
      <p className='error-text'>{error && error}</p>
    </div>
  );
};

export default ErrorModal;