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
