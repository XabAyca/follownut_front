import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import { patientReducer } from "store/reducers/patientReducer";
import { nutritionistReducer } from "store/reducers/nutritionistReducer";

const rootReducers = combineReducers({
  patient: patientReducer,
  nutritionists: nutritionistReducer,
});

export const store = createStore(
  rootReducers,
  compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);






