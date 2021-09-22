import React, { useEffect, useState } from 'react';
import { articlesFetch } from 'services/apiManager';
import { useSelector, useDispatch } from 'react-redux';
import Cookies from "js-cookie";
import Loading from 'components/Loading';
import SidebarNutritionist from 'components/SidebarNutritionist';
import ArticlesList from 'components/ArticlesList';
import ArticleModal from 'components/ArticleModal';
import ArticleModalCreate from 'components/ArticleModalCreate';
import ArticleModalUpdate from 'components/ArticleModalUpdate';

const ArticleNutritionist = () => {
  const [articlesNutritionist, setArticlesNutritionist] = useState();
  const [currentArticle, setCurrentArticle] = useState(null);

  const nutritionist_id = parseInt(Cookies.get('nutritionist_id_cookie'));

  const articles = useSelector(state => state.articles)
  const dispatch = useDispatch() 

  const getArticleNutritionist = () => {
    if (articles.articles) {
      let atls = articles.articles
        .filter((article) => {
          return article.nutritionist_id === nutritionist_id
        })
        setArticlesNutritionist(atls)
    }
  }

  useEffect(() => { 
    dispatch(articlesFetch());
  }, []);
  
  useEffect(() => {
    getArticleNutritionist();
  },[articles])


  const openModal = (article) => {
    setCurrentArticle(article);
    let modal = document.querySelector(".article-modal");
    modal.style.opacity = 1
    modal.style.visibility = 'visible'
  }

  const openCreateModal = () => {
    let modal = document.querySelector(".create-article-modal");
    modal.style.opacity = 1;
    modal.style.visibility = 'visible';
  }

  const openUpdateModal = (article) => {
    setCurrentArticle(article);
    if (currentArticle) {
      let modal = document.querySelector(".update-article-modal");
      modal.style.opacity = 1;
      modal.style.visibility = 'visible';
    }
  }

  return (
    <div className="dashboard-page page-padding">
      <div className="dashboard-page-left">
        <SidebarNutritionist />
        <ArticleModal article={currentArticle} />
        <ArticleModalCreate />
        
        { currentArticle ?
          <ArticleModalUpdate article={currentArticle}/> : ""
        }
      </div>
      <div className="dashboard-page-right">
        <div className="m-5">
          {articlesNutritionist ?  
            <ArticlesList
              filteredArticles={articlesNutritionist}
              setOpenModal={openModal}
              setOpenCreateModal={openCreateModal}
              setOpenUpdateModal={openUpdateModal}
            /> :
            <Loading />
          } 
        </div>
      </div>
    </div>
  );
};

export default ArticleNutritionist;