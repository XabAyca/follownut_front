import { FETCH_APPOINTMENTS_FAILURE } from "store/actions/appointmentActions";
import { DELETE_APPOINTMENTS_SUCCESS } from "store/actions/appointmentActions";
import { DELETE_APPOINTMENTS_FAILURE } from "store/actions/appointmentActions";
import { DELETE_APPOINTMENTS_REQUEST } from "store/actions/appointmentActions";
import { FETCH_APPOINTMENTS_SUCCESS } from "store/actions/appointmentActions";
import { FETCH_APPOINTMENTS_REQUEST } from "store/actions/appointmentActions";

const initialState = {
  loading: false,
  error: "",
  appointments: "",
};

export const appointmentsReducer = (
  state = initialState,
  { appointments, error, type }
) => {
  switch (type) {
    
    case FETCH_APPOINTMENTS_REQUEST:
      return { ...state, loading: true };

    case FETCH_APPOINTMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        appointments: appointments,
        error: "",
      };

    case FETCH_APPOINTMENTS_FAILURE:
      return { ...state, loading: false, error: error };

    case DELETE_APPOINTMENTS_REQUEST:
      return { ...state, loading: true };

    case DELETE_APPOINTMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
      };

    case DELETE_APPOINTMENTS_FAILURE:
      return { ...state, loading: false, error: error };

    default:
      return state;
  }
};
