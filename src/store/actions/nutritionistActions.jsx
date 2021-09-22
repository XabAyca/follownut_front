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

export const FETCH_ONE_NUTRITIONIST_REQUEST = "FETCH_ONE_NUTRITIONIST_REQUEST";
export const FETCH_ONE_NUTRITIONIST_SUCCESS = "FETCH_ONE_NUTRITIONIST_SUCCESS";
export const FETCH_ONE_NUTRITIONIST_FAILURE = "FETCH_ONE_NUTRITIONIST_FAILURE";

export const fetchNutritionistRequest = () => {
  return {
    type: FETCH_ONE_NUTRITIONIST_REQUEST,
  };
};
export const fetchNutritionistSuccess = (currentNutritionist) => {
  return {
    type: FETCH_ONE_NUTRITIONIST_SUCCESS,
    currentNutritionist,
  };
};
export const fetchNutritionistFailure = (error) => {
  return {
    type: FETCH_ONE_NUTRITIONIST_FAILURE,
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


export const FETCH_NUTRITIONIST_UPDATE_REQUEST = "FETCH_NUTRITIONIST_UPDATE_REQUEST";
export const FETCH_NUTRITIONIST_UPDATE_SUCCESS = "FETCH_NUTRITIONIST_UPDATE_SUCCESS";
export const FETCH_NUTRITIONIST_UPDATE_FAILURE = "FETCH_NUTRITIONIST_UPDATE_FAILURE";

export const fetchNutritionistUpdateRequest = () => {
  return {
    type: FETCH_NUTRITIONIST_UPDATE_REQUEST,
  };
};
export const fetchNutritionistUpdateSuccess = (nutritionistUpd) => {
  return {
    type: FETCH_NUTRITIONIST_UPDATE_SUCCESS,
    nutritionistUpd,
  };
};
export const fetchNutritionistUpdateFailure = (error) => {
  return {
    type: FETCH_NUTRITIONIST_UPDATE_FAILURE,
    error,
  };
};


export const FETCH_NUTRITIONIST_DELETE_REQUEST = "FETCH_NUTRITIONIST_DELETE_REQUEST";
export const FETCH_NUTRITIONIST_DELETE_SUCCESS = "FETCH_NUTRITIONIST_DELETE_SUCCESS";
export const FETCH_NUTRITIONIST_DELETE_FAILURE = "FETCH_NUTRITIONIST_DELETE_FAILURE";

export const fetchNutritionistDeleteRequest = () => {
  return {
    type: FETCH_NUTRITIONIST_DELETE_REQUEST,
  };
};
export const fetchNutritionistDeleteSuccess = () => {
  return {
    type: FETCH_NUTRITIONIST_DELETE_SUCCESS,
  };
};
export const fetchNutritionistDeleteFailure = (error) => {
  return {
    type: FETCH_NUTRITIONIST_DELETE_FAILURE,
    error,
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

export const FORGOT_PASSWORD_NUTRITIONIST_REQUEST = "FORGOT_PASSWORD_NUTRITIONIST_REQUEST";
export const FORGOT_PASSWORD_NUTRITIONIST_SUCCESS = "FORGOT_PASSWORD_NUTRITIONIST_SUCCESS";
export const FORGOT_PASSWORD_NUTRITIONIST_FAILURE = "FORGOT_PASSWORD_NUTRITIONIST_FAILURE";

export const forgotPasswordNutritionistRequest = () => {
  return {
    type: FORGOT_PASSWORD_NUTRITIONIST_REQUEST,
  };
};
export const forgotPasswordNutritionistSuccess = (forgotPassword) => {
  return {
    type: FORGOT_PASSWORD_NUTRITIONIST_SUCCESS,
    forgotPassword,
  };
};
export const forgotPasswordNutritionistFailure = (error) => {
  return {
    type: FORGOT_PASSWORD_NUTRITIONIST_FAILURE,
    error,
  };
};

export const RESET_PASSWORD_NUTRITIONIST_REQUEST = "RESET_PASSWORD_NUTRITIONIST_REQUEST";
export const RESET_PASSWORD_NUTRITIONIST_SUCCESS = "RESET_PASSWORD_NUTRITIONIST_SUCCESS";
export const RESET_PASSWORD_NUTRITIONIST_FAILURE = "RESET_PASSWORD_NUTRITIONIST_FAILURE";

export const resetPasswordNutritionistRequest = () => {
  return {
    type: RESET_PASSWORD_NUTRITIONIST_REQUEST,
  };
};
export const resetPasswordNutritionistSuccess = (resetPassword) => {
  return {
    type: RESET_PASSWORD_NUTRITIONIST_SUCCESS,
    resetPassword,
  };
};
export const resetPasswordNutritionistFailure = (error) => {
  return {
    type: RESET_PASSWORD_NUTRITIONIST_FAILURE,
    error,
  };
};