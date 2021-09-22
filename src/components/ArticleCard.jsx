import React from 'react';

const ArticleCard = ({ articleData }) => {
  const {title, nutritionist} = articleData;

  return (
    <div class="article-card">
      <img class="card-img-top" src="https://cdn.pixabay.com/photo/2015/10/12/14/54/coffee-983955__340.jpg" alt="Card image cap" />
      <div class="card-body">
        <h3 class="card-title">{title}</h3>
        <h5 className="author">Par {nutritionist.first_name} {nutritionist.last_name}</h5>
        <a href="#" class="btn third-button">En savoir plus</a>
      </div>
    </div>
  );
};

export default ArticleCard;