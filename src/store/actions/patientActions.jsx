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

export const FETCH_ONE_PATIENT_REQUEST = "FETCH_ONE_PATIENT_REQUEST";
export const FETCH_ONE_PATIENT_SUCCESS = "FETCH_ONE_PATIENT_SUCCESS";
export const FETCH_ONE_PATIENT_FAILURE = "FETCH_ONE_PATIENT_FAILURE";

export const fetchOnePatientsRequest = () => {
  return {
    type: FETCH_ONE_PATIENT_REQUEST,
  };
};
export const fetchOnePatientsSuccess = (currentPatient) => {
  return {
    type: FETCH_ONE_PATIENT_SUCCESS,
    currentPatient,
  };
};
export const fetchOnePatientsFailure = (error) => {
  return {
    type: FETCH_ONE_PATIENT_FAILURE,
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
export const fetchPatientUpdateSuccess = (patientUpd) => {
  return {
    type: FETCH_PATIENT_UPDATE_SUCCESS,
    patientUpd,
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
export const fetchPatientDeleteSuccess = () => {
  return {
    type: FETCH_PATIENT_DELETE_SUCCESS,
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

export const FETCH_CREATE_PATIENT_REQUEST = "FETCH_CREATE_PATIENT_REQUEST";
export const FETCH_CREATE_PATIENT_SUCCESS = "FETCH_CREATE_PATIENT_SUCCESS";
export const FETCH_CREATE_PATIENT_FAILURE = "FETCH_CREATE_PATIENT_FAILURE";

export const fetchPatientCreateRequest = () => {
  return {
    type: FETCH_CREATE_PATIENT_REQUEST,
  };
};
export const fetchPatientCreateSuccess = (newPatient) => {
  return {
    type: FETCH_CREATE_PATIENT_SUCCESS,
    newPatient,
  };
};
export const fetchPatientCreateFailure = (error) => {
  return {
    type: FETCH_CREATE_PATIENT_FAILURE,
    error,
  };
};

export const FORGOT_PASSWORD_PATIENT_REQUEST = "FORGOT_PASSWORD_PATIENT_REQUEST";
export const FORGOT_PASSWORD_PATIENT_SUCCESS = "FORGOT_PASSWORD_PATIENT_SUCCESS";
export const FORGOT_PASSWORD_PATIENT_FAILURE = "FORGOT_PASSWORD_PATIENT_FAILURE";

export const forgotPasswordPatientRequest = () => {
  return {
    type: FORGOT_PASSWORD_PATIENT_REQUEST,
  };
};
export const forgotPasswordPatientSuccess = (forgotPassword) => {
  return {
    type: FORGOT_PASSWORD_PATIENT_SUCCESS,
    forgotPassword,
  };
};
export const forgotPasswordPatientFailure = (error) => {
  return {
    type: FORGOT_PASSWORD_PATIENT_FAILURE,
    error,
  };
};

export const RESET_PASSWORD_PATIENT_REQUEST = "RESET_PASSWORD_PATIENT_REQUEST";
export const RESET_PASSWORD_PATIENT_SUCCESS = "RESET_PASSWORD_PATIENT_SUCCESS";
export const RESET_PASSWORD_PATIENT_FAILURE = "RESET_PASSWORD_PATIENT_FAILURE";

export const resetPasswordPatientRequest = () => {
  return {
    type: RESET_PASSWORD_PATIENT_REQUEST,
  };
};
export const resetPasswordPatientSuccess = (resetPassword) => {
  return {
    type: RESET_PASSWORD_PATIENT_SUCCESS,
    resetPassword,
  };
};
export const resetPasswordPatientFailure = (error) => {
  return {
    type: RESET_PASSWORD_PATIENT_FAILURE,
    error,
  };
};