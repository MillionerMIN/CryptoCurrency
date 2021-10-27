import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from 'redux-thunk'
import { currencyAPI } from '../api/Api';
import { currencyListReducer } from "./currencyList-reducer";

export const rootReducer = combineReducers({
  currencyList: currencyListReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;