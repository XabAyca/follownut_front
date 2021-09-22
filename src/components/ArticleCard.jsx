import React from 'react';

const ArticleCard = ({ articleData }) => {
  const {title, nutritionist} = articleData;

  return (
    <div className="article-card">
      <div className="img-box">
        <img className="card-img-top" src="https://cdn.pixabay.com/photo/2015/10/12/14/54/coffee-983955__340.jpg" alt="Card image cap" />
      </div>
      <div className="card-body">
        <div>
          <h3 className="card-title">{title}</h3>
          <h5 className="author">Par {nutritionist.first_name} {nutritionist.last_name}</h5>
        </div>
        <div className="card-btn">
          <a href="#" className="btn third-button">En savoir plus</a>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;