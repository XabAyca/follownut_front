import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateLogbook, logbooksFetch } from 'services/apiManager';

const LogbookModalUpdate = ({logbook}) => {
  const logbookF = useSelector((state) => state.logbooks.logbook);
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
  }

  useEffect(() => {
    if (logbookF) {
      closeModal();
      window.location.reload();
    }
  }, [logbookF]);
  
  return (
    <div className="update-logbook-modal">
      <i className="pointer-clickable fas fa-times" onClick={closeModal}></i>

      <div className="content p-3 ">
          <div className="p-3">
          {logbook && 

            <form className="col-md-5 border-right" onSubmit={updateNote}>
              <div className="d-flex flex-column">
                <label className="labels">Titre</label>
                <input type="text" className="form-input-display" placeholder={titleNote} value={titleNote} onChange={(e) => setTitleNote(e.target.value)} required/>
              </div>
              <div className="d-flex flex-column mt-4">
                <label className="labels">Contenu</label>
                <input type="text" className="form-input-display" placeholder={contentNote} value={contentNote} onChange={(e) => setContentNote(e.target.value)} required/>
              </div>
              <div className="d-flex flex-column mt-4">
                <label className="labels">Partager cette note avec mon nutritioniste ?</label>
                <input type="checkbox" checked={is_sharedNote} onChange={(e) => setIs_shareNote(e.target.checked)}/>
              </div>

              <div className="mt-5 text-center">
                <input type="submit" value="Sauvegarder" className="btn success-button text-center patient-edit-profile-button w-100 mt-4" />
              </div>
            </form>
          }
          </div>
      </div>
    </div>
  );
};

export default LogbookModalUpdate;