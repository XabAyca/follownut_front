import React from 'react';
import { Link } from 'react-router-dom';

const SidebarPatient = () => {
  return (
    <div className="sidebar-patient-dashboard">
      <Link
        to="/patient-dashboard"
        className="sidebar-patient-dashboard-link">
        <i class="fas fa-chart-line"></i>
        Relevés
      </Link>
      <Link
        to="/patient-appointment-reports"
        className="sidebar-patient-dashboard-link">
        <i class="far fa-calendar-alt"></i>
        Rendez-vous
      </Link>
      <Link
        to="/patient-logbook"
        className="sidebar-patient-dashboard-link">
        <i class="far fa-clipboard"></i>
        Bloc-note
      </Link>
    </div>
  )
}

export default SidebarPatient;