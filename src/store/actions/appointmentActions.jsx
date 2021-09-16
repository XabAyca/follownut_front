export const FETCH_APPOINTMENTS_REQUEST = "FETCH_APPOINTMENTS_REQUEST";
export const FETCH_APPOINTMENTS_SUCCESS = "FETCH_APPOINTMENTS_SUCCESS";
export const FETCH_APPOINTMENTS_FAILURE = "FETCH_APPOINTMENTS_FAILURE";

export const fetchAppointmentsRequest = () => {
  return {
    type: FETCH_APPOINTMENTS_REQUEST,
  };
};
export const fetchAppointmentsSuccess = (appointments) => {
  return {
    type: FETCH_APPOINTMENTS_SUCCESS,
    appointments,
  };
};
export const fetchAppointmentsFailure = (error) => {
  return {
    type: FETCH_APPOINTMENTS_FAILURE,
    error,
  };
};

export const DELETE_APPOINTMENTS_REQUEST = "DELETE_APPOINTMENTS_REQUEST";
export const DELETE_APPOINTMENTS_SUCCESS = "DELETE_APPOINTMENTS_SUCCESS";
export const DELETE_APPOINTMENTS_FAILURE = "DELETE_APPOINTMENTS_FAILURE";

export const deleteAppointmentRequest = () => {
  return {
    type: DELETE_APPOINTMENTS_REQUEST,
  };
};
export const deleteAppointmentSuccess = () => {
  return {
    type: DELETE_APPOINTMENTS_SUCCESS,
  };
};
export const deleteAppointmentFailure = (error) => {
  return {
    type: DELETE_APPOINTMENTS_FAILURE,
    error,
  };
};

export const CREATE_APPOINTMENT_REQUEST = "CREATE_APPOINTMENT_REQUEST";
export const CREATE_APPOINTMENT_SUCCESS = "CREATE_APPOINTMENT_SUCCESS";
export const CREATE_APPOINTMENT_FAILURE = "CREATE_APPOINTMENT_FAILURE";

export const createAppointmentRequest = () => {
  return {
    type: CREATE_APPOINTMENT_REQUEST,
  };
};
export const createAppointmentSuccess = (appointment) => {
  return {
    type: CREATE_APPOINTMENT_SUCCESS,
    appointment
  };
};
export const createAppointmentFailure = (error) => {
  return {
    type: CREATE_APPOINTMENT_FAILURE,
    error,
  };
};