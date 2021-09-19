import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateArticle, articlesFetch } from 'services/apiManager';

const ArticleModalUpdate = ({article}) => {

  const [titleArticle, setTitleArticle] = useState(article ? article.title : null); 
  const [contentArticle, setContentArticle] = useState(article ? article.content : null);
  const dispatch = useDispatch();

  const closeModal = () => {
    let modal = document.querySelector(".update-article-modal");
    modal.style.opacity = 0;
    modal.style.visibility = "hidden";
  }

  const updatePublication = (e) => {
    e.preventDefault()

    const data = {
      article: {
        title: titleArticle,
        content: contentArticle,
      },
    };
  
    dispatch(updateArticle(data, article.id));
    setTimeout(() => {
      dispatch(articlesFetch())
    }, 500)
    window.location.reload()
  }

  return (
    <div className="update-article-modal">
      <i className="pointer-clickable fas fa-times" onClick={closeModal}></i>

      <div className="content p-3 ">
          <div className="p-3">
          {article && 

            <form className="col-md-5 border-right" onSubmit={updatePublication}>
              <div className="col-md-6">
                <label className="labels">Titre</label>
                <input type="text" className="form-input-display" placeholder={titleArticle} value={titleArticle} onChange={(e) => setTitleArticle(e.target.value)} required/>
              </div>
              <div className="col-md-6">
                <label className="labels">Contenu</label>
                <input type="text" className="form-input-display" placeholder={contentArticle} value={contentArticle} onChange={(e) => setContentArticle(e.target.value)} required/>
              </div>

              <div className="mt-5 text-center">
                <input type="submit" value="Sauvegarder" className="btn success-button text-center patient-edit-profile-button w-100 mt-4" />
              </div>
            </form>
          }
          </div>
      </div>
    </div>
  );
};

export default ArticleModalUpdate;