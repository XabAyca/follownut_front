export const FETCH_PATIENT_REQUEST = "FETCH_PATIENT_REQUEST";
export const FETCH_PATIENT_SUCCESS = "FETCH_PATIENT_SUCCESS";
export const FETCH_PATIENT_FAILURE = "FETCH_PATIENT_FAILURE";

export const fetchPatientsRequest = () => {
  return {
    type: FETCH_PATIENT_REQUEST,
  };
};
export const fetchPatientsSuccess = (patient) => {
  return {
    type: FETCH_PATIENT_SUCCESS,
    patient,
  };
};
export const fetchPatientsFailure = (error) => {
  return {
    type: FETCH_PATIENT_FAILURE,
    error,
  };
};


export const FETCH_PATIENT_LOGIN_REQUEST = "FETCH_PATIENT_LOGIN_REQUEST";
export const FETCH_PATIENT_LOGIN_SUCCESS = "FETCH_PATIENT_LOGIN_SUCCESS";
export const FETCH_PATIENT_LOGIN_FAILURE = "FETCH_PATIENT_LOGIN_FAILURE";
export const FETCH_PATIENT_LOGIN_LOGOUT = "FETCH_PATIENT_LOGIN_LOGOUT";

export const fetchPatientLoginRequest = () => {
  return {
    type: FETCH_PATIENT_LOGIN_REQUEST,
  };
};
export const fetchPatientLoginSuccess = (login) => {
  return {
    type: FETCH_PATIENT_LOGIN_SUCCESS,
    login,
  };
};
export const fetchPatientLoginFailure = (error) => {
  return {
    type: FETCH_PATIENT_LOGIN_FAILURE,
    error,
  };
};
export const fetchPatientLoginLogout = () => {
  return {
    type: FETCH_PATIENT_LOGIN_LOGOUT
  };
};


export const FETCH_PATIENT_UPDATE_REQUEST = "FETCH_PATIENT_UPDATE_REQUEST";
export const FETCH_PATIENT_UPDATE_SUCCESS = "FETCH_PATIENT_UPDATE_SUCCESS";
export const FETCH_PATIENT_UPDATE_FAILURE = "FETCH_PATIENT_UPDATE_FAILURE";

export const fetchPatientUpdateRequest = () => {
  return {
    type: FETCH_PATIENT_UPDATE_REQUEST,
  };
};
export const fetchPatientUpdateSuccess = (patient) => {
  return {
    type: FETCH_PATIENT_UPDATE_SUCCESS,
    patient,
  };
};
export const fetchPatientUpdateFailure = (error) => {
  return {
    type: FETCH_PATIENT_UPDATE_FAILURE,
    error,
  };
};


export const FETCH_PATIENT_DELETE_REQUEST = "FETCH_PATIENT_DELETE_REQUEST";
export const FETCH_PATIENT_DELETE_SUCCESS = "FETCH_PATIENT_DELETE_SUCCESS";
export const FETCH_PATIENT_DELETE_FAILURE = "FETCH_PATIENT_DELETE_FAILURE";

export const fetchPatientDeleteRequest = () => {
  return {
    type: FETCH_PATIENT_DELETE_REQUEST,
  };
};
export const fetchPatientDeleteSuccess = (patient) => {
  return {
    type: FETCH_PATIENT_DELETE_SUCCESS,
    patient,
  };
};
export const fetchPatientDeleteFailure = (error) => {
  return {
    type: FETCH_PATIENT_DELETE_FAILURE,
    error,
  };
};


export const FETCH_PATIENT_REGISTER_REQUEST = "FETCH_PATIENT_REGISTER_REQUEST";
export const FETCH_PATIENT_REGISTER_SUCCESS = "FETCH_PATIENT_REGISTER_SUCCESS";
export const FETCH_PATIENT_REGISTER_FAILURE = "FETCH_PATIENT_REGISTER_FAILURE";
export const FETCH_PATIENT_REGISTER_UNREGISTER = "FETCH_PATIENT_REGISTER_UNREGISTER";

export const fetchPatientRegisterRequest = () => {
  return {
    type: FETCH_PATIENT_REGISTER_REQUEST,
  };
};
export const fetchPatientRegisterSuccess = (register) => {
  return {
    type: FETCH_PATIENT_REGISTER_SUCCESS,
    register,
  };
};
export const fetchPatientRegisterFailure = (error) => {
  return {
    type: FETCH_PATIENT_REGISTER_FAILURE,
    error,
  };
};
export const fetchPatientRegisterUnregister = () => {
  return {
    type: FETCH_PATIENT_REGISTER_UNREGISTER
  };
};