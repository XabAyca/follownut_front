import React from 'react';

const ArticleModal = ({ article }) => {

  const closeModal = () => {
    let modal = document.querySelector(".article-modal");
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

  return (
    <div className="article-modal">
      <i className="pointer-clickable fas fa-times" onClick={closeModal}></i>

      <div className="content p-3 ">
          <div className="p-3">
            {article && (
              <>
                <div className="d-flex text-primary-color my-4 row">
                  <div className="col-lg-9 col-md-12 col-sm-12 d-flex">
                    <h1>{createDate(article.updated_at)}</h1>
                  </div>
                </div>
                <div className="d-flex text-primary-color my-4 row">
                  <h2 className="b-underline">{article.title}</h2>
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