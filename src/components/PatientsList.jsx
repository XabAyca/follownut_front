import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Loading from './Loading';
import { nutritionistFetch } from 'services/apiManager';
import { Link } from 'react-router-dom';


const PatientsList = ({ setOpenModal }) => {
  const [nutritionistPatients, setNutritionistPatients] = useState();
  const [filter, setFilter] = useState("");
  const nutritionist = useSelector((state) => state.nutritionists.currentNutritionist);
  const dispatch = useDispatch();

  const getNutritionistPatients = () => {
    setNutritionistPatients(nutritionist.patients.filter((patient) => {
      return(patient.first_name.toLowerCase().includes(filter) ||
      patient.last_name.toLowerCase().includes(filter) ||
      patient.email.toLowerCase().includes(filter))
    }));
  };

  useEffect(() => {
    dispatch(nutritionistFetch());
  }, []);

  useEffect(() => {
    nutritionist && getNutritionistPatients();
  }, [nutritionist,filter]);

  return (

    <div className="text-primary-color col-lg-8 col-sm-6">
      <div className="p-2">
        <div className="d-flex justify-content-between">
          <h2>Voici la liste de vos patients</h2>
          <div className=" d-flex align-items-center">
            <Link
              to="/nutritionist-dashboard/create-patient"
              className="btn outline-primary-button"
            >
              <span className="mx-1">Ajouter</span>
              <i className="mx-1 fas fa-user-plus ml-3"></i>
            </Link>
            
          </div>
        </div>
        <div className="col-sm-5 col-md-4 col-lg-5 col-xl-3 d-flex bottom-search">
          <i className="fas fa-search"></i>
          <input
            type="text"
            className="search-input px-3"
            placeholder="Rechercher..."
            onChange={(e) => setFilter(e.target.value.toLowerCase())}
          />
        </div>
      </div>
      <div className="details-container p-3">
        <table className="table patient-table">
          <thead>
            <tr>
              {/* <th scope="col">Réf.</th> */}
              <th scope="col">Prénom</th>
              <th scope="col">Nom</th>
              <th scope="col">Email</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {nutritionistPatients ? (
              nutritionistPatients.map((patient) => {
                return (
                  <tr key={patient.id}>
                    {/* <th scope="row" key={patient.id}>{patient.id}</th> */}
                    <td>
                      {patient.last_name ? patient.last_name : <span>?</span>}
                    </td>
                    <td>
                      {patient.first_name ? patient.first_name : <span>?</span>}
                    </td>
                    <td>{patient.email ? patient.email : <span>?</span>}</td>
                    <td>
                      <i
                        className="pointer-clickable far fa-eye"
                        onClick={() => setOpenModal(patient)}
                      ></i>
                    </td>
                  </tr>
                );
              })
            ) : (
              <Loading color={"blue"} />
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientsList;