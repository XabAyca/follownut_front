import React from 'react';
import { useDispatch } from 'react-redux';
import { createLogbook, logbooksFetch } from 'services/apiManager';

const CreateLogbookModal = () => {
  const dispatch = useDispatch();

  const closeModal = () => {
    let modal = document.querySelector(".create-logbook-modal");
    modal.style.opacity = 0;
    modal.style.visibility = "hidden";
  }

  const createNote = (e) => {
    e.preventDefault()
    let title = document.querySelector('#title').value
    let content = document.querySelector('#content').value
      
    const data = {
      logbook: {
        title: title,
        content: content,
      },
    };
  
    dispatch(createLogbook(data));
    setTimeout(() => {
      dispatch(logbooksFetch())
    }, 500)
    window.location.reload()
  }

  return (
    <div className="create-logbook-modal">
      <i className="pointer-clickable fas fa-times" onClick={closeModal}></i>

      <div className="content p-3 ">
          <div className="p-3">
            
            <form className="col-md-5 border-right" onSubmit={createNote}>
              <div className="col-md-6">
                <label className="labels">Titre</label>
                <input type="text" className="form-input-display" id="title" placeholder="Titre de la note" required/>
              </div>
              <div className="col-md-6">
                <label className="labels">Contenu</label>
                <input type="text" className="form-input-display" id="content" placeholder="Votre contenu ici" required/>
              </div>

              <div className="mt-5 text-center">
                <input type="submit" value="Sauvegarder" className="btn success-button text-center patient-edit-profile-button w-100 mt-4" />
              </div>
            </form>
            
          </div>
      </div>
    </div>
  );
};

export default CreateLogbookModal;