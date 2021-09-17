import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import { patientReducer } from "store/reducers/patientReducer";
import { nutritionistReducer } from "store/reducers/nutritionistReducer";
import { appointmentsReducer } from "./reducers/appointmentsReducer";

const rootReducers = combineReducers({
  patient: patientReducer,
  nutritionists: nutritionistReducer,
  appointments: appointmentsReducer,
});

export const store = createStore(
  rootReducers,
  compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);






