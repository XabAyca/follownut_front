import React from 'react';
import { Link } from 'react-router-dom';

const SidebarPatient = () => {
  return (
    <div className="sidebar-patient-dashboard mx-2">
      <Link
        exact
        to="/nutritionist-dashboard"
        className="sidebar-patient-dashboard-link">
        <i class="fas fa-calendar-check"></i>
        Comptes-rendu
      </Link>
      <Link
        exact
        to="/nutritionist-dashboard/patients"
        className="sidebar-patient-dashboard-link"
      >
        <i class="fas fa-users"></i>
        Nutritionists
      </Link>
      <Link
        exact
        to="/nutritionist-dashboard/appointments"
        className="sidebar-patient-dashboard-link"
      >
        <i class="fas fa-plus-circle"></i>
        Créer un compte rendu
      </Link>
      <Link
        exact
        to="/patient-edit-profile"
        className="sidebar-patient-dashboard-link"
      >
        <i class="fas fa-plus-circle"></i>
        Edit Profile
      </Link>
    </div>
  )
}

export default SidebarPatient;