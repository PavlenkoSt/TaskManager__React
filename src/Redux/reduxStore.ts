import { combineReducers, compose, createStore } from "redux"
import calendarReducer from "./calendarReducer"
import { reducer as formReducer } from 'redux-form'


const redusers = combineReducers({
    calendar: calendarReducer,
    form: formReducer
})

type RootReducerType = typeof redusers
export type AppStateType = ReturnType<RootReducerType>

type ProreptiesType<T> = T extends { [key: string]: infer U} ? U : never
export type ActionTypes<T extends {[key: string] : (...args: any) => any}> = ReturnType<ProreptiesType<T>>

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(redusers, composeEnhancers())

export default store