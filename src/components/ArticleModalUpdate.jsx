// CONFIG IMPORTS
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// SERVICES IMPORTS
import { updateArticle } from 'services/apiManager';


const ArticleModalUpdate = ({article}) => {

  const [titleArticle, setTitleArticle] = useState(article ? article.title : null); 
  const [contentArticle, setContentArticle] = useState(article ? article.content : null);
  const articleF = useSelector(state=> state.articles.article)
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
  }

  useEffect(() => {
    if (articleF) {
      closeModal();
      window.location.reload();
    }
  }, [articleF]);

  window.onclick = (event) => {
    event.target === document.querySelector(".update-article-modal") &&
      event.target !== document.querySelector(".content") &&
      closeModal();
  };

  return (

    <div className="update-article-modal">
      <i className="pointer-clickable fas fa-times" onClick={closeModal}></i>
      <div className="content p-3 ">
      {article &&
        <div className="p-3">
          <h1 className="text-primary-color">Editer un article</h1>
          <form className="appointment-form text-primary-color" onSubmit={updatePublication}>
            <div className="d-flex row justify-content-between py-2">
              <div className="col-lg-6 col-sm-12 my-2">
                <label>Titre</label>
                <input className="input-display" type="text" id="article-title" placeholder={titleArticle} value={titleArticle} onChange={(e) => setTitleArticle(e.target.value)} required />
              </div>
            </div>
            <label>Corps de l'article</label>
            <textarea id="article-content" className="input-display textarea-display" placeholder={contentArticle} value={contentArticle} onChange={(e) => setContentArticle(e.target.value)} required />
            <input type="submit" value="Sauvegarder" className="btn success-button my-3 col-lg-3 col-sm-12" />
          </form>
        </div>
      }
      </div>
    </div>
  );
};

export default ArticleModalUpdate;