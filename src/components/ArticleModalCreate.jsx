import React from 'react';
import { useDispatch } from 'react-redux';
import { createArticle, articlesFetch } from 'services/apiManager';

const ArticleModalCreate = () => {
  const dispatch = useDispatch();

  const closeModal = () => {
    let modal = document.querySelector(".create-article-modal");
    modal.style.opacity = 0;
    modal.style.visibility = "hidden";
  }

  const createPublication = (e) => {
    e.preventDefault()
    let title = document.querySelector('#article-title').value
    let content = document.querySelector('#article-content').value
      
    const data = {
      article: {
        title: title,
        content: content,
      },
    };
  
    dispatch(createArticle(data));
    setTimeout(() => {
      dispatch(articlesFetch())
    }, 500)
    window.location.reload()
  }

  return (
    <div className="create-article-modal">
      <i className="pointer-clickable fas fa-times" onClick={closeModal}></i>

      <div className="content p-3 ">
          <div className="p-3">

            <form className="col-md-5 border-right" onSubmit={createPublication}>
              <div className="col-md-6">
                <label className="labels">Titre</label>
                <input type="text" className="form-input-display" id="article-title" placeholder="Titre de l'article" required/>
              </div>
              <div className="col-md-6">
                <label className="labels">Contenu</label>
                <input type="text" className="form-input-display" id="article-content" placeholder="Votre contenu ici" required/>
              </div>

              <div className="mt-5 text-center">
                <input type="submit" value="Sauvegarder" className="btn success-button text-center patient-edit-profile-button w-100 mt-4" />
              </div>
            </form>
            
          </div>
      </div>
    </div>
  );
};

export default ArticleModalCreate;