import React from 'react';
import { Link } from 'react-router-dom';

const SidebarNutritionist = () => {
  return (
    <div className="sidebar-nutritionist">
      <Link
        exact
        to="/nutritionist-dashboard"
        className="sidebar-nutritionist-link">
        <i class="fas fa-calendar-check"></i>
        Comptes-rendu
      </Link>
      <Link
        exact
        to="/nutritionist-dashboard/patients"
        className="sidebar-nutritionist-link"
      >
        <i class="fas fa-users"></i>
        Patients
      </Link>
      <Link
        exact
        to="/nutritionist-dashboard/appointments"
        className="sidebar-nutritionist-link"
      >
        <i class="fas fa-plus-circle"></i>
        Créer un compte rendu
      </Link>
      <Link
        exact
        to="/nutritionist-dashboard/appointments"
        className="sidebar-nutritionist-link"
      >
        <i class="fas fa-plus-circle"></i>
        Edit Profile
      </Link>
    </div>
  );
};

export default SidebarNutritionist;