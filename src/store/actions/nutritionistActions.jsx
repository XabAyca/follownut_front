export const FETCH_NUTRITIONIST_REQUEST = "FETCH_NUTRITIONIST_REQUEST";
export const FETCH_NUTRITIONIST_SUCCESS = "FETCH_NUTRITIONIST_SUCCESS";
export const FETCH_NUTRITIONIST_FAILURE = "FETCH_NUTRITIONIST_FAILURE";

export const fetchNutritionistsRequest = () => {
  return {
    type: FETCH_NUTRITIONIST_REQUEST,
  };
};
export const fetchNutritionistsSuccess = (nutritionist) => {
  return {
    type: FETCH_NUTRITIONIST_SUCCESS,
    nutritionist,
  };
};
export const fetchNutritionistsFailure = (error) => {
  return {
    type: FETCH_NUTRITIONIST_FAILURE,
    error,
  };
};


export const FETCH_NUTRITIONIST_LOGIN_REQUEST = "FETCH_NUTRITIONIST_LOGIN_REQUEST";
export const FETCH_NUTRITIONIST_LOGIN_SUCCESS = "FETCH_NUTRITIONIST_LOGIN_SUCCESS";
export const FETCH_NUTRITIONIST_LOGIN_FAILURE = "FETCH_NUTRITIONIST_LOGIN_FAILURE";
export const FETCH_NUTRITIONIST_LOGIN_LOGOUT = "FETCH_NUTRITIONIST_LOGIN_LOGOUT";

export const fetchNutritionistLoginRequest = () => {
  return {
    type: FETCH_NUTRITIONIST_LOGIN_REQUEST,
  };
};
export const fetchNutritionistLoginSuccess = (login) => {
  return {
    type: FETCH_NUTRITIONIST_LOGIN_SUCCESS,
    login,
  };
};
export const fetchNutritionistLoginFailure = (error) => {
  return {
    type: FETCH_NUTRITIONIST_LOGIN_FAILURE,
    error,
  };
};
export const fetchNutritionistLoginLogout = () => {
  return {
    type: FETCH_NUTRITIONIST_LOGIN_LOGOUT
  };
};


export const FETCH_NUTRITIONIST_REGISTER_REQUEST = "FETCH_NUTRITIONIST_REGISTER_REQUEST";
export const FETCH_NUTRITIONIST_REGISTER_SUCCESS = "FETCH_NUTRITIONIST_REGISTER_SUCCESS";
export const FETCH_NUTRITIONIST_REGISTER_FAILURE = "FETCH_NUTRITIONIST_REGISTER_FAILURE";
export const FETCH_NUTRITIONIST_REGISTER_UNREGISTER = "FETCH_NUTRITIONIST_REGISTER_UNREGISTER";

export const fetchNutritionistRegisterRequest = () => {
  return {
    type: FETCH_NUTRITIONIST_REGISTER_REQUEST,
  };
};
export const fetchNutritionistRegisterSuccess = (register) => {
  return {
    type: FETCH_NUTRITIONIST_REGISTER_SUCCESS,
    register,
  };
};
export const fetchNutritionistRegisterFailure = (error) => {
  return {
    type: FETCH_NUTRITIONIST_REGISTER_FAILURE,
    error,
  };
};
export const fetchNutritionistRegisterUnregister = () => {
  return {
    type: FETCH_NUTRITIONIST_REGISTER_UNREGISTER
  };
};
