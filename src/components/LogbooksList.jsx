import React, { useState } from 'react';

const LogbooksList = ({ filteredLogbooks, setOpenModal }) => {
  const [logbooks, setLogbooks] = useState(filteredLogbooks)

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

  console.log(logbooks)
  
  return (
    <div className="patients-list text-primary-color">
      <div className="patient-list-header mx-3 p-2">
        <h2>Voici la liste de vos notes</h2>
      </div>
      <div className="details-container mx-3 p-3 col-lg-8 col-sm-12">
      <table className="table patient-table">
        <thead>
          <tr>
            <th scope="col">Réf.</th>
            <th scope="col">Date</th>
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
                  <td>{ logbook.title }
                  </td>
                  <td><i className="pointer-clickable far fa-eye" onClick={() => setOpenModal(logbook)}></i></td>
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
