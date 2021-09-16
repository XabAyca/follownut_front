import React from 'react';
import { Link } from 'react-router-dom';

const SidebarPatient = () => {
  return (
    <div className="sidebar-patient-dashboard">
      <Link
        exact
        to="/patient-dashboard"
        className="sidebar-patient-dashboard-link">
        <i class="fas fa-calendar-check"></i>
        Comptes-rendu
      </Link>
    </div>
  )
}

export default SidebarPatient;