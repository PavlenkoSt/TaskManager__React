import { combineReducers, compose, createStore } from "redux";
import calendarReducer from "./calendarReducer";

const redusers = combineReducers({
    calendar: calendarReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(redusers, composeEnhancers())

export default store