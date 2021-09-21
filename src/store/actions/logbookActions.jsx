export const FETCH_LOGBOOKS_REQUEST = "FETCH_LOGBOOKS_REQUEST";
export const FETCH_LOGBOOKS_SUCCESS = "FETCH_LOGBOOKS_SUCCESS";
export const FETCH_LOGBOOKS_FAILURE = "FETCH_LOGBOOKS_FAILURE";

export const fetchLogbooksRequest = () => {
  return {
    type: FETCH_LOGBOOKS_REQUEST,
  };
};
export const fetchLogbooksSuccess = (logbooks) => {
  return {
    type: FETCH_LOGBOOKS_SUCCESS,
    logbooks,
  };
};
export const fetchLogbooksFailure = (error) => {
  return {
    type: FETCH_LOGBOOKS_FAILURE,
    error,
  };
};


export const DELETE_LOGBOOK_REQUEST = "DELETE_LOGBOOK_REQUEST";
export const DELETE_LOGBOOK_SUCCESS = "DELETE_LOGBOOK_SUCCESS";
export const DELETE_LOGBOOK_FAILURE = "DELETE_LOGBOOK_FAILURE";

export const deleteLogbookRequest = () => {
  return {
    type: DELETE_LOGBOOK_REQUEST,
  };
};
export const deleteLogbookSuccess = () => {
  return {
    type: DELETE_LOGBOOK_SUCCESS,
  };
};
export const deleteLogbookFailure = (error) => {
  return {
    type: DELETE_LOGBOOK_FAILURE,
    error,
  };
};


export const CREATE_LOGBOOK_REQUEST = "CREATE_LOGBOOK_REQUEST";
export const CREATE_LOGBOOK_SUCCESS = "CREATE_LOGBOOK_SUCCESS";
export const CREATE_LOGBOOK_FAILURE = "CREATE_LOGBOOK_FAILURE";

export const createLogbookRequest = () => {
  return {
    type: CREATE_LOGBOOK_REQUEST,
  };
};
export const createLogbookSuccess = (logbook) => {
  return {
    type: CREATE_LOGBOOK_SUCCESS,
    logbook,
  };
};
export const createLogbookFailure = (error) => {
  return {
    type: CREATE_LOGBOOK_FAILURE,
    error,
  };
};


export const UPDATE_LOGBOOK_REQUEST = "UPDATE_LOGBOOK_REQUEST";
export const UPDATE_LOGBOOK_SUCCESS = "UPDATE_LOGBOOK_SUCCESS";
export const UPDATE_LOGBOOK_FAILURE = "UPDATE_LOGBOOK_FAILURE";

export const updateLogbookRequest = () => {
  return {
    type:  UPDATE_LOGBOOK_REQUEST,
  };
};
export const updateLogbookSuccess = (logbook) => {
  return {
    type:  UPDATE_LOGBOOK_SUCCESS,
    logbook,
  };
};
export const updateLogbookFailure = (error) => {
  return {
    type:  UPDATE_LOGBOOK_FAILURE,
    error,
  };
};