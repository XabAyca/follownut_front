import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logbooksFetch } from 'services/apiManager';
import Cookies from "js-cookie";
import Loading from 'components/Loading';
import SidebarNutritionist from 'components/SidebarNutritionist';
import LogbooksListNutritionist from 'components/LogbooksListNutritionist';
import LogbookModal from 'components/LogbookModal';

const Logbooks = () => {

  const [logbooksPatient, setlogbooksPatient] = useState(); 
  const [currentLogbook, setCurrentLogbook] = useState(null);

  const nutritionist_id = parseInt(Cookies.get('nutritionist_id_cookie'));
 
  const logbooks = useSelector(state => state.logbooks) 
  const dispatch = useDispatch()

  const getLogbooks = () => {
    if (logbooks.logbooks) {
      let logs = logbooks.logbooks
        .filter((logbook) => {
          return (
            logbook.patient.nutritionist_id === nutritionist_id
          )
        })
        .filter((logbook) => {
          return (
            logbook.is_shared === true
          )
        })
        setlogbooksPatient(logs)
    }
  }

  useEffect(() => { 
    dispatch(logbooksFetch()); 
  }, []);

  useEffect(() => {
    getLogbooks();
    console.log(logbooksPatient)
  },[logbooks])
  
  const openModal = (logbook) => {
    setCurrentLogbook(logbook)
    let modal = document.querySelector(".logbook-modal");
    modal.style.opacity = 1;
    modal.style.visibility = 'visible';
  }

  return (
    <div className="dashboard-page page-padding">
      <div className="dashboard-page-left">
        <SidebarNutritionist /> 
        <LogbookModal logbook={currentLogbook} />
      </div>
      <div className="dashboard-page-right">
        <div className="d-flex justify-content-center py-5">
          {logbooksPatient ?  
            <LogbooksListNutritionist 
              filteredLogbooks={logbooksPatient} 
              setOpenModal={openModal}
            /> :
            <Loading />
          } 
        </div>
      </div>
    </div>
  );
};

export default Logbooks;