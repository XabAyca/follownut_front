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
  }, [articles]);

    const createDate = (el) => {
      let date = new Date(el);
      return date.toLocaleDateString("fr", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: false,
        timeZone: "UTC",
      });
    };

  return (
    <div className="article page-padding ">
      {article ? (
        <div>
          <h2>{article.title}</h2>
          <div className="infos">
            <h5>
              Auteur : {article.nutritionist.first_name}{" "}
              {article.nutritionist.last_name}
            </h5>

            <h6>
              <strong>Date </strong>: {createDate(article.created_at)}
            </h6>
          </div>
          <hr/>
          <p>{article.content}</p>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Article;