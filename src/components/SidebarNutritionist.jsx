// CONFIG IMPORTS
import { Link } from 'react-router-dom';

const SidebarNutritionist = () => {
  return (
    <div className="sidebar-nutritionist">
      <Link to="/nutritionist-dashboard" className="sidebar-nutritionist-link">
        <i className="fas fa-calendar-check"></i>
        Rendez-vous
      </Link>
      <Link
        to="/nutritionist-dashboard/patients"
        className="sidebar-nutritionist-link"
      >
        <i className="fas fa-users"></i>
        Patientèle
      </Link>
      <Link
        to="/nutritionist-dashboard/appointments"
        className="sidebar-nutritionist-link"
      >
        <i className="fas fa-plus-circle"></i>
        Créer un compte-rendu
      </Link>
      <Link
        to="/nutritionist-dashboard/create-patient"
        className="sidebar-nutritionist-link"
      >
        <i className="fas fa-user-plus"></i>
        Ajouter un patient
      </Link>
      <Link
        to="/nutritionist-article"
        className="sidebar-nutritionist-link"
      >
        <i className="far fa-edit"></i>
        Articles
      </Link>
      <Link
        to="/logbooks"
        className="sidebar-nutritionist-link"
      >
        <i className="far fa-clipboard"></i>
        Notes patients
      </Link>
    </div>
  );
};

export default SidebarNutritionist;