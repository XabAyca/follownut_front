import ArticleCard from 'components/ArticleCard';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { articlesFetch } from 'services/apiManager';

const Articles = () => {
  const [articlesNutritionist, setArticlesNutritionist] = useState();
  const [filter, setFilter] = useState("");
 
  const articles = useSelector(state => state.articles)
  const dispatch = useDispatch() 

  const getFilterArticles = () => {
    if (articles.articles) {
      setArticlesNutritionist(articles.articles.filter((article) => {
        return (
          article.nutritionist.first_name.toLowerCase().includes(filter) ||
          article.nutritionist.last_name.toLowerCase().includes(filter) ||
          article.nutritionist.email.toLowerCase().includes(filter)) ||
          article.title.toLowerCase().includes(filter)
      }));
    }

  }

  useEffect(() => { 
    dispatch(articlesFetch()); 
  }, []);

  useEffect(() => {
    articles && getFilterArticles();
  }, [filter, articles]);

  return (
    <div className="articles page-padding">
      <div className="search-input col-sm-5 col-md-4 col-lg-5 col-xl-3 d-flex">
        <i className="fas fa-search"></i>
        <input
          type="text"
          className=""
          placeholder="    Recherche..."
          onChange={(e) => setFilter(e.target.value.toLowerCase())}
        />
      </div>
      <div className=" d-flex flex-wrap">
        { articlesNutritionist &&
          articlesNutritionist.map((article) => {
            return (
              <ArticleCard articleData={article} />
            )
          })
        }
      </div>
    </div>

  );
};

export default Articles;