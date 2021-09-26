const ArticleModal = ({ article }) => {

  const closeModal = () => {
    let modal = document.querySelector(".read-modal");
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
    event.target === document.querySelector(".article-modal") &&
      event.target !== document.querySelector(".content") &&
      closeModal();
  };

  return (

    <div className="read-modal">
      <i className="pointer-clickable fas fa-times" onClick={closeModal}></i>
      <div className="content p-3 ">
          <div className="p-3">
            {article && (
              <>
                <div className="d-flex text-primary-color my-4 row">
                  <div className="d-flex row justify-content-between">
                    <h2 className="b-underline align-self-center col-xl-6 col-lg-6 col-md-12 col-sm-12">{article.title}</h2>
                    <h6 className="align-self-center details-container text-white-color bg-purple p-2 col-xl-3 col-lg-3 col-md-4 col-sm-4">{createDate(article.updated_at)}</h6>
                  </div>
                </div>
                <div className="report my-4">
                  <div className="text-primary-color d-flex justify-content-between my-2">
                    <p>{article.content}</p>
                  </div>
                </div>
              </>
            )}
          </div>
      </div>
    </div>

  );
};

export default ArticleModal;