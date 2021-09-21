import NutritionistCard from 'components/NutritionistCard';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nutritionistsFetch } from 'services/apiManager';

const Nutritionists = () => {
  const [nutritionistsPartenaires, setNutritionistsPartenaires] = useState("");
  const [filter, setFilter] = useState("");
 
  const nutritionists = useSelector(state => state.nutritionists.nutritionist)
  const dispatch = useDispatch() 

  const getFilterNutritionists = () => {
    if (nutritionists) {
      console.log(nutritionists)
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
    console.log(nutritionistsPartenaires)
  }, [filter, nutritionists]);

  return (
    <div className="page-padding">
      <div className="search-input col-sm-5 col-md-4 col-lg-5 col-xl-3 d-flex">
        <i className="fas fa-search"></i>
        <input type="text" placeholder="    Recherche..." onChange={(e) => setFilter(e.target.value.toLowerCase())} />
      </div>
      <div className=" d-flex flex-wrap">
        { nutritionistsPartenaires &&
          nutritionistsPartenaires.map((nutritionist) => {
            return (
              <NutritionistCard nutritionistData={nutritionist} />
            )
          })
        }
      </div>
    </div>

  );
};

export default Nutritionists;