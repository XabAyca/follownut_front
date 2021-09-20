import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteLogbookFetch } from 'services/apiManager';


const LogbooksList = ({ filteredLogbooks, setOpenModal, setOpenCreateModal, setOpenUpdateModal }) => {
  const [logbooks, setLogbooks] = useState(filteredLogbooks);
  const dispatch = useDispatch(); 

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

  const deleteLogbook = (logbook, e) => {
    e.preventDefault()
    if (
      window.confirm(
        "Vous êtes sur le point de supprimer cette note. Êtes vous sur ?"
      )
    ) {
      setLogbooks([...logbooks.filter((el) => el !== logbook)]);
      dispatch(deleteLogbookFetch(logbook.id))
    }
  }
  
  return (
    <div className="text-primary-color col-lg-8 col-sm-6">
      <div className="p-2">
        <div className="d-flex justify-content-between">
          <h2>Voici la liste de vos notes</h2>
          <div className="d-flex align-items-center">
            <button className="btn outline-primary-button" onClick={() => setOpenCreateModal()}>
              <span className="mx-1">Rédiger</span>
              <i className="mx-1 far fa-edit"></i>
            </button>
          </div>
        </div>
        <div className="details-container p-3">
          {
            logbooks.length > 0 ? 
            <table className="table patient-table">
            <thead>
              <tr>
                <th scope="col">Réf.</th>
                <th scope="col">Date</th>
                <th scope="col">Titre</th>
                <th scope="col">Public</th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
            {
                logbooks.map((logbook) => {
                  return (
                    <tr>
                      <th scope="row" key={logbook.id}>{logbook.id}</th>
                      <td>{createDate(logbook.updated_at)}</td>
                      <td>{logbook.title}</td>
                      <td>{logbook.is_shared ? "oui" : "non"}</td>
                      <td>
                        <i className="pointer-clickable far fa-eye" onClick={() => setOpenModal(logbook)}></i>
                      </td>
                      <td>
                        <i className="pointer-clickable fas fa-pencil-alt" onClick={() => setOpenUpdateModal(logbook)}></i>
                      </td>
                      <td>
                        <i className="pointer-clickable fas fa-trash-alt" onClick={(e) => deleteLogbook(logbook, e)}></i>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
          : <p>Vous n'avez pas encore de note</p>
          }
        </div>
      </div>
    </div>
  );
};

export default LogbooksList;
