// CONFIG IMPORTS
import { useContext } from 'react';

// CONTEXTS IMPORTS
import { Pwa } from './context/InstallPwa';

const PwaModal = () => {
  const installPwa = useContext(Pwa)

  const closeModal = () => {
    let modal = document.querySelector('.pwa-modal')
    modal.style.visibility='hidden'
    modal.style.opacity=0
  }

  return (
    <div className="pwa-modal">
      <i className="fas fa-times" onClick={closeModal}></i>
      <p>Pour plus de rapidité installez notre application</p>
      <div>
        <i className="fas fa-download" onClick={installPwa}></i>
      </div>
    </div>
  );
};

export default PwaModal;