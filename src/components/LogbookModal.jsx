const LogbookModal = ({ logbook }) => {
  
  const closeModal = () => {
    let modal = document.querySelector(".logbook-modal");
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

  window.onclick = (event) => {
    event.target === document.querySelector(".logbook-modal") &&
      event.target !== document.querySelector(".content") &&
      closeModal();
  };

  return (
    <div className="logbook-modal">
      <i className="pointer-clickable fas fa-times" onClick={closeModal}></i>
      <div className="content p-3 ">
          <div className="p-3">
            {logbook && (
              <>
                <div className="d-flex text-primary-color my-4 row">
                  <div className="col-lg-12 col-md-12 col-sm-12 d-flex justify-content-between">
                    <h2 className="b-underline align-self-center">{logbook.title}</h2>
                    <h6 className="align-self-center text-white-color details-container bg-purple p-2">{createDate(logbook.updated_at)}</h6>
                  </div>
                </div>
                <div className="report my-4">
                  <div className="text-primary-color d-flex justify-content-between my-2">
                    <p>{logbook.content}</p>
                  </div>
                </div>
              </>
            )}
          </div>
      </div>
    </div>
  );
};

export default LogbookModal;