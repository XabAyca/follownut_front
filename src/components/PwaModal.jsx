import React, { useContext } from 'react';
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
      <i class="fas fa-times" onClick={closeModal}></i>
      <p>Pour plus de rapidité installez notre application</p>
      <div>
        <i class="fas fa-download" onClick={installPwa}></i>
      </div>
    </div>
  );
};

export default PwaModal;