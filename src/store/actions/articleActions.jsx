export const FETCH_ARTICLES_REQUEST = "FETCH_ARTICLES_REQUEST";
export const FETCH_ARTICLES_SUCCESS = "FETCH_ARTICLES_SUCCESS";
export const FETCH_ARTICLES_FAILURE = "FETCH_ARTICLES_FAILURE";

export const fetchArticlesRequest = () => {
  return {
    type: FETCH_ARTICLES_REQUEST,
  };
};
export const fetchArticlesSuccess = (articles) => {
  return {
    type: FETCH_ARTICLES_SUCCESS,
    articles,
  };
};
export const fetchArticlesFailure = (error) => {
  return {
    type: FETCH_ARTICLES_FAILURE,
    error,
  };
};


export const DELETE_ARTICLE_REQUEST = "DELETE_ARTICLE_REQUEST";
export const DELETE_ARTICLE_SUCCESS = "DELETE_ARTICLE_SUCCESS";
export const DELETE_ARTICLE_FAILURE = "DELETE_ARTICLE_FAILURE";

export const deleteArticleRequest = () => {
  return {
    type: DELETE_ARTICLE_REQUEST,
  };
};
export const deleteArticleSuccess = () => {
  return {
    type: DELETE_ARTICLE_SUCCESS,
  };
};
export const deleteArticleFailure = (error) => {
  return {
    type: DELETE_ARTICLE_FAILURE,
    error,
  };
};


export const CREATE_ARTICLE_REQUEST = "CREATE_ARTICLE_REQUEST";
export const CREATE_ARTICLE_SUCCESS = "CREATE_ARTICLE_SUCCESS";
export const CREATE_ARTICLE_FAILURE = "CREATE_ARTICLE_FAILURE";

export const createArticleRequest = () => {
  return {
    type: CREATE_ARTICLE_REQUEST,
  };
};
export const createArticleSuccess = (article) => {
  return {
    type: CREATE_ARTICLE_SUCCESS,
    article,
  };
};
export const createArticleFailure = (error) => {
  return {
    type: CREATE_ARTICLE_FAILURE,
    error,
  };
};


export const UPDATE_ARTICLE_REQUEST = "UPDATE_ARTICLE_REQUEST";
export const UPDATE_ARTICLE_SUCCESS = "UPDATE_ARTICLE_SUCCESS";
export const UPDATE_ARTICLE_FAILURE = "UPDATE_ARTICLE_FAILURE";

export const updateArticleRequest = () => {
  return {
    type:  UPDATE_ARTICLE_REQUEST,
  };
};
export const updateArticleSuccess = (article) => {
  return {
    type:  UPDATE_ARTICLE_SUCCESS,
    article,
  };
};
export const updateArticleFailure = (error) => {
  return {
    type:  UPDATE_ARTICLE_FAILURE,
    error,
  };
};