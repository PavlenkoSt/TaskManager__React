import { combineReducers, compose, createStore } from "redux";
import calendarReducer from "./calendarReducer";
import { reducer as formReducer } from 'redux-form'


const redusers = combineReducers({
    calendar: calendarReducer,
    form: formReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(redusers, composeEnhancers())

export default store