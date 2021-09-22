import React from 'react';
import { useDispatch } from 'react-redux';
import { createLogbook, logbooksFetch } from 'services/apiManager';

const LogbookModalCreate = () => {
  const dispatch = useDispatch();

  const closeModal = () => {
    let modal = document.querySelector(".create-logbook-modal");
    modal.style.opacity = 0;
    modal.style.visibility = "hidden";
  }

  const createNote = (e) => {
    e.preventDefault()
    let title = document.querySelector('#logbook-title').value
    let content = document.querySelector('#logbook-content').value
    let is_shared = document.querySelector('#logbook-is_shared').checked
      
    const data = {
      logbook: {
        title: title,
        content: content,
        is_shared: is_shared,
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
        <div className="create-appointment-form">
          <h1 className="text-primary-color">Rédiger une nouvelle note</h1>
          <form className="appointment-form text-primary-color" onSubmit={createNote}>
            <div className="d-flex row justify-content-between py-2">
              <div className="col-lg-6 col-sm-12 my-2">
                <label>Titre</label>
                <input className="input-display" type="text" id="logbook-title"  placeholder="Le titre de votre note" required />
              </div>
            </div>
            <label>Votre note</label>
            <textarea placeholder="De quoi souhaitez vous prendre note ?" id="logbook-content" className="input-display textarea-display" required />
            <div className="d-flex my-2">
              <input type="checkbox" id="logbook-is_shared" className="align-self-center" />
              <label className="labels align-self-center mx-2">  Partager cette note avec mon nutritioniste ?</label>
            </div>
            <input type="submit" value="Sauvegarder" className="btn success-button my-3 col-lg-3 col-sm-12" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogbookModalCreate;