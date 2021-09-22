 import React, { useEffect, useState } from 'react';
import SidebarPatient from 'components/SidebarPatient';
import { logbooksFetch } from 'services/apiManager';
import { useSelector, useDispatch } from 'react-redux';
import Cookies from "js-cookie";
import Loading from 'components/Loading';
import LogbooksList from 'components/LogbooksList';
import LogbookModal from 'components/LogbookModal';
import CreateLogbookModal from 'components/CreateLogbookModal';

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
        setLogbooksPatient(logs)
    }
  }

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


  return (
    <div className="dashboard-page page-padding">
      <div className="dashboard-page-left">
        <SidebarPatient />
        <LogbookModal logbook={currentLogbook} />
        <CreateLogbookModal />
      </div>
      <div className="dashboard-page-right">
        <div className="m-5">
          {logbooksPatient ?  
            <LogbooksList
              filteredLogbooks={logbooksPatient}
              setOpenModal={openModal}
              setOpenCreateModal={openCreateModal}
            /> :
            <Loading />
          } 
        </div>
      </div>
    </div>
  );
};

export default LogbookPatient;