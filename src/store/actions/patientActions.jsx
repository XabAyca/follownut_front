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
