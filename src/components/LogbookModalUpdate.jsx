import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateLogbook, logbooksFetch } from 'services/apiManager';

const LogbookModalUpdate = ({logbook}) => {

  const [titleNote, setTitleNote] = useState(logbook ? logbook.title : null); 
  const [contentNote, setContentNote] = useState(logbook ? logbook.content : null);
  const [is_sharedNote, setIs_shareNote] = useState(logbook ? logbook.is_shared : null);
  const dispatch = useDispatch();

  const closeModal = () => {
    let modal = document.querySelector(".update-logbook-modal");
    modal.style.opacity = 0;
    modal.style.visibility = "hidden";
  }

  const updateNote = (e) => {
    e.preventDefault()

    const data = {
      logbook: {
        title: titleNote,
        content: contentNote,
        is_shared: is_sharedNote,
      },
    };
  
    dispatch(updateLogbook(data, logbook.id));
    setTimeout(() => {
      dispatch(logbooksFetch())
    }, 500)
    window.location.reload()
  }
  
  return (

    <div className="update-logbook-modal">
      <i className="pointer-clickable fas fa-times" onClick={closeModal}></i>
      <div className="content p-3 ">
      {logbook &&
        <div className="p-3">
          <h1 className="text-primary-color">Editer une note</h1>
          <form className="appointment-form text-primary-color" onSubmit={updateNote}>
            <div className="d-flex row justify-content-between py-2">
              <div className="col-lg-6 col-sm-12 my-2">
                <label>Titre</label>
                <input type="text" className="input-display" placeholder={titleNote} value={titleNote} onChange={(e) => setTitleNote(e.target.value)} required/>
              </div>
            </div>
            <label>Votre note</label>
            <textarea type="text" className="input-display" placeholder={contentNote} value={contentNote} onChange={(e) => setContentNote(e.target.value)} required />
            <div className="d-flex my-2">
              <input type="checkbox" checked={is_sharedNote} onChange={(e) => setIs_shareNote(e.target.checked)} />
              <label className="labels align-self-center mx-2">  Partager cette note avec mon nutritioniste ?</label>
            </div>
            <input type="submit" value="Sauvegarder" className="btn success-button my-3 col-lg-3 col-sm-12" />
          </form>
        </div>
      }
      </div>
    </div>

  );
};

export default LogbookModalUpdate;