
import { FETCH_ARTICLES_FAILURE, FETCH_ARTICLES_REQUEST, FETCH_ARTICLES_SUCCESS } from "store/actions/articleActions";
import { DELETE_ARTICLE_FAILURE, DELETE_ARTICLE_REQUEST, DELETE_ARTICLE_SUCCESS } from "store/actions/articleActions";
import { CREATE_ARTICLE_FAILURE, CREATE_ARTICLE_REQUEST, CREATE_ARTICLE_SUCCESS } from "store/actions/articleActions";
import { UPDATE_ARTICLE_FAILURE, UPDATE_ARTICLE_REQUEST, UPDATE_ARTICLE_SUCCESS } from "store/actions/articleActions";


const initialState = {
  loading: false,
  error: "",
  articles: "",
  article:""
};

export const articlesReducer = (
  state = initialState,
  { articles, error, type, article }
) => {
  switch (type) {
    case FETCH_ARTICLES_REQUEST: 
      return { ...state, loading: true };

    case FETCH_ARTICLES_SUCCESS:
      return { ...state, loading: false, articles: articles, error: "" };

    case FETCH_ARTICLES_FAILURE:
      return { ...state, loading: false, error: error };

    case DELETE_ARTICLE_REQUEST: 
      return { ...state, loading: true };

    case DELETE_ARTICLE_SUCCESS:
      return { ...state, loading: false, error: "" };

    case DELETE_ARTICLE_FAILURE:
      return { ...state, loading: false, error: error };

    case CREATE_ARTICLE_REQUEST:
      return { ...state, loading: true };

    case CREATE_ARTICLE_SUCCESS:
      return { ...state, loading: false, error: "", article: article };

    case CREATE_ARTICLE_FAILURE:
      return { ...state, loading: false, error: error };

    case UPDATE_ARTICLE_REQUEST:
      return { ...state, loading: true };

    case UPDATE_ARTICLE_SUCCESS:
      return { ...state, loading: false, error: "", article: article };

    case UPDATE_ARTICLE_FAILURE:
      return { ...state, loading: false, error: error };

    default:
      return state;
  }
};
