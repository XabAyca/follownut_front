 import React, { useEffect, useState } from 'react';
import SidebarPatient from 'components/SidebarPatient';
import { logbooksFetch } from 'services/apiManager';
import { useSelector, useDispatch } from 'react-redux';
import Cookies from "js-cookie";
import Loading from 'components/Loading';
import LogbooksList from 'components/LogbooksList';
import LogbookModal from 'components/LogbookModal';
import LogbookModalCreate from 'components/LogbookModalCreate';
import LogbookModalUpdate from 'components/LogbookModalUpdate';

const LogbookPatient = () => {
  const [logbooksPatient, setLogbooksPatient] = useState();
  const [currentLogbook, setCurrentLogbook] = useState(null);

  const patient_id = parseInt(Cookies.get('patient_id_cookie'));

  const logbooks = useSelector(state => state.logbooks)
  const dispatch = useDispatch() 

  const getLogbooksPatient = () => {
    if (logbooks.logbooks) {
      let logs = logbooks.logbooks
        .filter((logbook) => {
          return logbook.patient_id === patient_id
        })
        .sort((a, b) => b.updated_at.localeCompare(a.updated_at))
      setLogbooksPatient(logs)
    }
  };

  useEffect(() => { 
    dispatch(logbooksFetch());
  }, []);
  
  useEffect(() => {
    getLogbooksPatient();
  },[logbooks])


  const openModal = (logbook) => {
    setCurrentLogbook(logbook)
    let modal = document.querySelector(".logbook-modal");
    modal.style.opacity = 1;
    modal.style.visibility = 'visible';
  }

  const openCreateModal = () => {
    let modal = document.querySelector(".create-logbook-modal");
    modal.style.opacity = 1;
    modal.style.visibility = 'visible';
  }

  const openUpdateModal = (logbook) => {
    setCurrentLogbook(logbook);
    if (currentLogbook) {
      let modal = document.querySelector(".update-logbook-modal");
      modal.style.opacity = 1;
      modal.style.visibility = 'visible';
    }
  }

  return (
    <div className="dashboard-page page-padding">
      <div className="dashboard-page-left">
        <SidebarPatient />
        <LogbookModal logbook={currentLogbook} />
        <LogbookModalCreate />

        { currentLogbook ?
          <LogbookModalUpdate logbook={currentLogbook}/> : ""
        }
      </div>
      <div className="dashboard-page-right">
        <div className="d-flex justify-content-center py-5">
        {logbooksPatient ?  
            <LogbooksList
              filteredLogbooks={logbooksPatient}
              setOpenModal={openModal}
              setOpenCreateModal={openCreateModal}
              setOpenUpdateModal={openUpdateModal}
            /> :
            <Loading />
          } 
        </div>
      </div>
    </div>
  );
};

export default LogbookPatient;