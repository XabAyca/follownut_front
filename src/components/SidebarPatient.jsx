import React from 'react';
import { Link } from 'react-router-dom';

const SidebarPatient = () => {
  return (
    <div className="sidebar-patient-dashboard">
      <Link
        exact
        to="/patient-dashboard"
        className="sidebar-patient-dashboard-link">
        <i class="fas fa-chart-line"></i>
        Relevés
      </Link>
      <Link
        exact
        to="/patient-dashboard"
        className="sidebar-patient-dashboard-link">
        <i class="far fa-clipboard"></i>
        Comptes-rendu
      </Link>
    </div>
  )
}

export default SidebarPatient;