import ArticleCard from 'components/ArticleCard';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { articlesFetch } from 'services/apiManager';

const Articles = () => {
  const [articlesNutritionist, setArticlesNutritionist] = useState();
 
  const articles = useSelector(state => state.articles)
  const dispatch = useDispatch() 

  const getArticleNutritionist = () => {
    if (articles.articles) {
        setArticlesNutritionist(articles.articles)
    }
  }

  useEffect(() => { 
    dispatch(articlesFetch()); 
  }, []);

  useEffect(() => {
    getArticleNutritionist();
  },[articles])

  return (
    <div className="articles page-padding d-flex flex-wrap">
      { articlesNutritionist &&
        articlesNutritionist.map((article) => {
          return (
            <ArticleCard articleData={article} />
          )
        })
      }
    </div>
  );
};

export default Articles;