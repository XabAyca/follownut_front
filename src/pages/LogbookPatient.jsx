import React from 'react';
import SidebarPatient from 'components/SidebarPatient';

const LogbookPatient = () => {
  return (
    <div className="dashboard-page page-padding">
      <div className="dashboard-page-left">
        <SidebarPatient />
      </div>
      <div className="dashboard-page-right">
        <div className="m-5">
          Page logbook pour les patients
        </div>
      </div>
    </div>
  );
};

export default LogbookPatient;