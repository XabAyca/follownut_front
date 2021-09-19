import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteLogbookFetch } from 'services/apiManager';


const LogbooksList = ({ filteredLogbooks, setOpenModal, setOpenCreateModal }) => {
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
    <div className="patients-list text-primary-color">
      <div className="patient-list-header mx-3 p-2">
        <h2>Voici la liste de vos notes</h2>
        <button onClick={() => setOpenCreateModal()}>Ajouter une note</button>
      </div>
      <div className="details-container mx-3 p-3 col-lg-8 col-sm-12">
      <table className="table patient-table">
        <thead>
          <tr>
            <th scope="col">Réf.</th>
            <th scope="col">Date</th>
            <th scope="col">Titre</th>
            <th scope="col">Public</th>
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
                    <i className="pointer-clickable fas fa-trash-alt" onClick={(e) => deleteLogbook(logbook, e)}></i>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default LogbooksList;
