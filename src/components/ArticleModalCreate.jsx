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
        <div className="create-appointment-form">
          <h1 className="text-primary-color">Rédiger un article</h1>
          <form className="appointment-form text-primary-color" onSubmit={createPublication}>
            <div className="d-flex row justify-content-between py-2">
              <div className="col-lg-6 col-sm-12 my-2">
                <label>Titre</label>
                <input className="input-display" type="text" id="article-title" placeholder="Le titre de votre article" required />
              </div>
            </div>
            <label>Corps de l'article</label>
            <textarea placeholder="Exprimez votre expertise" id="article-content" className="input-display textarea-display" required />
            <input type="submit" value="Publier" className="btn success-button my-3 col-lg-3 col-sm-12" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ArticleModalCreate;