import NutritionistCard from 'components/NutritionistCard';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nutritionistsFetch } from 'services/apiManager';

const Nutritionists = () => {
  const [nutritionistsPartenaires, setNutritionistsPartenaires] = useState("");
  const [filter, setFilter] = useState("");
 
  const nutritionists = useSelector(state => state.nutritionists.nutritionist);
  const dispatch = useDispatch();

  const getFilterNutritionists = () => {
    if (nutritionists) {
      setNutritionistsPartenaires(nutritionists.filter((nutritionist) => {
        if (nutritionist.first_name && nutritionist.last_name) {
          return (
            nutritionist.first_name.toLowerCase().includes(filter) ||
            nutritionist.last_name.toLowerCase().includes(filter) ||
            nutritionist.email.toLowerCase().includes(filter)
          ) 
        } else {
          return (
            nutritionist.email.toLowerCase().includes(filter)
          ) 
        }
      }));
    }
  }

  useEffect(() => { 
    dispatch(nutritionistsFetch()); 
  }, []);

  useEffect(() => {
    getFilterNutritionists();
  }, [filter, nutritionists]);

  return (
    <div className="page-padding">
      <div className="mx-4">
        <div className="search-input my-3 col-sm-5 col-md-4 col-lg-5 col-xl-3 d-flex">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="    Recherche..." onChange={(e) => setFilter(e.target.value.toLowerCase())} />
        </div>
        <h2>Voici les nutritionistes utilisant notre application</h2>
      </div>
      <div className=" d-flex flex-wrap">
        { nutritionistsPartenaires &&
          ( nutritionistsPartenaires.length > 0 ?
            nutritionistsPartenaires.map((nutritionist) => {
              return (
                <NutritionistCard nutritionistData={nutritionist} />
              )
            })
            : ( nutritionistsPartenaires.length === 0 && filter === "" ?
            <p>Il n'y a aucun nutritioniste d'enregistré pour le moment</p>
            : <p>Aucun résultat ne correspond à votre recherche</p>)
          )
        }
      </div>
    </div>

  );
};

export default Nutritionists;