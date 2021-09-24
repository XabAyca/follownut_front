// CONFIG IMPORTS
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

// SERVICES IMPORTS
import { articlesFetch } from 'services/apiManager';

// COMPONENTS IMPORTS
import Loading from 'components/Loading';


const Article = () => {
  const slug = useParams(); 
  const id = parseInt(slug.slug);
  const [article, setArticle] = useState(null);
  const articles = useSelector(state => state.articles);
  const dispatch = useDispatch();

  const getArticle = () => {
    if (articles.articles) {
      let article = articles.articles
        .filter((article) => {
          return article.id === id
        })
        setArticle(article[0])
    }
  }

  useEffect(() => { 
    dispatch(articlesFetch()); 
  }, []);

  useEffect(() => { 
    getArticle();
  }, [article]);

  return (
    <div className="article page-padding ">
      { article ?
        <div>
          <h1>{article.title}</h1>
          <h3>
            <strong>Auteur </strong>: {article.nutritionist.first_name} {article.nutritionist.last_name}
          </h3> 
          <p>{article.content}</p> 
        </div>
        : <Loading />
      }
    </div>
  );
};

export default Article;