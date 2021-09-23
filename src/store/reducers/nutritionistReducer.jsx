import { FETCH_NUTRITIONIST_FAILURE, FETCH_NUTRITIONIST_REQUEST, FETCH_NUTRITIONIST_SUCCESS } from "store/actions/nutritionistActions";
import { FETCH_NUTRITIONIST_DELETE_FAILURE, FETCH_NUTRITIONIST_DELETE_REQUEST, FETCH_NUTRITIONIST_UPDATE_SUCCESS } from "store/actions/nutritionistActions";
import { FORGOT_PASSWORD_NUTRITIONIST_REQUEST } from "store/actions/nutritionistActions";
import { FORGOT_PASSWORD_NUTRITIONIST_FAILURE } from "store/actions/nutritionistActions";
import { RESET_PASSWORD_NUTRITIONIST_SUCCESS } from "store/actions/nutritionistActions";
import { RESET_PASSWORD_NUTRITIONIST_FAILURE } from "store/actions/nutritionistActions";
import { RESET_PASSWORD_NUTRITIONIST_REQUEST } from "store/actions/nutritionistActions";
import { FORGOT_PASSWORD_NUTRITIONIST_SUCCESS } from "store/actions/nutritionistActions";
import { FETCH_ONE_NUTRITIONIST_FAILURE, FETCH_ONE_NUTRITIONIST_REQUEST, FETCH_ONE_NUTRITIONIST_SUCCESS } from "store/actions/nutritionistActions";
import { FETCH_NUTRITIONIST_UPDATE_FAILURE, FETCH_NUTRITIONIST_UPDATE_REQUEST, FETCH_NUTRITIONIST_DELETE_SUCCESS } from "store/actions/nutritionistActions";
import { FETCH_NUTRITIONIST_LOGIN_FAILURE, FETCH_NUTRITIONIST_LOGIN_LOGOUT, FETCH_NUTRITIONIST_LOGIN_REQUEST, FETCH_NUTRITIONIST_LOGIN_SUCCESS } from "store/actions/nutritionistActions";
import { FETCH_NUTRITIONIST_REGISTER_FAILURE, FETCH_NUTRITIONIST_REGISTER_REQUEST, FETCH_NUTRITIONIST_REGISTER_SUCCESS, FETCH_NUTRITIONIST_REGISTER_UNREGISTER } from "store/actions/nutritionistActions";


const initialState = {
  loading: false,
  error: "",
  nutritionist: "",
  register: "",
  login: "",
  nutritionistUpd: "",
  currentNutritionist: "",
  forgotPassword: "",
  resetPassword:""
};

export const nutritionistReducer = (
  state = initialState,
  { type, error, nutritionist, login, register, nutritionistUpd, currentNutritionist, forgotPassword, resetPassword }
) => {
  switch (type) {
    case FETCH_NUTRITIONIST_REQUEST:
      return { ...state, loading: true };

    case FETCH_NUTRITIONIST_SUCCESS:
      return {
        ...state,
        loading: false,
        nutritionist: nutritionist,
        error: "",
      };

    case FETCH_NUTRITIONIST_FAILURE:
      return { ...state, loading: false, error: error };

    case FETCH_ONE_NUTRITIONIST_REQUEST:
      return { ...state, loading: true };

    case FETCH_ONE_NUTRITIONIST_SUCCESS:
      return {
        ...state,
        loading: false,
        currentNutritionist: currentNutritionist,
        error: "",
      };

    case FETCH_ONE_NUTRITIONIST_FAILURE:
      return { ...state, loading: false, error: error };

    case FETCH_NUTRITIONIST_LOGIN_REQUEST:
      return { ...state, loading: true };

    case FETCH_NUTRITIONIST_LOGIN_SUCCESS:
      return { ...state, loading: false, login: login, error: "" };

    case FETCH_NUTRITIONIST_LOGIN_FAILURE:
      return { ...state, loading: false, error: error };

    case FETCH_NUTRITIONIST_LOGIN_LOGOUT:
      return { ...state, loading: false, error: "", login: "" };

    case FETCH_NUTRITIONIST_UPDATE_REQUEST:
      return { ...state, loading: true };

    case FETCH_NUTRITIONIST_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        nutritionistUpd: nutritionistUpd,
        error: "",
      };

    case FETCH_NUTRITIONIST_UPDATE_FAILURE:
      return { ...state, loading: false, error: error };

    case FETCH_NUTRITIONIST_DELETE_REQUEST:
      return { ...state, loading: true };

    case FETCH_NUTRITIONIST_DELETE_SUCCESS:
      return { ...state, loading: false, error: "" };

    case FETCH_NUTRITIONIST_DELETE_FAILURE:
      return { ...state, loading: false, error: error };

    case FETCH_NUTRITIONIST_REGISTER_REQUEST:
      return { ...state, loading: true };

    case FETCH_NUTRITIONIST_REGISTER_SUCCESS:
      return { ...state, loading: false, register: register, error: "" };

    case FETCH_NUTRITIONIST_REGISTER_FAILURE:
      return { ...state, loading: false, error: error };

    case FETCH_NUTRITIONIST_REGISTER_UNREGISTER:
      return { ...state, loading: false, error: "", register: "" };

    case FORGOT_PASSWORD_NUTRITIONIST_REQUEST:
      return { ...state, loading: true };

    case FORGOT_PASSWORD_NUTRITIONIST_SUCCESS:
      return {
        ...state,
        loading: false,
        forgotPassword: forgotPassword,
        error: "",
      };

    case FORGOT_PASSWORD_NUTRITIONIST_FAILURE:
      return { ...state, loading: false, error: error };

    case RESET_PASSWORD_NUTRITIONIST_REQUEST:
      return { ...state, loading: true };

    case RESET_PASSWORD_NUTRITIONIST_SUCCESS:
      return {
        ...state,
        loading: false,
        resetPassword: resetPassword,
        error: "",
      };

    case RESET_PASSWORD_NUTRITIONIST_FAILURE:
      return { ...state, loading: false, error: error };

    default:
      return state;
  }
};