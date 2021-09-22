
import { FETCH_LOGBOOKS_FAILURE, FETCH_LOGBOOKS_REQUEST, FETCH_LOGBOOKS_SUCCESS } from "store/actions/logbookActions";
import { DELETE_LOGBOOK_FAILURE, DELETE_LOGBOOK_REQUEST, DELETE_LOGBOOK_SUCCESS } from "store/actions/logbookActions";
import { CREATE_LOGBOOK_FAILURE, CREATE_LOGBOOK_REQUEST, CREATE_LOGBOOK_SUCCESS } from "store/actions/logbookActions";
import { UPDATE_LOGBOOK_FAILURE, UPDATE_LOGBOOK_REQUEST, UPDATE_LOGBOOK_SUCCESS } from "store/actions/logbookActions";


const initialState = {
  loading: false,
  error: "",
  logbooks: "",
  logbook:""
};

export const logbooksReducer = (
  state = initialState,
  { logbooks, error, type, logbook }
) => {
  switch (type) {
    case FETCH_LOGBOOKS_REQUEST: 
      return { ...state, loading: true };

    case FETCH_LOGBOOKS_SUCCESS:
      return { ...state, loading: false, logbooks: logbooks, error: "" };

    case FETCH_LOGBOOKS_FAILURE:
      return { ...state, loading: false, error: error };

    case DELETE_LOGBOOK_REQUEST: 
      return { ...state, loading: true };

    case DELETE_LOGBOOK_SUCCESS:
      return { ...state, loading: false, error: "" };

    case DELETE_LOGBOOK_FAILURE:
      return { ...state, loading: false, error: error };

    case CREATE_LOGBOOK_REQUEST:
      return { ...state, loading: true };

    case CREATE_LOGBOOK_SUCCESS:
      return { ...state, loading: false, error: "", logbook: logbook };

    case CREATE_LOGBOOK_FAILURE:
      return { ...state, loading: false, error: error };

    case UPDATE_LOGBOOK_REQUEST:
      return { ...state, loading: true };

    case UPDATE_LOGBOOK_SUCCESS:
      return { ...state, loading: false, error: "", logbook: logbook };

    case UPDATE_LOGBOOK_FAILURE:
      return { ...state, loading: false, error: error };

    default:
      return state;
  }
};
