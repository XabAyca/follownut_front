import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteArticleFetch } from 'services/apiManager';

const ArticlesList = ({ filteredArticles, setOpenModal, setOpenCreateModal, setOpenUpdateModal }) => {
  const [articles, setArticles] = useState(filteredArticles);
  const dispatch = useDispatch(); 

  const createDate = (el) => {
    let date = new Date(el);
    return date.toLocaleDateString("fr", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: false,
    });
  };

  const deleteArticle = (article, e) => {
    e.preventDefault()
    if (
      window.confirm(
        "Vous êtes sur le point de supprimer cet article. Êtes vous sur ?"
      )
    ) {
      setArticles([...articles.filter((el) => el !== article)]);
      dispatch(deleteArticleFetch(article.id))
    }
  }
  
  return (
    <div className="text-primary-color col-lg-8 col-sm-6">
      <div className="p-2">
        <div className="d-flex justify-content-between">
          <h2>Voici la liste de vos articles</h2>
          <div className="d-flex align-items-center">
            <button className="btn outline-primary-button" onClick={() => setOpenCreateModal()}>
              <span className="mx-1">Ajouter</span>
              <i className="mx-1 far fa-edit"></i>
            </button>
          </div>
        </div>
        <div className="details-container mx-3 p-3">
          <table className="table patient-table">
            <thead>
              <tr>
                <th scope="col">Réf.</th>
                <th scope="col">Date</th>
                <th scope="col">Titre</th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
            {
                articles.map((article) => {
                  return (
                    <tr>
                      <th scope="row" key={article.id}>{article.id}</th>
                      <td>{createDate(article.updated_at)}</td>
                      <td>{ article.title }</td>
                      <td>
                        <i className="pointer-clickable far fa-eye" onClick={() => setOpenModal(article)}></i>
                      </td>
                      <td>
                        <i className="pointer-clickable fas fa-pencil-alt" onClick={() => setOpenUpdateModal(article)}></i>
                      </td>
                      <td>
                        <i className="pointer-clickable fas fa-trash-alt" onClick={(e) => deleteArticle(article, e)}></i>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ArticlesList;
