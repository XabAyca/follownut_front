import { FETCH_PATIENT_FAILURE, FETCH_PATIENT_REQUEST, FETCH_PATIENT_SUCCESS } from "store/actions/patientActions";
import { FETCH_PATIENT_DELETE_SUCCESS } from "store/actions/patientActions";
import { FETCH_PATIENT_DELETE_FAILURE } from "store/actions/patientActions";
import { FETCH_ONE_PATIENT_SUCCESS } from "store/actions/patientActions";
import { FETCH_ONE_PATIENT_FAILURE } from "store/actions/patientActions";
import { FETCH_ONE_PATIENT_REQUEST } from "store/actions/patientActions";
import { FETCH_PATIENT_DELETE_REQUEST } from "store/actions/patientActions";
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
  currentPatient:''
};

export const patientReducer = (state = initialState, { type, error, patient, login, register,patientUpd, currentPatient }) => {
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

    default:
      return state;
  }
};