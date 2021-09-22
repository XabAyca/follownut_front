import React, { useRef } from 'react';
import { PDFExport } from '@progress/kendo-react-pdf';

const AppointmentModal = ({ appointment }) => {
  const pdfExportComponent = useRef()
  
  const closeModal = () => {
    let modal = document.querySelector(".appointment-modal");
    modal.style.opacity = 0;
    modal.style.visibility = "hidden";
  }

  const createDate = (el) => {
    let date = new Date(el);
    return date.toLocaleDateString("fr", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: false,
    });
  };

  const handleExportWithComponent = (event) => {
    pdfExportComponent.current.save();
  };

  window.onclick = (event) => {
    event.target ===
      document.querySelector('.appointment-modal') &&
      event.target !== document.querySelector('.content') &&
      closeModal()
  };

  return (
    <div className="appointment-modal">
      <i className="pointer-clickable fas fa-times" onClick={closeModal}></i>

      <div className="content p-3">
        <PDFExport ref={pdfExportComponent} paperSize="A4">
          <div className="p-3">
            <div
              className="download-btn btn"
              onClick={handleExportWithComponent}
            >
              Télécharger<i className="fas fa-file-download"></i>
            </div>
            {appointment && (
              <>
                <div className="d-flex text-primary-color my-4 row">
                  <div className="col-lg-3 col-md-12 col-sm-12 details-container p-4">
                    <p className="m-0">
                      {" "}
                      <strong>Patient : </strong>
                      {appointment.patient ? (
                        appointment.patient.last_name +
                        " " +
                        appointment.patient.first_name
                      ) : (
                        <span>Patient supprimé </span>
                      )}
                    </p>
                    <p className="m-0">
                      {" "}
                      <strong>Nutritioniste : </strong>
                      {appointment.nutritionist ? (
                        appointment.nutritionist.last_name +
                        " " +
                        appointment.nutritionist.first_name
                      ) : (
                        <span>Nutritioniste supprimé </span>
                      )}
                    </p>
                  </div>
                  <div className="col-lg-9 col-md-12 col-sm-12 d-flex align-items-center justify-content-end">
                    <h1>{createDate(appointment.date)}</h1>
                  </div>
                </div>
                <div className="d-flex text-primary-color my-4 row">
                  <h2 className="b-underline">Mesures</h2>
                  <div className="my-2 d-flex flex-wrap">
                    <p className="mx-1">
                      <strong>Poids : </strong>
                      {appointment.weight} kg
                    </p>
                    <p className="mx-1">
                      <strong>Taille : </strong>
                      {appointment.height.toFixed(2)} m
                    </p>
                    <p className="mx-1">
                      <strong>IMC : </strong>
                      {appointment.BMI.toFixed(1)}
                    </p>
                    <p className="mx-1">
                      <strong>Masse grasse : </strong>
                      {appointment.body_fat} %
                    </p>
                    <p className="mx-1">
                      <strong>Masse musculaire : </strong>
                      {appointment.muscle_mass} %
                    </p>
                    <p className="mx-1">
                      <strong>Graisse viscerale : </strong>
                      {appointment.visceral_fat} %
                    </p>
                  </div>
                </div>
                <div className="report my-4">
                  <h2 className="text-primary-color b-underline">Notes</h2>
                  <div className="text-primary-color d-flex justify-content-between my-2">
                    <p>{appointment.content}</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </PDFExport>
      </div>
    </div>
  );
};

export default AppointmentModal;