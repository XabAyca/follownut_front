import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const LogbooksListNutritionist = ({ filteredLogbooks, setOpenModal }) => {
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

  
  return (
    <div className="text-primary-color col-lg-8 col-sm-6">
      <div className="p-2">
        <div className="d-flex justify-content-between">
          <h2>Voici la liste des notes de vos patients</h2>
        </div>
        <div className="details-container p-3">
        <table className="table patient-table">
          <thead>
            <tr>
              <th scope="col">Réf.</th>
              <th scope="col">Date</th>
              <th scope="col">Patient</th>
              <th scope="col">Titre</th>
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
                    <td>M./Mme {logbook.patient.last_name}</td>
                    <td>{logbook.title}</td>
                    <td>
                      <i className="pointer-clickable far fa-eye" onClick={() => setOpenModal(logbook)}></i>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
};

export default LogbooksListNutritionist;
