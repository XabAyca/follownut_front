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
      setArticlesNutritionist(articles.articles
        .filter((article) => {
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
        })
        .sort((a, b) => b.created_at.localeCompare(a.created_at))
      );
    }
  };

  useEffect(() => { 
    dispatch(articlesFetch()); 
  }, []);

  useEffect(() => {
    articles && getFilterArticles();
  }, [filter, articles]);

  return (
    <div className="articles page-padding d-flex justify-content-center">
      <div className="col-md-12 col-sm-12 col-lg-10 col-xl-10 d-flex row justify-content-center">
        <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 ">
          <div className="d-flex my-3 mx-4 bottom-search">
            <i className="fas fa-search"></i>
            <input
              type="text"
              className="search-input px-3"
              placeholder="Rechercher..."
              onChange={(e) => setFilter(e.target.value.toLowerCase())}
            />
          </div>
        </div>
        <div className="d-flex row justify-content-center">
          {articlesNutritionist &&
            (articlesNutritionist.length > 0 ? (
              articlesNutritionist.map((article) => {
                return (<ArticleCard articleData={article} />);
              })
            ) : articlesNutritionist.length === 0 && filter === "" ? (
              <p>Il n'y a aucun article de publié pour le moment</p>
            ) : (
              <p>Aucun résultat ne correspond à votre recherche</p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;