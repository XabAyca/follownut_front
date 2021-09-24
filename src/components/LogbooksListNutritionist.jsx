import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const LogbooksListNutritionist = ({ filteredLogbooks, setOpenModal }) => {
  const [logbooks, setLogbooks] = useState(filteredLogbooks);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    filteredLogbooks && getFilterLogbooks();
  }, [filter, filteredLogbooks]);

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

  const getFilterLogbooks = () => {
    setLogbooks(filteredLogbooks.filter((logbook) => {
      return (
        logbook.patient.first_name.toLowerCase().includes(filter) ||
        logbook.patient.last_name.toLowerCase().includes(filter) ||
        logbook.patient.email.toLowerCase().includes(filter))
    }));
  }
  
  return (
    <div className="text-primary-color col-lg-8 col-sm-12">
      <div className="p-2">
        <div className="d-flex justify-content-between">
          <h2>Voici la liste des notes de vos patients</h2>
        </div>
        <div className="col-sm-5 col-md-4 col-lg-5 col-xl-3 d-flex bottom-search">
          <i className="fas fa-search"></i>
          <input type="text" className="search-input px-3" placeholder="Rechercher..." onChange={(e) => setFilter(e.target.value.toLowerCase())} />
        </div>
        <div className="details-container p-3 mt-3">
          { logbooks &&
            (logbooks.length > 0 ?
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
            : ( logbooks.length === 0 && filter === "" ?
            <p>Vous n'avez pas de note pour le moment</p>
            : <p>Aucun résultat ne correspond à votre recherche</p>)
            )
          }
        </div>
      </div>
    </div>
  );
};

export default LogbooksListNutritionist;
