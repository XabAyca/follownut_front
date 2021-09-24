// CONFIG IMPORTS
import { useHistory } from 'react-router';

const ArticleCard = ({ articleData }) => {
  const {title, nutritionist, id} = articleData;
  const history = useHistory();


const truncateString = (str, num)=> {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
}

  return (
    <div className="article-card">
      <div className="img-box">
        <i className="fas fa-newspaper"></i>
        <h6 className="card-title">{truncateString(title,100)}</h6>
      </div>
      <div className="card_body">
        <div>
          <h5 className="author" onClick={() => history.push(`/nutritionists`)}>
            Par {nutritionist.first_name} {nutritionist.last_name}
          </h5>
        </div>
        <p
          className="btn third-button"
          onClick={() => history.push(`/article/${id}`)}
        >
          En savoir plus
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;