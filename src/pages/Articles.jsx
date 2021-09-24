import ArticleCard from 'components/ArticleCard';
import { useEffect, useState } from 'react';
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
        if (article.nutritionist.first_name && article.nutritionist.last_name) {
          return (
            article.nutritionist.first_name.toLowerCase().includes(filter) ||
            article.nutritionist.last_name.toLowerCase().includes(filter) ||
            article.nutritionist.email.toLowerCase().includes(filter) ||
            article.title.toLowerCase().includes(filter)
          )
        } else {
          return (
            article.nutritionist.email.toLowerCase().includes(filter) ||
            article.title.toLowerCase().includes(filter)
          )
        }
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
      <div className="col-sm-5 col-md-4 col-lg-5 col-xl-3 d-flex bottom-search">
        <i className="fas fa-search"></i>
        <input type="text" className="search-input px-3" placeholder="Rechercher..." onChange={(e) => setFilter(e.target.value.toLowerCase())} />
      </div>
      <div className=" d-flex flex-wrap">
        { articlesNutritionist &&
          ( articlesNutritionist.length > 0 ?
            articlesNutritionist.map((article) => {
              return (
                <ArticleCard articleData={article} />
              )
            })
            : ( articlesNutritionist.length === 0 && filter === "" ?
            <p>Il n'y a aucun article de publié pour le moment</p>
            : <p>Aucun résultat ne correspond à votre recherche</p>)
          )
        }
      </div>
    </div>
  );
};

export default Articles;