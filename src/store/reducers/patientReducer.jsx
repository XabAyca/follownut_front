import { FETCH_PATIENT_FAILURE, FETCH_PATIENT_REQUEST, FETCH_PATIENT_SUCCESS } from "store/actions/patientActions";
import { FETCH_PATIENT_DELETE_FAILURE, FETCH_PATIENT_DELETE_REQUEST, FETCH_PATIENT_DELETE_SUCCESS } from "store/actions/patientActions";
import { FETCH_CREATE_PATIENT_FAILURE, FETCH_CREATE_PATIENT_REQUEST, FETCH_CREATE_PATIENT_SUCCESS } from "store/actions/patientActions";
import { FORGOT_PASSWORD_PATIENT_SUCCESS } from "store/actions/patientActions";
import { RESET_PASSWORD_PATIENT_REQUEST } from "store/actions/patientActions";
import { RESET_PASSWORD_PATIENT_FAILURE } from "store/actions/patientActions";
import { RESET_PASSWORD_PATIENT_SUCCESS } from "store/actions/patientActions";
import { FORGOT_PASSWORD_PATIENT_FAILURE } from "store/actions/patientActions";
import { FORGOT_PASSWORD_PATIENT_REQUEST } from "store/actions/patientActions";
import { FETCH_ONE_PATIENT_FAILURE, FETCH_ONE_PATIENT_REQUEST, FETCH_ONE_PATIENT_SUCCESS } from "store/actions/patientActions";
import { FETCH_PATIENT_LOGIN_FAILURE, FETCH_PATIENT_LOGIN_LOGOUT, FETCH_PATIENT_LOGIN_REQUEST, FETCH_PATIENT_LOGIN_SUCCESS } from "store/actions/patientActions";
import { FETCH_PATIENT_REGISTER_FAILURE, FETCH_PATIENT_REGISTER_REQUEST, FETCH_PATIENT_REGISTER_SUCCESS, FETCH_PATIENT_REGISTER_UNREGISTER } from "store/actions/patientActions";
import { FETCH_PATIENT_UPDATE_FAILURE, FETCH_PATIENT_UPDATE_REQUEST, FETCH_PATIENT_UPDATE_SUCCESS } from "store/actions/patientActions";


const initialState = {
  loading: false,
  error: "",
  patient: "",
  register: "",
  login: "",
  patientUpd: '',
  currentPatient: '',
  newPatient: "",
  forgotPassword: "",
  resetPassword:""
};

export const patientReducer = (state = initialState, { type, error, patient, login, register, patientUpd, currentPatient, newPatient, forgotPassword, resetPassword }) => {
  switch (type) {
    case FETCH_PATIENT_REQUEST:
      return { ...state, loading: true };

    case FETCH_PATIENT_SUCCESS:
      return { ...state, loading: false, patient: patient, error: "" };

    case FETCH_PATIENT_FAILURE:
      return { ...state, loading: false, error: error };

    case FETCH_ONE_PATIENT_REQUEST:
      return { ...state, loading: true };

    case FETCH_ONE_PATIENT_SUCCESS:
      return { ...state, loading: false, currentPatient: currentPatient, error: "" };

    case FETCH_ONE_PATIENT_FAILURE:
      return { ...state, loading: false, error: error };

    case FETCH_PATIENT_LOGIN_REQUEST:
      return { ...state, loading: true };

    case FETCH_PATIENT_LOGIN_SUCCESS:
      return { ...state, loading: false, login: login, error: "" };

    case FETCH_PATIENT_LOGIN_FAILURE:
      return { ...state, loading: false, error: error };

    case FETCH_PATIENT_LOGIN_LOGOUT:
      return { ...state, loading: false, error: "", login: "" };

    case FETCH_PATIENT_UPDATE_REQUEST:
      return { ...state, loading: true };

    case FETCH_PATIENT_UPDATE_SUCCESS:
      return { ...state, loading: false, patientUpd: patientUpd, error: "" };

    case FETCH_PATIENT_UPDATE_FAILURE:
      return { ...state, loading: false, error: error };

    case FETCH_PATIENT_DELETE_REQUEST:
      return { ...state, loading: true };

    case FETCH_PATIENT_DELETE_SUCCESS:
      return { ...state, loading: false, error: "" };

    case FETCH_PATIENT_DELETE_FAILURE:
      return { ...state, loading: false, error: error };

    case FETCH_PATIENT_REGISTER_REQUEST:
      return { ...state, loading: true };

    case FETCH_PATIENT_REGISTER_SUCCESS:
      return { ...state, loading: false, register: register, error: "" };

    case FETCH_PATIENT_REGISTER_FAILURE:
      return { ...state, loading: false, error: error };

    case FETCH_PATIENT_REGISTER_UNREGISTER:
      return { ...state, loading: false, error: "", register: "" };

    case FETCH_CREATE_PATIENT_REQUEST:
      return { ...state, loading: true };

    case FETCH_CREATE_PATIENT_SUCCESS:
      return { ...state, loading: false, newPatient: newPatient, error: "" };

    case FETCH_CREATE_PATIENT_FAILURE:
      return { ...state, loading: false, error: error };

    case FORGOT_PASSWORD_PATIENT_REQUEST:
      return { ...state, loading: true };

    case FORGOT_PASSWORD_PATIENT_SUCCESS:
      return { ...state, loading: false, forgotPassword: forgotPassword, error: "" };

    case FORGOT_PASSWORD_PATIENT_FAILURE:
      return { ...state, loading: false, error: error };

    case RESET_PASSWORD_PATIENT_REQUEST:
      return { ...state, loading: true };

    case RESET_PASSWORD_PATIENT_SUCCESS:
      return { ...state, loading: false, resetPassword: resetPassword, error: "" };

    case RESET_PASSWORD_PATIENT_FAILURE:
      return { ...state, loading: false, error: error };

    default:
      return state;
  }
};