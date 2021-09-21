import { FETCH_APPOINTMENTS_FAILURE, FETCH_APPOINTMENTS_REQUEST, FETCH_APPOINTMENTS_SUCCESS } from "store/actions/appointmentActions";
import { CREATE_APPOINTMENT_FAILURE, CREATE_APPOINTMENT_REQUEST, CREATE_APPOINTMENT_SUCCESS } from "store/actions/appointmentActions";
import { DELETE_APPOINTMENTS_FAILURE, DELETE_APPOINTMENTS_REQUEST, DELETE_APPOINTMENTS_SUCCESS } from "store/actions/appointmentActions";


const initialState = {
  loading: false,
  error: "",
  appointments: "",
  appointment:""
};

export const appointmentsReducer = (
  state = initialState,
  { appointments, error, type, appointment }
) => {
  switch (type) {
    case FETCH_APPOINTMENTS_REQUEST:
      return { ...state, loading: true };

    case FETCH_APPOINTMENTS_SUCCESS:
      return { ...state, loading: false, appointments: appointments, error: "" };

    case FETCH_APPOINTMENTS_FAILURE:
      return { ...state, loading: false, error: error };

    case DELETE_APPOINTMENTS_REQUEST:
      return { ...state, loading: true };

    case DELETE_APPOINTMENTS_SUCCESS:
      return { ...state, loading: false, error: "" };

    case DELETE_APPOINTMENTS_FAILURE:
      return { ...state, loading: false, error: error };

    case CREATE_APPOINTMENT_REQUEST:
      return { ...state, loading: true };

    case CREATE_APPOINTMENT_SUCCESS:
      return { ...state, loading: false, error: "", appointment: appointment };

    case CREATE_APPOINTMENT_FAILURE:
      return { ...state, loading: false, error: error };

    default:
      return state;
  }
};
